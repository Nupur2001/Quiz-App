document.addEventListener("DOMContentLoaded", () => {
  let container = document.querySelector(".container");
  let quizContainer = document.querySelector(".quizContainer");
  let quiz = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correctAnswer: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correctAnswer: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext MarkUp Language",
      b: "Hypertext MarkDown Language",
      c: "Hyperloop Markup Language",
      d: "Helicopter Terminals Motorboats Lamborgini",
      correctAnswer: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "None of the above",
      correctAnswer: "b",
    },
  ];

  let ques=document.createElement('h1')
  ques.classList.add('question')

  

});
