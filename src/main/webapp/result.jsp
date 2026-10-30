
<%@ page contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ page import="java.util.concurrent.TimeUnit" %>

<%
    Object correctObject = session.getAttribute("correct");
    boolean correct = Boolean.TRUE.equals(correctObject);

    Object scoreObject = session.getAttribute("score");
    int score = scoreObject instanceof Number
            ? ((Number) scoreObject).intValue() : 0;

    Object caseObject = session.getAttribute("caseId");
    String caseId = caseObject == null ? "" : caseObject.toString();

    String caseName = "Mystery Case";

    if ("case001".equals(caseId))
        caseName = "The Midnight Mansion";
    else if ("case002".equals(caseId))
        caseName = "The Missing Diamond";
    else if ("case003".equals(caseId))
        caseName = "Murder on the Night Train";
    else if ("case004".equals(caseId))
        caseName = "The Vanishing Scientist";
    else if ("case005".equals(caseId))
        caseName = "The Last Photograph";

    Object cluesObject = session.getAttribute("cluesExaminedCount");
    int cluesExamined = cluesObject instanceof Number
            ? ((Number) cluesObject).intValue() : 0;

    Object timeObject = session.getAttribute("timeTakenSeconds");
    long timeTaken = timeObject instanceof Number
            ? ((Number) timeObject).longValue() : 0;

    long minutes = TimeUnit.SECONDS.toMinutes(timeTaken);
    long seconds = timeTaken % 60;

    String accusation = correct ? "Correct" : "Incorrect";
    String finalResult = correct ? "Mystery Solved" : "Case Unsolved";

    String investigationStyle;

    if (!correct) {
        investigationStyle = "Needs Improvement";
    } else if (cluesExamined <= 2) {
        investigationStyle = "Efficient";
    } else if (cluesExamined <= 4) {
        investigationStyle = "Careful";
    } else {
        investigationStyle = "Thorough";
    }

    String feedback;

    if (!correct) {
        feedback = "Your accusation was incorrect. Review the evidence and try again.";
    } else if (cluesExamined <= 2) {
        feedback = "You solved the mystery using very few clues. Excellent efficiency!";
    } else if (cluesExamined <= 4) {
        feedback = "You examined several clues and successfully identified the culprit.";
    } else {
        feedback = "You carefully examined many clues before solving the mystery.";
    }
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>MysteryBox - Detective Report</title>

    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">

    <style>
        body {
            background: #101114;
            color: white;
            text-align: center;
            padding: 60px 16px;
            font-family: Arial, sans-serif;
        }

        .result-card {
            max-width: 700px;
            margin: auto;
            padding: 35px;
            background: #191a20;
            border: 1px solid #d4af70;
            border-radius: 18px;
            box-shadow: 0 0 25px rgba(212, 175, 112, 0.12);
        }

        .subtitle {
            color: #d4af70;
            letter-spacing: 2px;
            font-size: 13px;
        }

        .final-score {
            color: #d4af70;
            font-size: 36px;
            font-weight: bold;
            margin-top: 8px;
        }

        .summary {
            margin-top: 28px;
            text-align: left;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            gap: 15px;
            padding: 15px 8px;
            border-bottom: 1px solid #34353c;
        }

        .summary-row span:first-child {
            color: #c5c5c5;
        }

        .summary-row span:last-child {
            font-weight: bold;
            text-align: right;
        }

        .feedback {
            background: #22232a;
            border-radius: 10px;
            padding: 20px;
            margin-top: 25px;
            line-height: 1.7;
        }

        .gold {
            color: #d4af70;
        }

        @media (max-width: 480px) {
            .result-card {
                padding: 22px 16px;
            }

            .summary-row {
                font-size: 14px;
            }
        }
    </style>
</head>

<body>
    <main class="result-card">

        <p class="subtitle">YOUR INVESTIGATION REPORT</p>

        <h1>
            <%= correct ? "CASE COMPLETED" : "CASE UNSOLVED" %>
        </h1>

        <h3 class="gold mt-3"><%= caseName %></h3>

        <div class="mt-4">
            <div class="subtitle">FINAL SCORE</div>
            <div class="final-score"><%= score %>/100</div>
        </div>

        <div class="summary">

            <div class="summary-row">
                <span>Time Taken</span>
                <span><%= String.format("%02d:%02d", minutes, seconds) %></span>
            </div>

            <div class="summary-row">
                <span>Clues Examined</span>
                <span><%= cluesExamined %></span>
            </div>

            <div class="summary-row">
                <span>Accusation</span>
                <span><%= accusation %></span>
            </div>

            <div class="summary-row">
                <span>Investigation Style</span>
                <span><%= investigationStyle %></span>
            </div>

            <div class="summary-row">
                <span>Final Result</span>
                <span><%= finalResult %></span>
            </div>

        </div>

        <div class="feedback">
            <h5 class="gold">Detective Feedback</h5>
            <p class="mb-0"><%= feedback %></p>
        </div>

        <a href="index.html" class="btn btn-danger mt-4">
            Play Again
        </a>

    </main>
</body>
</html>
