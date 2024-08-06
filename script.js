const scoreCount = document.getElementById('score-count');
const addBtn = document.getElementById('add-btn');
const minusBtn = document.getElementById('minus-Btn');
const resetBtn = document.getElementById('reset-btn');


let score = 0;

document.getElementById("add-btn").onclick = function() {
    score++;
    scoreCount.textContent = score;
    if (score.textContent >= 1){
        minusBtn.style.backgroundColor = '#D926A9'
    }   
};

document.getElementById("minus-btn").onclick = function () {
    score--;
    scoreCount.textContent = score;
};

document.getElementById("reset-btn").onclick = function () {
    score = 0;
    scoreCount.textContent = score;
    if (countScore.textContent < 1){
        subBtn.style.backgroundColor = ''
    }
};