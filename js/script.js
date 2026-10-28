console.log("script.js connected!");

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach(function (question) {

    const answerButtons = question.querySelectorAll(".answer-btn");

    answerButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            answerButtons.forEach(function (btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");

        });

    });

});


const showResultButton = document.getElementById("show-result");

function displayResult() {

    const selectedAnswers = document.querySelectorAll(".answer-btn.selected");

    console.log("Questions answered:", selectedAnswers.length);

    if (selectedAnswers.length !== questionBlocks.length) {
        alert("HOLD UP! 💀 You need to answer all five questions before your fate can be decided!");
        return;
    }

    const scores = {
        A: 0,
        B: 0,
        C: 0,
        D: 0
    };

    selectedAnswers.forEach(function (answer) {
        const letter = answer.dataset.answer;
        scores[letter]++;
    });

    console.log("Final scores:", scores);

    let winningAnswer = "A";

    for (let letter in scores) {
        if (scores[letter] > scores[winningAnswer]) {
            winningAnswer = letter;
        }
    }

    console.log("Winning answer:", winningAnswer);

    const resultContainer = document.getElementById("result-container");
    const resultTitle = document.getElementById("result-title");
    const resultText = document.getElementById("result-text");

    const results = {
        A: {
            title: "🏆 The Final Survivor",
            text: "CONGRATULATIONS! 🎉 You actually have functioning survival instincts! While everyone else is investigating suspicious noises and making terrible decisions, you're already three counties away. You survived the movie, but the therapy bills are going to be astronomical."
        },
        B: {
            title: "🔪 The Fearless Fighter",
            text: "You saw a seven-foot supernatural killing machine and said, 'Run these hands.' 😭 Your confidence is unmatched, but your self-preservation skills need serious improvement. You might survive through sheer determination, or you might become the killer's most memorable victim. Either way, the audience is entertained."
        },
        C: {
            title: "⚰️ The First Victim",
            text: "BABYYYYY. 😭💀 You didn't even make it past the opening credits. The killer didn't have to work for this one. You investigated every suspicious noise, ignored every red flag, and somehow managed to trip over oxygen. Your character's entire purpose was to establish that the movie was, in fact, a horror movie."
        },
        D: {
            title: "🧠 The Mastermind",
            text: "PLOT TWIST! The killer is now afraid of YOU. 💀 You've analyzed the situation, identified every exit, and developed seventeen backup plans. At this point, you're not surviving a horror movie. You're conducting a tactical operation. The killer is currently reconsidering his career choices."
        }
    };

    resultTitle.textContent = results[winningAnswer].title;
    resultText.textContent = results[winningAnswer].text;

    resultContainer.style.display = "block";

}

showResultButton.addEventListener("click", displayResult);