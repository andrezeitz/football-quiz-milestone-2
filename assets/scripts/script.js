// all required elements to open and close all boxes and be able to press on buttons
const startBtn = document.querySelector(".start-btn button");
const ruleBox = document.querySelector(".rule-box");
const exitBtn = ruleBox.querySelector(".buttons .exit");
const continueBtn = ruleBox.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quiz-box");

const optionList = document.querySelector(".option-list");

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

/**
 * questions will show green color for correct answer
 * rest of the questions will show red color for wrong answers
 */
function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    if (userAns == correctAns) {
        answer.classList.add("correct");
        console.log("Answer is Correct");
    } else {
        answer.classList.add("wrong");
        console.log("Answer is Wrong");

        //if the answer is wrong select the correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAns) {
                optionList.children[i].setAttribute("class", "option correct");            
            }
        }
    }    

//make so user can only click one answer per question
for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
    }
}    







function queCounter(index) {
    const bottomCueCounter = quizBox.querySelector(".total-que");
    let totalCuesCountTag = '<span><p>'+ index + '</p>of<p>' + questions.length +'</p>Questions</span>';
    bottomCueCounter.innerHTML = totalCuesCountTag;
} 