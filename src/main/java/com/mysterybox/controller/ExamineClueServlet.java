package com.mysterybox.controller;

import java.io.IOException;
import java.util.Set;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/examine-clue")
public class ExamineClueServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    private static final int CLUE_PENALTY = 5;

    @Override
    @SuppressWarnings("unchecked")
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        response.setContentType("application/json;charset=UTF-8");

        HttpSession session = request.getSession(false);

        if (session == null) {
            response.sendError(400, "Start an investigation first.");
            return;
        }

        String caseId = request.getParameter("caseId");

        if (!CaseData.isValidCase(caseId)
                || !caseId.equals(session.getAttribute("caseId"))) {

            response.sendError(400, "Invalid investigation.");
            return;

        }

        if (Boolean.TRUE.equals(
                session.getAttribute("investigationFinished"))) {

            response.sendError(400, "The investigation has finished.");
            return;

        }

        int clueIndex;

        try {

            clueIndex = Integer.parseInt(
                    request.getParameter("clueIndex"));

        } catch (Exception e) {

            response.sendError(400, "Invalid clue.");
            return;

        }

        int totalClues = CaseData.getClueCount(caseId);

        if (clueIndex < 0 || clueIndex >= totalClues) {
            response.sendError(400, "Invalid clue.");
            return;
        }

        Object stored = session.getAttribute("cluesExamined");

        Set<Integer> examined;

        if (stored instanceof Set<?>) {
            examined = (Set<Integer>) stored;
        } else {
            response.sendError(400, "Investigation session is invalid.");
            return;
        }

        int score = (Integer) session.getAttribute("score");

        if (examined.add(clueIndex)) {

            score = Math.max(0, score - CLUE_PENALTY);

            session.setAttribute("score", score);
            session.setAttribute("cluesExamined", examined);

        }

        response.setStatus(HttpServletResponse.SC_OK);

        response.getWriter().write(
                "{\"score\":" + score
                + ",\"cluesExamined\":" + examined.size()
                + "}");

    }

}