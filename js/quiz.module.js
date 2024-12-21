import { baseUrl } from "./main.js";

export default class Quiz {
  constructor(category, difficulty, numberOfQuestions) {
    this.category = category;
    this.difficulty = difficulty;
    this.numberOfQuestions = numberOfQuestions;
    this.score = 0;
  }

  async getQuiz() {
    return await (
      await fetch(`${baseUrl}?amount=${this.numberOfQuestions}&category=${this.category}&difficulty=${this.difficulty}`)
    ).json();
  }
}
