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
    showQuestions(2);
}

let queCount = 0;

let nextBtn = quizBox.querySelector(".next-btn");

nextBtn.onclick = ()=> {
    queCount++;
    showQuestions(queCount);
}

/**
 * questions and options 
 * that will come from array
 */
function showQuestions(index) {
    const questionText = document.querySelector(".question-text");
    const optionList = document.querySelector(".option-list");
    let queTag = '<span>'+ questions[index].question +'</span>';
    let optionTag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    questionText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
} 