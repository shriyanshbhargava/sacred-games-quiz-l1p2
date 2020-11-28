var readlineSync = require('readline-sync');

const chalk = require('chalk');

var userName = readlineSync.question("What's your name? ");

console.log(chalk.bgBlack("Hello ! " + userName +" Welcome to Sacred Games Quiz\n"));
var score = 0;


var highScores = [
  {
    Name: "Trivedi",
    Score: 8,
  },

  {
    Name: "Bunty",
    Score: 7,
  },
]

var userStart = readlineSync.question("Are you ready? Y/N \n");
if (userStart === "Y" || userStart === "y") {
  console.log("Abhi Maza Aayega Na Bhidu !\n\n")
} else {
  console.log("Khatam Tata Bye Bye !\n\n")
  process.exit(0);
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("------------------------------")
}


var questions = [{
  question: "1. What is the profession of Gaitonde’s first father?)\n (Priest/Doctor) \n",
  answer: "Priest"
}, {
  question: "2. Who killed Ganesh Gaitonde's mother?\n (Bunty/Himself) \n",
  answer: "Himself"
},{
  question: "3. What is the colour of the car Gaitonde always dreamt of owning?\n (Red/Black) \n",
  answer: "Red"
},{
  question: "4. Hero banna hai to pehle comedy chhod. Who said this?\n (Trivedi/Kukoo) \n",
  answer: "Kukoo"
},{
  question: "5. Kyun aati hai yeh qurbani hamare zindagi mein baar baar? Allah tang aa gaya hai humse. Who said this?\n (Bhosle/Malcolm) \n",
  answer: "Malcolm"
},{
  question: "6.  What was Surveen Chawla’s character’s name in Sacred Games?\n (Jamila/Jojo) \n",
  answer: "Jojo"
},{
  question: "7. What is the name of the Bollywood actress living a dual life in Sacred Games?\n (Alia Bhatt/Zoya Mirza) \n",
  answer: "Zoya Mirza"
},{
  question: "8. What is the real name of Bunty\n (Binod/Deepak) \n",
  answer: "Deepak"
},];

// loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("YAY! You SCORED: ", score);

console.log("Check out the scores")

console.table(highScores)
console.log("Sirf Trivedi Bachega, Baki Sab Mar Jaayenge !")
process.exit(0);
