const questions = [
    {
       question: "The value of 0! is ___",
       answers:[
        {    text: "0",correct: false},
        {    text: "1",correct: true},
        {    text: "Infinity",correct: false},
        {    text: "Can't be determined",correct: false},
       ]
    },
    {
        question: "Which number will replace the question mark 1,8,9,64,?,216,49",
        answers:[
         {    text: "25",correct: true},
         {    text: "125",correct: false},
         {    text: "12",correct: false},
         {    text: "75",correct: false},
        ]
     },
     {
        question: "___ is/are the multiple of every number",
        answers:[
         {    text: "o",correct: false},
         {    text: "1",correct: false},
         {    text: "both one and zero",correct: true},
         {    text: "5",correct: false}
        ]
     },
     {
        question: "The value of √√4 is ___",
        answers:[
         {    text: "4",correct: false},
         {    text: "2.1561",correct: false},
         {    text: "0",correct: false},
         {    text: "1.4142",correct: true},
        ]
     },
     {
        question: "If the sum of two numbers is 48 and their product is 432,find the numbers",
        answers:[
         {    text: "24,18",correct: false},
         {    text: "24,24",correct: false},
         {    text: "36,12",correct: true},
         {    text: "25,23",correct: false},
        ]
     }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer");
const nextButton = document.getElementById("next");
const display = document.getElementById("display");

let currentIndex = 0;
let score =0;

function startQuiz(){
   currentIndex = 0;
   score =0;
   nextButton.innerHTML="Next";
   showQuestion();


}

function showQuestion(){

   resetState();
   let c = questions[currentIndex];
   let q = currentIndex+1;
   questionElement.innerHTML = q + ". " + c.question ;

   c.answers.forEach(answer => {

      const button1 = document.createElement("button")
      button1.innerHTML = answer.text;
      button1.classList.add("btn");
      answerButton.appendChild(button1);
      if(answer.correct){
         button1.dataset.correct = answer.correct;
      }
      button1.addEventListener("click",selectAnswer);
   });
}

function resetState(){
   nextButton.style.display = "none";
   while(answerButton.firstChild){
      answerButton.removeChild(answerButton.firstChild);
   }

}

function selectAnswer(e){
   const s = e.target;
   const isCorrect = s.dataset.correct === "true";
   if(isCorrect){
      s.classList.add("correct");
      score++;
   }else {
      s.classList.add("incorrect");
   }
   Array.from(answerButton.children).forEach(button1=>{
      if(button1.dataset.correct === "true")
      {
         button1.classList.add("correct");
         
      }
      button1.disabled=true;
   });
   nextButton.style.display="block";

}

function handle(){
   currentIndex++;
   if(currentIndex < questions.length){
      showQuestion();
   }else showScore();
}

function showScore(){
   resetState();
   display.innerHTML="Thank you !";
   questionElement.innerHTML=`You scored ${score} out of 5`;
   nextButton.innerHTML= "Play again";
   nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=> {
   if(currentIndex < questions.length){
      handle();
   }else {
      startQuiz();
   }
})

startQuiz(); 

