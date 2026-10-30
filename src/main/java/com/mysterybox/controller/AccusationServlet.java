
package com.mysterybox.controller;

import java.io.IOException;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/accuse")
public class AccusationServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {

        request.setCharacterEncoding("UTF-8");

        HttpSession session = request.getSession(false);

        if (session == null) {
            response.sendError(400, "Start an investigation first.");
            return;
        }

        String caseId = request.getParameter("caseId");
        String suspect = request.getParameter("suspect");

        if (!CaseData.isValidCase(caseId)
                || !caseId.equals(session.getAttribute("caseId"))) {
            response.sendError(400, "Invalid investigation.");
            return;
        }

        if (Boolean.TRUE.equals(
                session.getAttribute("investigationFinished"))) {
            response.sendError(400,
                    "This investigation has already finished.");
            return;
        }

        if (!CaseData.isValidSuspect(caseId, suspect)) {
            response.sendError(400, "Invalid suspect for this case.");
            return;
        }

        Object scoreObject = session.getAttribute("score");

        int score = scoreObject instanceof Number
                ? ((Number) scoreObject).intValue() : 100;

        // Verify the accusation on the server.
        boolean correct = CaseData.getCulprit(caseId).equals(suspect);

        if (!correct) {
            score = 0;
        }

        // Count unique clues examined.
        Object cluesObject = session.getAttribute("cluesExamined");
        int cluesExamined = 0;

        if (cluesObject instanceof Collection<?>) {
            cluesExamined =
                    ((Collection<?>) cluesObject).size();
        } else if (cluesObject instanceof Number) {
            cluesExamined =
                    ((Number) cluesObject).intValue();
        }

        // Calculate actual elapsed time.
        Object startObject =
                session.getAttribute("investigationStartTime");

        if (!(startObject instanceof Number)) {
            response.sendError(400,
                    "Investigation start time was not recorded. Start a new case.");
            return;
        }

        long startTime = ((Number) startObject).longValue();

        long timeTakenSeconds = Math.max(
                0,
                (System.currentTimeMillis() - startTime) / 1000
        );

        // Store the actual final results.
        session.setAttribute("correct", correct);
        session.setAttribute("score", score);
        session.setAttribute("suspect", suspect);
        session.setAttribute("cluesExaminedCount", cluesExamined);
        session.setAttribute("timeTakenSeconds", timeTakenSeconds);
        session.setAttribute("investigationFinished", true);

        request.getRequestDispatcher("/result.jsp")
                .forward(request, response);
    }

    @Override
    protected void doGet(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        response.sendError(
                HttpServletResponse.SC_METHOD_NOT_ALLOWED,
                "Submit an accusation from the investigation page."
        );
    }
}
