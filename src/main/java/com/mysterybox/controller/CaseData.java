package com.mysterybox.controller;

import java.util.HashMap;
import java.util.Map;

public final class CaseData {

    private static final Map<String, String> CULPRITS =
            new HashMap<String, String>();

    private static final Map<String, Integer> CLUE_COUNTS =
            new HashMap<String, Integer>();

    static {

        CULPRITS.put("case001", "oliver");
        CULPRITS.put("case002", "elena");
        CULPRITS.put("case003", "victor");
        CULPRITS.put("case004", "noah");
        CULPRITS.put("case005", "iris");

        CLUE_COUNTS.put("case001", 5);
        CLUE_COUNTS.put("case002", 6);
        CLUE_COUNTS.put("case003", 6);
        CLUE_COUNTS.put("case004", 7);
        CLUE_COUNTS.put("case005", 7);

    }

    private CaseData() {
    }

    public static boolean isValidCase(String caseId) {
        return caseId != null && CULPRITS.containsKey(caseId);
    }

    public static String getCulprit(String caseId) {
        return CULPRITS.get(caseId);
    }

    public static int getClueCount(String caseId) {
        Integer count = CLUE_COUNTS.get(caseId);
        return count == null ? 0 : count;
    }

    public static boolean isValidSuspect(
            String caseId,
            String suspect) {

        if (caseId == null || suspect == null) {
            return false;
        }

        switch (caseId) {

            case "case001":
                return oneOf(suspect,
                        "victoria", "daniel", "oliver", "margaret");

            case "case002":
                return oneOf(suspect,
                        "elena", "marcus", "sophia", "henry");

            case "case003":
                return oneOf(suspect,
                        "victor", "clara", "edward", "nina");

            case "case004":
                return oneOf(suspect,
                        "noah", "lena", "peter", "maya");

            case "case005":
                return oneOf(suspect,
                        "iris", "caleb", "ruby", "owen");

            default:
                return false;

        }

    }

    private static boolean oneOf(String value, String... options) {

        for (String option : options) {

            if (option.equals(value)) {
                return true;
            }

        }

        return false;

    }

}