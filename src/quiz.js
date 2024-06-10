class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    (this.questions = questions),
      (this.timeLimit = timeLimit),
      (this.timeRemaining = timeRemaining);
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    let currentQuestion = this.questions[this.currentQuestionIndex];
    return currentQuestion;
  }

  moveToNextQuestion() {
    if (typeof this.currentQuestionIndex === "number") {
      return (this.currentQuestionIndex += 1);
    }
  }

  shuffleQuestions() {
    const shuffledQuestion = this.questions.sort((a, b) => 0.5 - Math.random());
    return shuffledQuestion;
  }

  checkAnswer(answer) {
    if (typeof this.correctAnswers === "number") {
      return (this.correctAnswers += 1);
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex > this.questions.length)
  } return false
}
