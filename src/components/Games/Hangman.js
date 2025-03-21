"use client";
import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Hangman = () => {
  const animalsArr = ["Monkey", "Elephant", "Giraffe", "Lion", "Tiger", "Bear"];
  const [word, setWord] = useState("");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [mistakes, setMistakes] = useState(0);
  useEffect(() => {
    resetGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const chooseRandomWord = () => {
    const index = Math.round(Math.random() * animalsArr.length);
    return animalsArr[index].toUpperCase();
  };
  const handleGuessedLetter = (letter) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
      if (!word.includes(letter)) {
        setMistakes(mistakes + 1);
      }
    }
  };
  const isGameOn = () => {
    return word.split("").every((letter) => guessedLetters.includes(letter));
  };
  const isGameLost = () => {
    return mistakes.length >= 6;
  };
  const resetGame = () => {
    setWord(chooseRandomWord());
    setGuessedLetters([]);
    setMistakes(0);
  };
  return (
    <Box>
      <Box>
        <div className="hangman-container">
          <h1>Hangman Game</h1>
          <h5>
            Hangman is a word-guessing game. Start a new game, guess letters to
            reveal the word, and avoid drawing the hangman by making incorrect
            guesses. Win by guessing the word before the hangman is complete.
            Have fun!
          </h5>
          <div className="word-display">
            {word.split("").map((letter, index) => (
              <span key={index} className="letter">
                {guessedLetters.includes(letter) ? letter : "_"}
              </span>
            ))}
          </div>
          <div className="keyboard">
            {Array.from(Array(26)).map((_, index) => (
              <button
                key={index}
                onClick={() =>
                  handleGuessedLetter(String.fromCharCode(65 + index))
                }
                disabled={guessedLetters.includes(
                  String.fromCharCode(65 + index)
                )}
              >
                {String.fromCharCode(65 + index)}
              </button>
            ))}
          </div>
          {isGameOn() && <p className="result-message">You won!</p>}
          {isGameLost() && (
            <p className="result-message">You lost! The word was: {word}</p>
          )}
          <button className="new-game-button" onClick={resetGame}>
            New Game
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default Hangman;
