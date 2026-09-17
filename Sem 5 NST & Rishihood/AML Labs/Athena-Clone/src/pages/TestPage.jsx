
import { useState } from "react";
import "./TestPage.css";

const questions = [
  {
    question: "Which of the following is the brain of a computer?",
    options: [
      "RAM",
      "CPU",
      "Hard Disk",
      "Motherboard",
    ],
    answer: 1,
  },
  {
    question: "Which language is primarily used to style web pages?",
    options: [
      "HTML",
      "Python",
      "CSS",
      "Java",
    ],
    answer: 2,
  },
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User",
    ],
    answer: 0,
  },
  {
    question: "Which of these is a JavaScript framework/library?",
    options: [
      "React",
      "MySQL",
      "Linux",
      "MongoDB",
    ],
    answer: 0,
  },
  {
    question: "Which data structure follows FIFO?",
    options: [
      "Stack",
      "Queue",
      "Tree",
      "Graph",
    ],
    answer: 1,
  },
];

export default function TestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentQuestion];

  const selectAnswer = (index) => {
    setSelectedAnswers((previous) => ({
      ...previous,
      [currentQuestion]: index,
    }));
  };

  const goNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    }
  };

  const goPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  };

  const submitQuiz = () => {
    setSubmitted(true);
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      return score + (
        selectedAnswers[index] === question.answer ? 1 : 0
      );
    }, 0);
  };

  if (submitted) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="quiz-page">
        <div className="quiz-container">
          <div className="result-card">
            <div className="result-icon">
              ✓
            </div>

            <h1>Test Completed</h1>

            <p className="result-subtitle">
              Your test has been submitted successfully.
            </p>

            <div className="score-box">
              <span className="score-label">Your Score</span>

              <span className="score">
                {score}
                <span> / {questions.length}</span>
              </span>

              <span className="percentage">
                {percentage}%
              </span>
            </div>

            <button
              className="btn btn-black"
              onClick={() => window.location.reload()}
            >
              Take Test Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-container">

        {/* Header */}
        <div className="quiz-header">
          <div>
            <h1>Online Test</h1>
            <p>Answer all questions carefully.</p>
          </div>

          <div className="question-count">
            <strong>{currentQuestion + 1}</strong>
            <span> / {questions.length}</span>
          </div>
        </div>

        {/* Progress */}
        <div className="progress-wrapper">
          <div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="quiz-card">

          <div className="question-number">
            Question {currentQuestion + 1}
          </div>

          <h2 className="question">
            {question.question}
          </h2>

          <div className="options">
            {question.options.map((option, index) => {
              const isSelected =
                selectedAnswers[currentQuestion] === index;

              return (
                <button
                  key={index}
                  className={`option ${
                    isSelected ? "selected" : ""
                  }`}
                  onClick={() => selectAnswer(index)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="option-text">
                    {option}
                  </span>

                  {isSelected && (
                    <span className="check">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="quiz-navigation">

            <button
              className="btn btn-outline"
              onClick={goPrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            <div className="navigation-right">
              {currentQuestion === questions.length - 1 ? (
                <button
                  className="btn btn-primary"
                  onClick={submitQuiz}
                >
                  Submit Test
                </button>
              ) : (
                <button
                  className="btn btn-black"
                  onClick={goNext}
                >
                  Next
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Footer */}
        <p className="quiz-footer">
          Make sure you have answered all questions before submitting.
        </p>

      </div>
    </div>
  );
}

