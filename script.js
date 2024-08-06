let score = document.querySelector('.score');
let minusBtn = document.querySelector('.minus-btn')
score.textContent = 0;
if (score.textContent == 0) {
    minusBtn.style.backgroundColor = ''
};

function add() {
    score.textContent++;
    if (score.textContent >= 1){
        minusBtn.style.backgroundColor = '#D926A9'
    }
};

function minus() {
    if (score.textContent >= 1){
        score.textContent --;
    }

    if (score.textContent < 1){
        minusBtn.style.backgroundColor = ''
    }
}; 

function del() {
    score.textContent = 0;
    if (score.textContent < 1){
        minusBtn.style.backgroundColor = ''
    }
}