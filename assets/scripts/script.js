// all required elements
const startBtn = document.querySelector(".start-btn button");
const ruleBox = document.querySelector(".rule-box");
const exitBtn = ruleBox.querySelector(".buttons .exit");
const continueBtn = ruleBox.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quiz-box");

//If start
startBtn.onclick = ()=> {
    ruleBox.classList.add("activeInfo");
}

//If exit
exitBtn.onclick = ()=> {
    ruleBox.classList.remove("activeInfo");
}

//If continue
continueBtn.onclick = ()=> {
    ruleBox.classList.remove("activeInfo");
    quizBox.classList.add("activeQuiz");
}