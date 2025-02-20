document.addEventListener("DOMContentLoaded", () => {
  let quizData = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],

      correctAnswer: 3,
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Cascading Simple Sheets",
        "Cars SUVs Sailboats",
      ],

      correctAnswer: 1,
    },

    {
      question: "What does HTML stand for?",
      options: [
        "Hypertext MarkUp Language",
        "Hypertext MarkDown Language",
        "Hyperloop Markup Language",
        "Helicopter Terminals Motorboats Lamborgini",
      ],
      correctAnswer: 0,
    },
    {
      question: "What year was JavaScript launched?",
      options: ["1996", "1995", "1994", "None of the above"],

      correctAnswer: 1,
    },
  ];
  let answer = document.querySelector(".answer");
  let questions = document.querySelector(".question");

  let optionA = document.querySelector("#optionA");
  let optionB = document.querySelector("#optionB");
  let optionC = document.querySelector("#optionC");
  let optionD = document.querySelector("#optionD");
  let btn = document.querySelector(".btn");
  const currentQuiz = 0;
  const score = 0;

  function loadData() {
    const { question, options } = quizData[currentQuiz];
    questions.innerText = question;
    [optionA, optionB, optionC, optionD].forEach((currentOption, index) => {
      currentOption.innerHTML = options[index];
    });
  }

  loadData();
});
