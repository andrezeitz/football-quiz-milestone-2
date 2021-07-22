// all required elements to open and close all boxes and be able to press on buttons
const startBtn = document.querySelector(".start-btn button");
const ruleBox = document.querySelector(".rule-box");
const exitBtn = ruleBox.querySelector(".buttons .exit");
const continueBtn = ruleBox.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quiz-box");

//If start
startBtn.onclick = ()=> {
    ruleBox.classList.add("activeInfo"); //show info box
}

//If exit
exitBtn.onclick = ()=> {
    ruleBox.classList.remove("activeInfo"); //info box hidden
}

//If continue
continueBtn.onclick = ()=> {
    ruleBox.classList.remove("activeInfo"); //rule box hidden
    quizBox.classList.add("activeQuiz"); //show quiz box 
    showQuestions();
}

let queCount = 0;

function showQuestions(){
    let questionText = document.querySelector(".question-text");
    let queTag = '<span>'+ questions[0].question +'</span>';
    questionText.innerHTML = queTag;
}