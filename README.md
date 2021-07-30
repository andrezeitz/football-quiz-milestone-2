# Football Quiz
Football Quiz is a fun game that really challange everyone playing it. It include 10 questions from the Premier League, Champions League and of course the World Cup. The questions is a good mix between different countrys. There is a maxium point system of 100 points to get the highest score.

This website can not be used as a template for a business since it's a project for educational purposes. This website will be build with HTML, CSS and Javascript.

Live website: [Football Quiz](https://andrezeitz.github.io/football-quiz/)

![responsive](https://user-images.githubusercontent.com/85236391/127551315-d0c556d7-97a8-4f1c-b771-42ef3b1aa14c.png)


## Table of Contents

* [UX (User Experience)](#ux-user-experience)
  * [User Stories](#user-stories)
  * [Site Owner Goals](#site-owner-goals)
* [Design](#design)
  * [Fonts](#desktop)
  * [Colours](#mobile)
  * [Wireframe](#mobile)
* [Technologies](#technologies)
  * [Languages](#languages)
  * [Frameworks and Tools](#frameworks-and-tools)
  * [Contrast Checker](#contrast-checker)
* [Features](#features)
* [Testing](#testing)
  * [Code Validation](#code-validation)
  * [HTML](#html)
  * [CSS](#css)
  * [Java Script](#java-script)
  * [Different Screen Size](#different-screen-size)
* [Issues found during site development](#issues-found-during-site-development)
* [Deployment](#deployment)
  * [GitHub Pages](#github-pages)
  * [Cloning the project locally](#cloning-the-project-locally)
  * [Forking the repository](#forking-the-repository)
* [Credits](#credits)

## UX (User Experience)

### User Stories
* As a football enthusiast
  * I want quite hard questions
  * I want question from different parts of the world
  * I want the quiz to count the score so I can beat my friends
  * I want to be able to contact the company on social media

* As a user returning to the site
  * I want to be able to do the quiz multiple times to get different answers and get the higest score
  * I want the questions to change every month

* As a user who does not know anything about football
  * I want to learn more about football
  * I want the site to show wich alternative is correct when I miss on a question for better learning
  * I want some question to be little bit easier to be able to get some correct answers in the beggining
  * I want to see how you play the game and it's rules

### Site Owner Goals
* As a site owner I want to make a fun and enjoyable game
* As a site owner I want to educate people about fotball history
* As a site owner I want the site to be easy to navigate so that people will return and also share with friends
* As a site owner I want to let people compete with there friends
* As a site owner I want to promote football all over the world
* As a site owner I want to make it free so everyone is able to play

## Design

### Fonts
I have chosen PT Sans for the header and logo as it is easy to read and has sufficient contrast to the main body font. The small caps style is used by Open Sans that I feelt look very clean in the quiz.!

### Colours
The site follows a kind of football theme color theme to make people almost feel like they are on that football pitch.
It features complementary Lincoln Green, Forest Green Web, Light Green, white and black to create a good contrast and improve readability.

The colours chosen are:

![colors](https://user-images.githubusercontent.com/85236391/127561772-6f12afe2-5327-4a4c-a52b-d064aaa049c6.png)

### Wireframe

#### Desktop
![Web](https://user-images.githubusercontent.com/85236391/126618344-532c82dc-f15f-42e0-9eeb-06395957719e.png)

#### Mobile
![Mobile](https://user-images.githubusercontent.com/85236391/126618362-5b396c62-4da9-4f07-9460-98e037e79d42.png)

## Technologies

### Languages
* HTML
* CSS
* JavaScript

### Frameworks and Tools
* GitHub
* Gitpod
* Google Fonts
* Font Awesome
* W3C HTML Validator
* H3C CSS Validator
* JS Validator
* Am I responsive
* WebAim

### Contrast Checker
All colours was check in contrast checker and pass the test. The only color that diden't pass for small text was #1E8534 as background to #FFF, but I only use this setup for large text in header and footer.

![contrast](https://user-images.githubusercontent.com/85236391/127561156-ab4e9578-d478-4cbd-9239-5c7586b649ae.png)


## Features
The website has the following features:
### Navigation bar
Navigation bar is visible on the top of the website with a logo that is clickable to update the site. The navigation bar and logo will become a bit smaller on mobile devices to make it look good.

![navbar](https://user-images.githubusercontent.com/85236391/127557595-db364b6d-df26-4d10-a461-3ef01d02a41c.png)

### Home
The home page start with a big "Start Quiz" button in the middle of the screen.

![play](https://user-images.githubusercontent.com/85236391/127558544-f532547b-aa26-4fa1-9e49-d7b8ac0e6ca0.png)

Once the start button is clicked the rules of the quiz will show up. Here you can read the 5 main rules of the quiz then decide to start the quiz by clicking on the continue button or exit the quiz by the exit button.

![rules](https://user-images.githubusercontent.com/85236391/127558645-c550928c-3571-4b78-94c7-c7730a41ac29.png)

When you click on the continue button the quiz will start. On the top left side you will see the time counting down from 20 seconds. You need to make a decision before times up. On the top right side you will see you score live. You will get 10 points for each correct answer. In the middle you will see a queston with 4 different options to choose from. When you click an option, the correct answer will show in green and if you clicked on the wrong it will show red. Finaly on the bottom left you will see how many questions there are in total and also what question you are on right now. Once you click on an answer a "Next Question" button will show up on the bottom right side. When you have answered all 10 question the button will change to "Show Result"

![quizz](https://user-images.githubusercontent.com/85236391/127562420-aa7a9dc4-8233-4395-94a4-cfb8227cd490.png)

After finishing the quiz you will be directed to a result page showing your total score. There is 3 different text alternative depending on how you scored. On the bottom there is a "Exit Quiz" button to exit the quiz.

![high score](https://user-images.githubusercontent.com/85236391/127559529-1d4ee3b5-ff24-4e07-bcc8-93b1dab15d93.png)
![medium score](https://user-images.githubusercontent.com/85236391/127559536-5d2fa8f5-49b6-4f0b-808c-b2f6925486bc.png)
![low score](https://user-images.githubusercontent.com/85236391/127559547-71dfccac-7045-4722-ad18-ba4025ac33cd.png)

### Footer
At the bottom of the site there is a footer with social media links to be able to contact the company.

![footer](https://user-images.githubusercontent.com/85236391/127559713-c72f930b-d81a-454b-88ef-e66a57be9d74.png)

## Testing

1. As a user, I want to easily determine what kind of website it is.
* Result: TEST PASSED
   * It's very clear that the site is a quiz for football on the name but also the green color theme on the site. The logo include a picture of a football to really get the feeling of the sport.

![navbar](https://user-images.githubusercontent.com/85236391/127652042-b12263cd-d8e4-4ef3-9724-169aa0bee059.png)

2. As a user, I want it to be a challenged on my fotball skills.
* Result: TEST PASSED
  * This is a very hard quiz with a average first score of 40 points out of 100. Users like to play the quiz multible times.

![40 points](https://user-images.githubusercontent.com/85236391/127652573-b9dd87a6-4664-48bd-ada8-8f87673cf16a.png)

3. As a user, I want to be able to see my score as I play the game.
* Result: TEST PASSED
  * Users can see there live score on the top right corner as they play the game.

![scoree](https://user-images.githubusercontent.com/85236391/127652755-b040714b-9f14-4a74-854a-835efee8e769.png)

4. As a user, I want to see how much time I have left on each question.
* Result: TEST PASSED
  * Users can see how much time they have left on the top left corner as they play the game.

![timee](https://user-images.githubusercontent.com/85236391/127653052-6572e7a9-0d0e-4480-9059-3173dee7883b.png)

5. As a user, I want to know how many questions is left while playing.
* Result: TEST PASSED
  * Users can see how many questions is left to play at the bottom left corner.

![quees](https://user-images.githubusercontent.com/85236391/127653753-6156a66a-0d22-4e22-a1ec-65e1e78f08fb.png)

6. As a user, I want to know the rules before start playing.
* Result: TEST PASSED
  * When the user press the start button the rules will show up before the game starts.

![rules](https://user-images.githubusercontent.com/85236391/127653199-d14a744a-c607-4f13-a542-1c27fe258d96.png)

7. As a user, I want to see my final score after finish playing.
* Result: TEST PASSED
  * After the game is finish the user will be taken to a result page showing the final result.

![high score](https://user-images.githubusercontent.com/85236391/127653388-c8206593-528d-460a-99c1-87cc6b85637a.png)

8. As a user, I want to be able to contact the company on social media.
* Result: TEST PASSED
  * Users can easy find the social media pages in the footer.

![footer](https://user-images.githubusercontent.com/85236391/127653499-c2b5e6b6-4953-4d03-8af7-7506bd79711a.png)


### Code Validation
### HTML
The W3C Markup Validation Service was used to validate the HTML page of the project. No errors or warnings to show.

![html](https://user-images.githubusercontent.com/85236391/127552288-e91dbce2-41ed-420f-908c-fa4c29362bc5.png)

### CSS
The W3C CSS Validation Service was used to validate the CSS file used for the project. No errors or warnings to show.

![css](https://user-images.githubusercontent.com/85236391/127553644-f396b462-a3ca-43c8-b995-2c3b34858098.png)

### Java Script
Syntex Validator was used to validate the Java Script files used for the project. No errors or warnings to show.

![js](https://user-images.githubusercontent.com/85236391/127554806-76d91d8c-793d-436f-9c5c-374d61be2e0d.png)

### Different Screen Size
I was using Chrome as my main browser and the website have been tested on my iPhone 11 Pro and Macbook Pro 13¨.

I also tested the website inside of Chrome Dev Tools. With different px sizes to make sure the website will work on all different devices.

### Issues found during site development
* I had a problem that the "Start Quiz" button would not show with any background on ONLY iPhones. Desktop and Andriod phones could see it. I fixed the problem to add a white background to the start button in media media queries for mobile.

![IMG_0202](https://user-images.githubusercontent.com/85236391/127555626-d86c72c5-5b37-4a3e-9fd0-3f5146c5016a.PNG)

* I had a problem to get the score system to work perfectly in the beggining. I forgot to define the "userScore" inside of the function "optionSelected" and it made the score text to not show up inside of the result box.

![score](https://user-images.githubusercontent.com/85236391/127556369-35ba696c-a68a-4402-a89f-b3b30886d7dd.png)

* Also I had some problem to get the quiz box to fit perfect in between the header and footer on mobile devices. I solved that problem to inside the media queries make the font-size smaller inside the quiz box and also made the header and footer smaller to better fit mobile divices.

![quiz](https://user-images.githubusercontent.com/85236391/127556772-5955a70c-380f-461d-bf58-0cc1645a0b33.png)

## Deployment
The site was developed on Gitpod, using GitHub for version control and hosting the repository and final site. The repository for this project, and the associated workspace, was created from the Code Institute template.

### GitHub Pages
1. Log in to GitHub and navigate to this project's respository [Fotball Quiz](https://github.com/andrezeitz/football-Quiz)
2. On the navigation bar of the repository, go to "Settings" tab
3. Find on the left-hand side menu and locate "Pages"
4. Under "Source", select Branch: main and click Save
5. The page will refresh automatically and a link to the page is published [Website](https://andrezeitz.github.io/football-quiz/)

### Cloning the project locally
1. Log in to GitHub and navigate to this project's respository [Fotball Quiz](https://github.com/andrezeitz/football-Quiz)
2. Click on "Code" and then copy the HTTPS address.
3. Open Git terminal
4. Type git clone and paste in the URL copied in step 2 and press enter

### Forking the repository
1. Log in to GitHub and navigate to this project's respository [Fotball Quiz](https://github.com/andrezeitz/football-Quiz)
2. In the top right of the page, below your profile you should see a "Fork" button. Simply click on this.
3. A copy of the repository will then be added to your own Repositories Page.

## Credits
* I learned the fundamentals on how to make a quiz and took some ideas from these two [Youtube](https://www.youtube.com/watch?v=f4fB9Xg2JEY&list=WL&index=1) [Youtube](https://www.youtube.com/watch?v=riDzcEQbX6k) channels
* I find out how to randomize the quiz questions from this tread on [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
* I read this tread on [Stack Overflow](https://stackoverflow.com/questions/7035842/how-to-change-the-buttons-text-using-javascript/41274932#41274932) and understood how to change buttons.
* I use [W3School](https://www.w3schools.com/js/js_operators.asp) to check different operators.
* Also this for looping [W3School](https://www.w3schools.com/js/js_loop_for.asp)
