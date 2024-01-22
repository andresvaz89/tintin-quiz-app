import React, { useState, useContext } from 'react';
import { Questions } from '../Helpers/QuestionBank';
import { QuizContext } from '../Helpers/Context';
import '../App.css';

const EndScreen = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const tryAgain = () => {
    setScore(0);
    setGameState('menu');
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h2>
        {score} / {Questions.length}
      </h2>
      <button onClick={tryAgain}>Try Again!</button>
    </div>
  );
};

export default EndScreen;
