import { AllQuestionsArr, Questions__Container, Quiz__Form, quiz } from "./main.js";
import startCentralConfetti from "./canvas.module.js";
export default class Question {
  constructor(index) {
    this.index = index;
    this.question = AllQuestionsArr[index].question;
    this.correct_answer = AllQuestionsArr[index].correct_answer;
    this.answers = [AllQuestionsArr[index].correct_answer, ...AllQuestionsArr[index].incorrect_answers].sort();
    this.isAnswered = false;
  }

  displayQuestion() {
    Quiz__Form.classList.add("d-none");
    Questions__Container.innerHTML = `
      <div class="card text-center p-5">
      <div>
      <p>Current Question <span class="badge bg-primary">${this.index + 1}</span></p>
      <p>Count of Question <span class="badge bg-primary">${AllQuestionsArr.length}</span></p>
      </div>
      <div class="card-title p-2">${this.question}</div>
      <div class="card-body">
      <ul class="list-unstyled row g-3">
      ${this.HandleChoices()}
      </ul>
      </div>
      <div class="card-footer">Score: <span class="badge bg-warning">${quiz.score}</span></div>
      </div>
    `;
    this.HandleCorrectAnswers();
  }

  HandleChoices() {
    return this.answers
      .map(
        (answer) => `<li class="col-6"><button class="answer w-100 h-100 btn btn-outline-dark">${answer}</button></li>`
      )
      .join("");
  }

  HandleCorrectAnswers() {
    let allAnswerBtns = document.querySelectorAll(".answer");
    allAnswerBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        if (!this.isAnswered) {
          btn.classList.remove("btn-outline-dark");
          this.isAnswered = true;
          if (this.correct_answer == btn.innerHTML) {
            quiz.score++;
            btn.classList.add("btn-success", "text-white", "animate__shakeY", "animate__animated");
          } else {
            btn.classList.add("btn-danger", "text-white", "animate__shakeX", "animate__animated");
          }
        }
        setTimeout(() => {
          try {
            this.HandleGetNextQuestion();
          } catch {
            this.displayFinalResult();
            console.log("Finished");
          }
        }, 500);
      });
    });
  }

  HandleGetNextQuestion() {
    new Question(++this.index).displayQuestion();
  }

  displayFinalResult() {
    Questions__Container.innerHTML = `
      <div class="card text-center p-5">
      <div class="card-footer"><span class="badge bg-warning">Your Score Is: ${
        quiz.score === AllQuestionsArr.length ? "Congratulations ✅🎉🎉" : quiz.score
      }</span></div>
      <div onclick="window.location.reload()" class="my-3"><button class="btn btn-primary">Try again</button></div>
      </div>
    `;
    if (quiz.score === AllQuestionsArr.length) {
      startCentralConfetti();
    }
  }
}
