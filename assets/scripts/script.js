// all required elements to open and close all boxes and be able to press on buttons
const startBtn = document.querySelector(".start-btn button");
const ruleBox = document.querySelector(".rule-box");
const exitBtn = ruleBox.querySelector(".buttons .exit");
const continueBtn = ruleBox.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quiz-box");
const timeCount = quizBox.querySelector(".timer .timer-second");

const optionList = document.querySelector(".option-list");

//if press start button
startBtn.onclick = ()=> {
    ruleBox.classList.add("activeInfo"); //show info box
}

//if press exit button
exitBtn.onclick = ()=> {
    ruleBox.classList.remove("activeInfo"); //info box hidden
}

//if press continue button
continueBtn.onclick = ()=> {
    ruleBox.classList.remove("activeInfo"); //rule box hidden
    quizBox.classList.add("activeQuiz") //show quiz box 
    shuffleArray(questions); // shuffle questions random
    showQuestions(0); // show questions
    queCounter(1); // show count for questions
    startTimer(20); // set timer on 20 sec each new question
}

let queCount = 0;
let queNumb = 1; // start from question 1 
let counter;
let timeValue = 20; // 20 sec each new question
let userScore = 0;

const nextBtn = quizBox.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");
const playAgain = resultBox.querySelector(".buttons .play-again"); 
const quitQuiz = resultBox.querySelector(".buttons .quit");

//quit the quiz after finished and return to start page
quitQuiz.onclick = ()=> {
    window.location.reload(); //reload window
}

// when next button clicked 
nextBtn.onclick = ()=> {
    if (queCount < questions.length - 1) {
        queCount++;
        queNumb++;
        showQuestions(queCount);
        queCounter(queNumb);
        clearInterval(counter);
        startTimer(timeValue);
        updateButtonTextForFinalQuestion(); // change button at the end to "Show result"
        nextBtn.style.display = "none"; //take away the next button before choosing an answer
        } else {
        console.log("Finished!")
        showResultBox();
    }
}

/**
 * questions and options 
 * that will come from array
 */
function showQuestions(index) {
    const questionText = document.querySelector(".question-text"); 
    let queTag = '<span>'+ questions[index].question +'</span>'; // each questions with number attached to it
    let optionTag = '<div class="option">' + questions[index].options[0] +'<span></span></div>' // question option 1
                    + '<div class="option">'+ questions[index].options[1] +'<span></span></div>' // question option 2
                    + '<div class="option">'+ questions[index].options[2] +'<span></span></div>' // question option 3
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>'; // question option 4
    questionText.innerHTML = queTag;
    optionList.innerHTML = optionTag;
    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
} 

/**
 *  Randomize array in-place using Durstenfeld shuffle algorithm
 */ 
function shuffleArray(questions) {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}    


function updateButtonTextForFinalQuestion() {
    if (queCount > questions.length - 2) {
        // change button text
        document.querySelector('.next-btn').innerText = 'Show Result';
    }
}

/**
 * if correct option is clicked it will show green color and give 10 points
 * if wrong answer is clicked it will show red color
 */
function optionSelected(answer) {
    clearInterval(counter); // stop time after click on an answer
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;
    console.log(userAns, correctAns);
    if (userAns == correctAns) {
        userScore += 10;
        console.log(userScore);
        showScoreCounter();
        answer.classList.add("correct");
        console.log("Answer is Correct");
    } else {
        answer.classList.add("wrong");
        console.log("Answer is Wrong");

        //if the answer is wrong then show the correct answer
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
    nextBtn.style.display = "block";
}     

/**
 * after finish the quiz the result box will show you how many points you get
 * 10 points for each correct answer with a max of 100 points
 * also the title will change on how good you scored
 */
function showResultBox() {
    ruleBox.classList.remove("activeInfo"); //rule box hidden
    quizBox.classList.remove("activeQuiz"); //show quiz box 
    resultBox.classList.add("activeResult"); //show result box 

    // show how much you scored
    const scoreText = resultBox.querySelector(".score");
    if (userScore > 0) {
        let scoreTag = '<span>You got '+ userScore +' points out of 100</span>';
        scoreText.innerHTML = scoreTag;
    }
    // 3 different text titles will show on how you do on the quiz
    const scoreTitle = resultBox.querySelector(".result-text");
    if (userScore > 70) {
        let scoreTag = 'That was a great result! <i class="far fa-smile-beam"></i>';
        scoreTitle.innerHTML = scoreTag;
    }
    else if(userScore > 40) {
        let scoreTag = 'That was not to bad! <i class="far fa-smile-wink"></i>';
        scoreTitle.innerHTML = scoreTag;
    }
    else {
        let scoreTag = 'That was not great! <i class="far fa-laugh-squint"></i>';
        scoreTitle.innerHTML = scoreTag;
    }
}

/**
 * show points after each question on top right corner
 */
function showScoreCounter() {
    const scoreCounter = quizBox.querySelector(".score-counter");
    let scorePoints = userScore ; 
    scoreCounter.innerHTML = scorePoints;
}

/**
 * counter to show how many questions left to play
 */
function queCounter(index) {
    const bottomCueCounter = quizBox.querySelector(".total-que");
    let totalCuesCountTag = '<span><p>'+ index + '</p>out of<p>' + questions.length +'</p> Questions</span>';
    bottomCueCounter.innerHTML = totalCuesCountTag;
}

/**
 * timer start at 20 seconds and will go down to 0, after that you cant click on any answer
 */
function startTimer(time) {
    counter = setInterval(timer, 1000);
    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "0"; // show 0 when time is up

            let correctAns = questions[queCount].answer;
            let allOptions = optionList.children.length;

            for (let i = 0; i < allOptions; i++) {
                if (optionList.children[i].textContent == correctAns) {
                    optionList.children[i].setAttribute("class", "option correct");            
                }
            }
            for (let i = 0; i < allOptions; i++) {
                optionList.children[i].classList.add("disabled");
                }
                nextBtn.style.display = "block";
            }    
        }
    }
