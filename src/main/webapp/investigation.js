"use strict";

/* =========================================
   MYSTERYBOX CASE DATABASE
   ========================================= */

const cases = {

    case001: {
        title: "The Midnight Mansion",
        difficulty: "Easy",
        duration: 180,

        description:
            "A wealthy businessman is found dead inside his locked study.",

        story: `INCIDENT REPORT: CASE 001
THE BLACKWOOD MANSION MYSTERY

Victim: Richard Blackwood
Location: Blackwood Mansion
Time: Friday night, approximately 10:00 PM

Richard Blackwood was a wealthy businessman. During dinner, he announced that someone was secretly stealing money from his company. He promised to reveal the person's identity before midnight.

At approximately 9:45 PM, the mansion experienced a power failure. Fifteen minutes later, Margaret, the housekeeper, discovered Richard unconscious beside his desk.

The study door was locked. A window was open, muddy footprints were found near the desk, and the study key was missing.

Four people were present in the mansion. Each had a possible motive.

YOUR MISSION:
Examine the incident, investigate the suspects, and identify the person responsible.`,

        culprit: "oliver",

        suspects: [
            {
                id: "victoria",
                name: "Victoria Blackwood",
                role: "Victim's daughter",
                description:
                    "Victoria expected a large inheritance. Richard threatened to remove her from his will."
            },
            {
                id: "daniel",
                name: "Daniel Reed",
                role: "Business partner",
                description:
                    "Daniel had financial problems after Richard rejected his business proposal."
            },
            {
                id: "oliver",
                name: "Oliver Grant",
                role: "Personal assistant",
                description:
                    "Oliver managed Richard's private documents and had access to the study key."
            },
            {
                id: "margaret",
                name: "Margaret Wilson",
                role: "Housekeeper",
                description:
                    "Margaret discovered Richard and claimed she was in the kitchen during the power failure."
            }
        ],

        clues: [
            {
                title: "The Broken Watch",
                description:
                    "Richard's broken watch stopped at 9:45 PM, approximately when the lights failed."
            },
            {
                title: "The Torn Contract",
                description:
                    "A torn financial contract reveals that Richard planned to report missing company funds."
            },
            {
                title: "Muddy Footprints",
                description:
                    "The footprints near the desk match the unusual tread pattern of Oliver's shoes."
            },
            {
                title: "The Missing Key",
                description:
                    "The study key was missing. Records show Oliver borrowed it earlier that evening."
            },
            {
                title: "The Final Note",
                description:
                    "A note on Richard's desk reads: The person I trusted most has betrayed me."
            }
        ],

        explanation:
            "Oliver had access to the study key. The muddy footprints, missing key, and financial documents connect him to the incident."
    },

    case002: {
        title: "The Missing Diamond",
        difficulty: "Easy",
        duration: 180,

        description:
            "A priceless diamond disappears during a museum gala.",

        story: `INCIDENT REPORT: CASE 002
THE MISSING DIAMOND

Missing Item: The Star of Aurora
Location: National Museum
Time: Saturday evening, approximately 8:30 PM

The National Museum hosted a grand gala to display the Star of Aurora, a priceless diamond.

At 8:30 PM, the lights went out for two minutes. When the emergency lights came on, the diamond was missing from its display case.

The display case showed no signs of forced entry. Security footage revealed that the blackout began after someone accessed the museum's internal security system.

Four people had access to the exhibition area: Elena, Marcus, Sophia, and Henry.

YOUR MISSION:
Study the security records, examine the clues if you wish, and identify who stole the diamond.`,

        culprit: "elena",

        suspects: [
            {
                id: "elena",
                name: "Elena Moore",
                role: "Museum curator",
                description:
                    "Elena managed the exhibition and had administrative access to the security system."
            },
            {
                id: "marcus",
                name: "Marcus Hill",
                role: "Security guard",
                description:
                    "Marcus monitored the exhibition cameras during the gala."
            },
            {
                id: "sophia",
                name: "Sophia Lane",
                role: "Event organiser",
                description:
                    "Sophia coordinated the gala schedule and had access to staff-only corridors."
            },
            {
                id: "henry",
                name: "Henry Cole",
                role: "Maintenance technician",
                description:
                    "Henry maintained electrical equipment and knew how to access the power controls."
            }
        ],

        clues: [
            {
                title: "The Empty Display",
                description:
                    "The display case was opened without damaging its lock, suggesting authorised access."
            },
            {
                title: "The Security Gap",
                description:
                    "The blackout was initiated through the curator's administrative account."
            },
            {
                title: "The Revised Schedule",
                description:
                    "Elena changed the exhibition maintenance schedule shortly before the gala."
            },
            {
                title: "The Undamaged Lock",
                description:
                    "The lock shows no signs of force. Someone likely had the correct access credentials."
            },
            {
                title: "The Service Corridor",
                description:
                    "A witness saw a person carrying a small case entering the restricted corridor during the blackout."
            },
            {
                title: "The Hidden Receipt",
                description:
                    "A receipt found in Elena's office refers to a meeting with a private diamond buyer."
            }
        ],

        explanation:
            "Elena's administrative account initiated the security gap. The changed schedule and receipt connecting her to a private buyer provide further evidence."
    },

    case003: {
        title: "Murder on the Night Train",
        difficulty: "Medium",
        duration: 240,

        description:
            "A passenger is found dead aboard the Silver Crest Express.",

        story: `INCIDENT REPORT: CASE 003
MURDER ON THE NIGHT TRAIN

Victim: Adrian Frost
Location: Silver Crest Express, compartment 12
Time: Sunday night

Adrian Frost was a wealthy businessman who had recently changed his inheritance arrangements.

Earlier that evening, Adrian argued with several passengers. He planned to leave his fortune to a charitable foundation instead of his relatives.

Later, a passenger reported a strange smell coming from compartment 12. Investigators discovered Adrian inside.

Four passengers became suspects: Victor, Clara, Edward, and Nina.

YOUR MISSION:
Reconstruct the victim's final movements and identify the responsible passenger.`,

        culprit: "victor",

        suspects: [
            {
                id: "victor",
                name: "Victor Frost",
                role: "Victim's nephew",
                description:
                    "Victor expected to inherit Adrian's fortune and was furious about the new will."
            },
            {
                id: "clara",
                name: "Clara Evans",
                role: "Journalist",
                description:
                    "Clara was interviewing Adrian about a business scandal."
            },
            {
                id: "edward",
                name: "Edward Miles",
                role: "Train conductor",
                description:
                    "Edward had access to train compartments and maintained passenger records."
            },
            {
                id: "nina",
                name: "Nina Blake",
                role: "Business associate",
                description:
                    "Nina had recently lost money in a failed investment with Adrian."
            }
        ],

        clues: [
            {
                title: "The Stopped Clock",
                description:
                    "A clock inside the compartment stopped at a time that conflicts with Victor's statement."
            },
            {
                title: "The Unused Ticket",
                description:
                    "A second ticket bearing Victor's name was found near the victim's compartment."
            },
            {
                title: "The Dining Car Receipt",
                description:
                    "A receipt confirms Clara was in the dining car during part of the incident."
            },
            {
                title: "The Corridor Witness",
                description:
                    "A passenger saw Victor leaving the direction of Adrian's compartment shortly before the discovery."
            },
            {
                title: "The Inheritance Letter",
                description:
                    "Adrian's letter confirms that Victor would receive nothing under the new inheritance plan."
            },
            {
                title: "The Compartment Key",
                description:
                    "A compartment key was discovered among Victor's belongings."
            }
        ],

        explanation:
            "Victor had a strong motive because of the changed inheritance. The witness account, key, and conflicting timeline connect him to the compartment."
    },

    case004: {
        title: "The Vanishing Scientist",
        difficulty: "Medium",
        duration: 240,

        description:
            "A leading scientist disappears from a secure research laboratory.",

        story: `INCIDENT REPORT: CASE 004
THE VANISHING SCIENTIST

Missing Person: Dr. Mira Sen
Location: Helix Research Laboratory
Time: Monday evening

Dr. Mira Sen was leading a confidential research project at Helix Research Laboratory.

On Monday evening, Mira disappeared. Her office was left unlocked, her notebook was missing, and her computer showed that confidential files had been accessed.

The laboratory's access system recorded an unusual entry shortly before the disappearance. Investigators also discovered that the next day's work schedule had been changed without authorisation.

Four employees were investigated: Noah, Lena, Peter, and Maya.

YOUR MISSION:
Investigate the access records, missing documents, and suspicious changes to the laboratory schedule.`,

        culprit: "noah",

        suspects: [
            {
                id: "noah",
                name: "Noah Bennett",
                role: "Research assistant",
                description:
                    "Noah worked directly with Mira and had access to her confidential research."
            },
            {
                id: "lena",
                name: "Lena Park",
                role: "Laboratory manager",
                description:
                    "Lena controlled the laboratory schedule and staff access permissions."
            },
            {
                id: "peter",
                name: "Peter Walsh",
                role: "Security officer",
                description:
                    "Peter monitored security cameras and maintained entry records."
            },
            {
                id: "maya",
                name: "Maya Rao",
                role: "External researcher",
                description:
                    "Maya competed with Mira for research funding and recognition."
            }
        ],

        clues: [
            {
                title: "The Unfinished Experiment",
                description:
                    "Mira's experiment was interrupted midway, indicating that she may have left unexpectedly."
            },
            {
                title: "The Access Log",
                description:
                    "The entry system recorded Noah's credentials shortly before Mira disappeared."
            },
            {
                title: "The Missing Notebook",
                description:
                    "Mira's research notebook was missing from her desk."
            },
            {
                title: "The Altered Schedule",
                description:
                    "A work schedule was modified to leave a period with reduced staff presence."
            },
            {
                title: "The Archive Record",
                description:
                    "Confidential research files were accessed shortly before the disappearance."
            },
            {
                title: "The Unsent Email",
                description:
                    "Mira's draft email states that someone on her team had copied confidential research."
            },
            {
                title: "The Spare Badge",
                description:
                    "A spare laboratory badge was found in an area connected to Noah's workspace."
            }
        ],

        explanation:
            "Noah's credentials appear in the access log. The missing notebook, confidential file access, and spare badge connect him to the disappearance."
    },

    case005: {
        title: "The Last Photograph",
        difficulty: "Hard",
        duration: 300,

        description:
            "A photographer disappears after capturing a mysterious image.",

        story: `INCIDENT REPORT: CASE 005
THE LAST PHOTOGRAPH

Missing Person: Julian West
Location: West Photography Studio
Time: Thursday evening

Julian West was a celebrated photographer preparing a gallery exhibition.

His final photograph contained a reflection that appeared to show someone standing behind him.

Hours after taking the photograph, Julian disappeared. His studio was locked, several negatives were missing, and his camera equipment had been rearranged.

Four people were questioned: Iris, Caleb, Ruby, and Owen.

Investigators discovered that one suspect's statement about the time of the photograph did not match the camera records.

YOUR MISSION:
Examine the photographs, studio records, and suspects' statements to uncover the truth.`,

        culprit: "iris",

        suspects: [
            {
                id: "iris",
                name: "Iris Morgan",
                role: "Photographer",
                description:
                    "Iris worked closely with Julian and had access to his cameras and studio equipment."
            },
            {
                id: "caleb",
                name: "Caleb Stone",
                role: "Gallery owner",
                description:
                    "Caleb was preparing Julian's exhibition and had a financial disagreement with him."
            },
            {
                id: "ruby",
                name: "Ruby James",
                role: "Art critic",
                description:
                    "Ruby had publicly criticised Julian's recent work and questioned its originality."
            },
            {
                id: "owen",
                name: "Owen Brooks",
                role: "Studio assistant",
                description:
                    "Owen maintained the studio equipment and knew where spare keys were kept."
            }
        ],

        clues: [
            {
                title: "The Final Photograph",
                description:
                    "The reflection shows a figure whose camera strap matches the distinctive strap used by Iris."
            },
            {
                title: "The Camera Timestamp",
                description:
                    "The camera timestamp contradicts Iris's claim that she had already left the studio."
            },
            {
                title: "The Torn Negative",
                description:
                    "A damaged negative appears to have been deliberately removed from the collection."
            },
            {
                title: "The Studio Key",
                description:
                    "A studio key was found in a place accessible to people connected to Iris."
            },
            {
                title: "The Unsent Message",
                description:
                    "A draft message indicates that Julian intended to reveal a secret about someone close to him."
            },
            {
                title: "The Gallery Receipt",
                description:
                    "A gallery transaction was recorded through an account associated with Iris."
            },
            {
                title: "The Reflected Watch",
                description:
                    "The reflection shows a watch matching the one Iris wore in other studio photographs."
            }
        ],

        explanation:
            "The camera timestamp contradicts Iris's statement. The matching camera strap and watch in the reflection, together with the missing negative, point toward Iris."
    }

};


