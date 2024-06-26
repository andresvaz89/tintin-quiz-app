import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState('');
  const nextQuestion = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurrentQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState('endScreen');
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button
          className="option-btn"
          onClick={() => {
            setOptionChosen('A');
          }}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button
          className="option-btn"
          onClick={() => {
            setOptionChosen('B');
          }}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button
          className="option-btn"
          onClick={() => {
            setOptionChosen('C');
          }}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button
          className="option-btn"
          onClick={() => {
            setOptionChosen('D');
          }}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {currQuestion == Questions.length - 1 ? (
        <button className="next-btn" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button className="next-btn" onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default Quiz;
