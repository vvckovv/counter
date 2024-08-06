const scoreCount = document.getElementById('score-count');
const addBtn = document.getElementById('add-btn');
const minusBtn = document.getElementById('minus-Btn');
const resetBtn = document.getElementById('reset-btn');

let score = 0;

document.getElementById("add-btn").onclick = function() {
    score++;
    scoreCount.textContent = score;
};

document.getElementById("minus-btn").onclick = function () {
    if (score > 0) {
        score --;
    }
    scoreCount.textContent = score;
};

document.getElementById("reset-btn").onclick = function () {
    score = 0;
    scoreCount.textContent = score;
};