/* =========================================
   GAME STATE
   ========================================= */

let currentCase = null;
let cluesFound = new Set();
let timeLeft = 0;
let timerInterval = null;

let currentScore = 100;

const CLUE_PENALTY = 5;


/* =========================================
   INITIALIZE
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const caseId = sessionStorage.getItem("selectedCase");

    if (!caseId || !cases[caseId]) {
        window.location.href = "cases.html";
        return;
    }

    currentCase = cases[caseId];

    /*
     * Ask the server to create/reset the investigation session.
     * This also resets the score and the examined-clue list.
     */
    fetch("investigation-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "caseId=" + encodeURIComponent(caseId)
    })
    .then(function (response) {

        if (!response.ok) {
            throw new Error("Could not initialize investigation.");
        }

        renderCase();
        renderSuspects();
        renderClues();
        updateScoreDisplay();
        setupNotebook();
        setupAccusationForm();
        startTimer();

    })
    .catch(function (error) {

        console.error(error);

        alert(
            "Could not initialize the investigation. " +
            "Please check the Java session servlet."
        );

    });

});


/* =========================================
   INCIDENT REPORT
   ========================================= */

function renderCase() {

    setText("caseTitle", currentCase.title);
    setText("caseDescription", currentCase.description);
    setText("caseStory", currentCase.story);
    setText("caseDifficulty", currentCase.difficulty);
    setText("totalClues", currentCase.clues.length);

}


