import React, { useContext } from 'react';
import './NavBar.css';
import { QuizContext } from '../Helpers/Context';

const NavBar = () => {
  const { gameState, setGameState } = useContext(QuizContext);
  return (
    <nav>
      <ul>
        {gameState === 'quiz' ? (
          <button
            onClick={() => {
              setGameState('menu');
            }}
          >
            Restart again
          </button>
        ) : (
          <button
            onClick={() => {
              setGameState('quiz');
            }}
          >
            Start Quiz
          </button>
        )}

        <li>Add a Question 😀</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
