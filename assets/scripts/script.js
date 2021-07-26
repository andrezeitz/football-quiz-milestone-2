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
    showQuestions(0);
    queCounter(1);
}

let queCount = 0;
let queNumb = 1;

const nextBtn = quizBox.querySelector(".next-btn");

// when next button clicked 
nextBtn.onclick = ()=> {
    if (queCount < questions.length - 1) {
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb)
    } else {
        console.log("Finished!")
    }
}

/**
 * questions and options 
 * that will come from array
 */
function showQuestions(index) {
    const questionText = document.querySelector(".question-text");
    const optionList = document.querySelector(".option-list");
    let queTag = '<span>'+ questions[index].numb + "." + questions[index].question +'</span>';
    let optionTag = '<div class="option">' + questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    questionText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
} 

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    if (userAns == correctAns) {
        console.log("Answer is Correct");
    } else {
        console.log("Answer is Wrong");
    }    
}







function queCounter(index) {
    const bottomCueCounter = quizBox.querySelector(".total-que");
    let totalCuesCountTag = '<span><p>'+ index + '</p>of<p>' + questions.length +'</p>Questions</span>';
    bottomCueCounter.innerHTML = totalCuesCountTag;
} 