/* =========================================
   SUSPECTS
   ========================================= */

function renderSuspects() {

    const container = document.getElementById("suspects");

    container.innerHTML = "";

    currentCase.suspects.forEach(function (suspect) {

        const card = document.createElement("div");
        card.className = "suspect-card";

        const heading = document.createElement("h3");
        heading.textContent = suspect.name;

        const role = document.createElement("p");
        role.textContent = suspect.role;

        const description = document.createElement("p");
        description.textContent = suspect.description;

        card.appendChild(heading);
        card.appendChild(role);
        card.appendChild(description);

        container.appendChild(card);

    });

    const select = document.getElementById("suspectChoice");

    select.innerHTML = '<option value="">-- Select a suspect --</option>';

    currentCase.suspects.forEach(function (suspect) {

        const option = document.createElement("option");

        option.value = suspect.id;
        option.textContent = suspect.name;

        select.appendChild(option);

    });

}


/* =========================================
   OPTIONAL CLUE EXAMINATION
   ========================================= */

function renderClues() {

    const container = document.getElementById("clues");

    container.innerHTML = "";

    currentCase.clues.forEach(function (clue, index) {

        const card = document.createElement("div");
        card.className = "clue-card";

        const heading = document.createElement("h3");
        heading.textContent = "Clue " + (index + 1) + ": " + clue.title;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-warning";
        button.textContent = "Examine Clue (-5 points)";

        const description = document.createElement("p");
        description.className = "clue-description";
        description.textContent = clue.description;
        description.hidden = true;

        button.addEventListener("click", function () {

            if (cluesFound.has(index)) {
                return;
            }

            /*
             * Record this clue on the server before revealing it.
             * The server deducts the five-point penalty.
             */
            button.disabled = true;

            const body =
                "caseId=" +
                encodeURIComponent(sessionStorage.getItem("selectedCase")) +
                "&clueIndex=" +
                encodeURIComponent(index);

            fetch("examine-clue", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: body
            })
            .then(function (response) {

                if (!response.ok) {
                    throw new Error("Could not record clue examination.");
                }

                return response.json();

            })
            .then(function (data) {

                cluesFound.add(index);

                description.hidden = false;
                button.textContent = "Clue Examined";
                setText("clueCount", cluesFound.size);

                currentScore = data.score;
                updateScoreDisplay();

            })
            .catch(function (error) {

                console.error(error);

                button.disabled = false;

                alert(
                    "Unable to record this clue. " +
                    "Please try again."
                );

            });

        });

        card.appendChild(heading);
        card.appendChild(button);
        card.appendChild(description);

        container.appendChild(card);

    });

}


