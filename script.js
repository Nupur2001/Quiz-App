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
  let answer = document.querySelectorAll(".answer");
  let questions = document.querySelector(".question");

  let optionA = document.querySelector("#optionA");
  let optionB = document.querySelector("#optionB");
  let optionC = document.querySelector("#optionC");
  let optionD = document.querySelector("#optionD");
  let btn = document.querySelector(".btn");
  let quizContainer=document.querySelector(".quizContainer")

  let currentQuiz = 0;
  let score = 0;

  function loadData() {
    const { question, options } = quizData[currentQuiz];
    questions.innerText = question;
    [optionA, optionB, optionC, optionD].forEach((currentOption, index) => {
      currentOption.innerHTML = options[index];
    });
  }

  loadData();
  function deselectOption() {
    answer.forEach((a) => (a.checked = false));
  }
  function getSelectedOption() {
    // let answerIndex;
    // answer.forEach((currentOption,index)=>{
    //     if (currentOption.checked) {
    //         answerIndex=index
    //     }
    // })
    // return answerIndex

    let answerElement = Array.from(answer);
    return answerElement.findIndex((currentOption) => currentOption.checked);
  }

  btn.addEventListener("click", () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex===quizData[currentQuiz].correctAnswer) {
        score+=1
        console.log("Score:", score)
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      deselectOption();
      loadData();
    }
    else{
        quizContainer.classList.add('new')
        btn.classList.add("hide")
       quizContainer.innerHTML= `<div div class='result'>
       <h2>You answered ${score}/${quizData.length} questions correctly</h2>
       <button class="reloadBtn" onclick=(location.reload())>Reload</button>
       </div>`
        
    }
  });
});
