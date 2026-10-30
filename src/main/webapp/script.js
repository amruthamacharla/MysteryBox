// ==========================================
// MYSTERYBOX - CASE 001
// ==========================================

// CASE CLUES
const clues = [
    {
        title: "The Broken Watch",
        icon: "⌚",
        detail: "A broken watch stopped at 9:45 PM. The victim's estimated time of death was shortly afterward."
    },
    {
        title: "The Torn Contract",
        icon: "📄",
        detail: "A torn contract reveals that Daniel Cross was about to lose a major business deal."
    },
    {
        title: "The Muddy Footprints",
        icon: "👣",
        detail: "Muddy footprints lead from the garden toward the study's side entrance."
    },
    {
        title: "The Missing Key",
        icon: "🗝️",
        detail: "The spare key to the study is missing. Oliver Reed was responsible for managing the household keys."
    },
    {
        title: "The Final Note",
        icon: "✉️",
        detail: "A note reads: I know who has been betraying me. We must discover the truth before midnight."
    }
];

// GAME VARIABLES
let timeLeft = 180;
let timerInterval = null;
let cluesOpened = new Set();
let gameFinished = false;

const culprit = "oliver";

// ==========================================
// START GAME
// ==========================================

function startGame() {
    if (gameFinished) {
        resetGame();
    }

    document.getElementById("landing").classList.add("d-none");
    document.getElementById("result").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");

    renderClues();
    updateClueCount();
    updateTimerDisplay();
    startTimer();

    const hint = document.getElementById("accuseHint");

    if (hint) {
        hint.textContent = "Examine all five clues before making your accusation.";
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// DISPLAY CLUES
// ==========================================

function renderClues() {
    const container = document.getElementById("clues");

    if (!container) {
        console.error("Clue container with ID 'clues' was not found.");
        return;
    }

    container.innerHTML = clues.map((clue, index) => `
        <div class="col-md-6 col-lg-4">
            <article class="clue-card">

                <div class="eyebrow">
                    EVIDENCE #0${index + 1}
                </div>

                <h3 class="mt-3">
                    ${clue.icon} ${clue.title}
                </h3>

                <button
                    type="button"
                    class="btn btn-outline-warning btn-sm mt-2"
                    onclick="revealClue(${index})">
                    Examine Evidence
                </button>

                <div
                    id="clue-detail-${index}"
                    class="clue-details">
                </div>

            </article>
        </div>
    `).join("");
}

// ==========================================
// REVEAL CLUES
// ==========================================

function revealClue(index) {
    if (gameFinished) {
        return;
    }

    if (index < 0 || index >= clues.length) {
        return;
    }

    const detail = document.getElementById(`clue-detail-${index}`);

    if (!detail) {
        return;
    }

    // Reveal a clue only once
    if (cluesOpened.has(index)) {
        return;
    }

    cluesOpened.add(index);

    detail.textContent = clues[index].detail;

    // Use jQuery animation if available
    if (window.jQuery) {
        $(detail).stop(true, true).slideDown(300);
    } else {
        detail.style.display = "block";
    }

    updateClueCount();

    showToast(
        clues[index].title + ": " + clues[index].detail
    );

    // Enable accusation after examining all clues
    if (cluesOpened.size === clues.length) {
        const hint = document.getElementById("accuseHint");

        if (hint) {
            hint.textContent =
                "All five clues examined. You may now submit your accusation!";
        }
    }
}

// ==========================================
// UPDATE CLUE COUNT
// ==========================================

function updateClueCount() {
    const countElement = document.getElementById("clueCount");

    if (countElement) {
        countElement.textContent = cluesOpened.size;
    }
}

// ==========================================
// BOOTSTRAP TOAST
// ==========================================

function showToast(message) {
    const toastText = document.getElementById("toastText");
    const toastElement = document.getElementById("gameToast");

    if (!toastText || !toastElement) {
        return;
    }

    toastText.textContent = message;

    if (window.bootstrap &&
        window.bootstrap.Toast) {

        bootstrap.Toast
            .getOrCreateInstance(toastElement)
            .show();
    }
}

// ==========================================
// TIMER
// ==========================================

function startTimer() {
    clearInterval(timerInterval);

    timerInterval = setInterval(function () {

        if (gameFinished) {
            clearInterval(timerInterval);
            return;
        }

        timeLeft--;

        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishTimeout();
        }

    }, 1000);
}

// ==========================================
// UPDATE TIMER DISPLAY
// ==========================================

function updateTimerDisplay() {
    const timerElement = document.getElementById("timer");

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    if (timerElement) {
        timerElement.textContent =
            String(minutes).padStart(2, "0") +
            ":" +
            String(seconds).padStart(2, "0");
    }

    const timerBar = document.getElementById("timerBar");

    if (timerBar) {
        const percentage = Math.max(0, (timeLeft / 180) * 100);
        timerBar.style.width = percentage + "%";
    }
}

// ==========================================
// SUBMIT ACCUSATION TO JAVA SERVLET
// ==========================================

function submitAccusation() {

    if (gameFinished) {
        return;
    }

    // Require all clues to be examined
    if (cluesOpened.size !== clues.length) {
        alert("Please examine all five clues before making your accusation!");
        return;
    }

    // Get selected suspect
    const suspectElement = document.getElementById("suspectChoice");

    if (!suspectElement) {
        alert("Suspect selection was not found.");
        return;
    }

    const choice = suspectElement.value;

    if (!choice) {
        alert("Please select a suspect first.");
        return;
    }

    if (timeLeft <= 0) {
        finishTimeout();
        return;
    }

    gameFinished = true;
    clearInterval(timerInterval);

    // Create a form that sends the suspect to the Java Servlet
    const form = document.createElement("form");

    form.method = "POST";

    // Use the application context path so the request reaches
    // /MysteryBox/accuse instead of accidentally reaching /accuse.
    form.action = window.location.pathname.substring(
        0,
        window.location.pathname.lastIndexOf("/") + 1
    ) + "accuse";

    const input = document.createElement("input");

    input.type = "hidden";
    input.name = "suspect";
    input.value = choice;

    form.appendChild(input);
    document.body.appendChild(form);

    form.submit();
}

// ==========================================
// TIME EXPIRED
// ==========================================

function finishTimeout() {
    if (gameFinished) {
        return;
    }

    gameFinished = true;
    clearInterval(timerInterval);

    document.getElementById("game").classList.add("d-none");
    document.getElementById("result").classList.remove("d-none");

    document.getElementById("resultSeal").textContent = "!";
    document.getElementById("resultTitle").textContent = "TIME'S UP";

    document.getElementById("resultText").textContent =
        "Your investigation time has expired. The case remains unsolved.";

    document.getElementById("score").textContent = "0";
    document.getElementById("scoreBar").style.width = "0%";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// RESET GAME
// ==========================================

function resetGame() {
    clearInterval(timerInterval);

    timeLeft = 180;
    cluesOpened = new Set();
    gameFinished = false;

    updateTimerDisplay();
    updateClueCount();

    const suspectElement = document.getElementById("suspectChoice");

    if (suspectElement) {
        suspectElement.value = "";
    }

    const hint = document.getElementById("accuseHint");

    if (hint) {
        hint.textContent =
            "Examine all five clues before making your accusation.";
    }
}

// ==========================================
// REPLAY GAME
// ==========================================

function replayGame() {
    resetGame();

    document.getElementById("result").classList.add("d-none");
    document.getElementById("game").classList.add("d-none");
    document.getElementById("landing").classList.remove("d-none");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// ==========================================
// CONNECT BUTTONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.getElementById("startBtn");
    const accuseButton = document.getElementById("accuseBtn");
    const replayButton = document.getElementById("replayBtn");

    if (startButton) {
        startButton.addEventListener("click", startGame);
    }

    if (accuseButton) {
        accuseButton.addEventListener("click", submitAccusation);
    }

    if (replayButton) {
        replayButton.addEventListener("click", replayGame);
    }

});