/* =========================================
   SCORE
   ========================================= */

function updateScoreDisplay() {

    setText("currentScore", currentScore);

}


/* =========================================
   TIMER
   ========================================= */

function startTimer() {

    timeLeft = currentCase.duration;

    updateTimerDisplay();

    timerInterval = setInterval(function () {

        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            alert("Time is up! Return to the case files.");

            window.location.href = "cases.html";

        }

    }, 1000);

}


function updateTimerDisplay() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    setText(
        "timer",
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0")
    );

    const bar = document.getElementById("timerBar");

    if (bar) {

        bar.style.width =
            (timeLeft / currentCase.duration * 100) + "%";

    }

}


/* =========================================
   NOTEBOOK
   ========================================= */

function setupNotebook() {

    const notes = document.getElementById("detectiveNotes");
    const button = document.getElementById("saveNotesBtn");
    const message = document.getElementById("notesMessage");

    const storageKey =
        "mysterybox_notes_" + sessionStorage.getItem("selectedCase");

    notes.value = localStorage.getItem(storageKey) || "";

    button.addEventListener("click", function () {

        localStorage.setItem(storageKey, notes.value);

        message.textContent = "Notes saved successfully!";

    });

}


/* =========================================
   ACCUSATION
   ========================================= */

function setupAccusationForm() {

    const form = document.getElementById("accusationForm");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const suspect = document.getElementById("suspectChoice").value;

        if (!suspect) {

            alert("Please select a suspect.");
            return;

        }

        if (timerInterval !== null) {
            clearInterval(timerInterval);
        }

        const button = document.getElementById("accuseBtn");

        button.disabled = true;
        button.textContent = "Submitting...";

        const body =
            "caseId=" +
            encodeURIComponent(sessionStorage.getItem("selectedCase")) +
            "&suspect=" +
            encodeURIComponent(suspect);

        fetch("accuse", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: body
        })
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not submit accusation.");
            }

            return response.text();

        })
        .then(function (html) {

            document.open();
            document.write(html);
            document.close();

        })
        .catch(function (error) {

            console.error(error);

            alert("Could not submit your accusation. Please try again.");

            button.disabled = false;
            button.textContent = "Submit Accusation";

        });

    });

}


/* =========================================
   GENERAL HELPER
   ========================================= */

function setText(id, value) {

    const element = document.getElementById(id);

    if (element) {
        element.textContent = value;
    }

}