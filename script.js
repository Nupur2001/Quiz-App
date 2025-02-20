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

  let [questions, optionA, optionB, optionC, optionD] =
    document.querySelectorAll(".question,#optionA,#optionB,#optionC,#optionD");
  let btn = document.querySelector("btn");
  const curentQuiz = 0;
  const score = 0;

  function loadData() {
    const { question, options } = quizData[curentQuiz];
    questions.innerText = question;
    options.forEach(
      (currOptions, index) =>
        (window[`option${index + 1}`].innerHTML=currOptions)
    );
  }

  loadData();
});
