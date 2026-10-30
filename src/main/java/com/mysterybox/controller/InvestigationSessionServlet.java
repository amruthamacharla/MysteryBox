
package com.mysterybox.controller;

import java.io.IOException;
import java.util.HashSet;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/investigation-session")
public class InvestigationSessionServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    @Override
    protected void doPost(
            HttpServletRequest request,
            HttpServletResponse response)
            throws IOException {

        request.setCharacterEncoding("UTF-8");

        String caseId = request.getParameter("caseId");

        if (!CaseData.isValidCase(caseId)) {
            response.sendError(400, "Invalid case.");
            return;
        }

        HttpSession session = request.getSession();

        // Initialize a fresh investigation.
        session.setAttribute("caseId", caseId);
        session.setAttribute("score", 100);
        session.setAttribute("cluesExamined", new HashSet<Integer>());
        session.setAttribute("investigationStartTime",
                System.currentTimeMillis());
        session.setAttribute("investigationFinished", false);

        // Clear results from the previous investigation.
        session.removeAttribute("correct");
        session.removeAttribute("suspect");
        session.removeAttribute("timeTakenSeconds");
        session.removeAttribute("cluesExaminedCount");

        response.setStatus(HttpServletResponse.SC_OK);
        response.setContentType("text/plain;charset=UTF-8");
        response.getWriter().write("Investigation started.");
    }
}
