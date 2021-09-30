const readlineSync = require('readline-sync');
const chalk = require('chalk');

var score=0,credit=0;

//Array containing the high scores
var highScores = [
  {
    name: "Maharaj",
    score: 9,
  },
  {
    name: "Raj",
    score: 10,
  },
  {
    name: "Gulu",
    score: 8,
  },
]

//Array containing all the questions
var questions = [{
  question: " Assume you are running in a race of eight participants. If you overtake the person in the second position what will be your position after overtaking ? ",
  options: " 1.Third \n 2.First \n 3.Second \n 4.last \n Choose your answer >>> ",
  answer: "3",
},{
  question: " The movie Greyhound is based on which novel ? ",
  options: " 1.Catch 22 \n 2.The Good Shepherd \n 3.Hamlet \n 4.War and Peace \n Choose your answer >>> ",
  answer: "2",
}, {
  question: " Which country is the largest producer of cocoa ? ",
  options: " 1.Ghana \n 2.South Africa \n 3.Mexico \n 4.Senegal \n Choose your answer >>> ",
  answer: "1",
},
{
  question: " How many Ballon d'Ors have Lionel Messi won in total ? ",
  options: " 1.Three\n 2.Five\n 3.Seven\n 4.Six\n Choose your answer >>> ",
  answer: "4",
},{
  question: " Who dropped a hammer and a feather on the Moon to demonstrate that without air they fall at the same rate ? ",
  options: " 1.David R. Scott\n 2.Neil Armstrong\n 3.Edwin E. Aldrin Jr.\n 4.Kalpana Chawla\n Choose your answer >>> ",
  answer: "1",
},{
  question: " Which is the world’s smallest bird ? ",
  options: " 1.Eagle\n 2.cockatiel\n 3.Budgerigar\n 4.Bee Hummingbird\n Choose your answer >>> ",
  answer: "4",
},{
  question: " Which one of the following songs is sung by A.R. Rahaman ? ",
  options: " 1.Vande Mataram\n 2.Ek Ajnabee Haseena si\n 3.Kal Ho Na Ho\n 4.Malang\n Choose your answer >>> ",
  answer: "1",
},{
  question: " Name the actress in the movie Tenet who is a former Bollywood actress ? ",
  options: " 1.Elizabeth Debicki\n 2.Priyanka Chopra\n 3.Dimple Kapadia\n 4.Dipika Padukone\n Choose your answer >>> ",
  answer: "3",
},{
  question: " A french structural engineer who worked as the chief engineer of one of the seven Wonders of the World was the great-grandfather of a Bollywood actress. Who is he ? ",
  options: " 1.Maurice Koechlin\n 2.Gustave Eiffel\n 3.Emile Nouguier\n 4.Edward Snowden\n Choose your answer >>> ",
  answer: "1",
},{
  question: " Which of the following is related with the word Google ? ",
  options: " 1. 7.8 billion\n 2. 10¹⁰⁰\n 3. 2.45 billion\n 4. 900 billion\n Choose your answer >>> ",
  answer: "2",
}
];


//start of execution
function start() {
  console.log(chalk.bold('==========================================='));
  console.log(("   ")+chalk.bold.bgRed(" Welcome to Kaun Banega Crorepati "));
  console.log(chalk.bold('==========================================='));
  var userName = readlineSync.question(chalk.bold("\n Enter your name please :  "));
  console.log(chalk.bold.green(`\n Welcome ${userName}`)+chalk.bold.yellow("\n You will be asked a set of eleven questions. You have to enter the\n correct option number of each question.The weightage of the questions\n is as follows")+("\n # ")+chalk.bold.cyanBright("Question 1 to Question 4 : ")+chalk.bold("Rs 5 Laks each")+("\n # ")+chalk.bold.cyanBright("Question 5 to Question 9 : ")+chalk.bold("Rs 10 Laks each")+("\n # ")+chalk.bold.cyanBright("Question 10 : ")+chalk.bold("Rs 30 Laks")+chalk.bold.red("\n\n Let's see if you can be the next Crorepati."));
  console.log(chalk.bold.bgWhite.red("\n>>> Let's proceed >>>"));
  startQuiz();
  inference(); 
}


function startQuiz() {
  for (var i=0; i<questions.length; i++) {
    check(questions[i].question,questions[i].answer,i)
  }
}

//function to check user response
function check(question, answer,i) {
  console.log(chalk.bold.cyan(`\n Question ${i+1} :`));
  console.log(question);
  var userAnswer = readlineSync.question(chalk.yellowBright(`\n${questions[i].options}`));

  if (userAnswer === answer) 
  {
    console.log(chalk.bold.green("\n Correct answer! "));
    score = score + 1;
    if(i>=0 && i<=3)
    {credit=credit+5;}
    else if(i>=4 && i<=8)
    {credit=credit+10;}
    else if(i==9)
    {credit=credit+30;}
  }
  else {
    console.log(chalk.bold.red("\n Wrong answer!"));
  }
  console.log(chalk.bold.bgWhite.black(` Current score: ${score} `));
  console.log(chalk.bold.magentaBright("-----------------------"));
}



function inference() {
  if(credit==100){
    console.log(chalk.bold.redBright(` Congratulations!!! You have won the Kaun Banega Crorepati challenge.\n You have earned Rs ${credit*100000}. You scored : ${score}.`));
  }
  else if(credit==0){
    console.log(chalk.bold.cyanBright(`Game over. Better luck next time. Cheers ;)`));
  }
  else{
    console.log(chalk.bold.green(` Wow! you have earned Rs ${credit*100000}. Your score is : ${score}.\n Better luck next time. Cheers ;)`));
  }

  newHighScore();

  console.log(chalk.bold.cyan("\nHere are the current leaderboards"));
  highScores.map(score => console.log(score.name, " : ", score.score));
  
}

//function to check new high score
function newHighScore()
{
  if(score>highScores[0].score||score>highScores[1].score||score>highScores[2].score)
    {
     console.log(("\n  ")+chalk.bold.bgRed(" Wow! You have made a new high score! \n Send me a screenshot and I'll update it. "));
    }
}


start();