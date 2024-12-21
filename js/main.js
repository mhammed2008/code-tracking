import Quiz from "./quiz.module.js";
import Question from "./question.module.js";

/** quiz form */
export let Quiz__Form = document.getElementById("Quiz__Form");
/** questions container */
export let Questions__Container = document.getElementById("Questions__Container");

/** Form Inputs */
const selectCategory = document.getElementById("selectCategory");
const selectDifficulty = document.getElementById("selectDifficulty");
const numOfQuestions = document.getElementById("numOfQuestions");
export const baseUrl = "https://opentdb.com/api.php";
/** Form Buttons */
const startQuizBtn = document.getElementById("startQuizBtn");

/** All Questions Array */
export let AllQuestionsArr;

/** CSS Loader */
const loaderContainer = document.querySelector(".loaderContainer");

/** quiz */
export let quiz;

startQuizBtn.addEventListener("click", () => {
  loaderContainer.classList.remove("d-none");
  quiz = new Quiz(selectCategory.value, selectDifficulty.value, numOfQuestions.value);
  quiz.getQuiz().then((response) => {
    console.log(response.results);
    AllQuestionsArr = response.results;
    let question = new Question(0);
    question.displayQuestion();
    console.log(question);
    loaderContainer.classList.add("d-none");
  });
});
