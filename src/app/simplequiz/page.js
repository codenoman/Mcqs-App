"use client";

import React from 'react';
import { useState } from 'react';
import "./index.css";
import Head from "next/head"
const quizData = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
    options: ['London', 'Berlin', 'Madrid', 'Paris'],
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
  },
  {
    question: 'Question: Who is the inventor of the light bulb?',
    answer: 'Thomas Edison',
    options: ['Nikola Tesla', 'Marie Curie', 'Alexander Graham Bell', 'Thomas Edison'],
  },
  {
    question: 'What is the largest ocean on Earth?',
    answer: 'Pacific Ocean',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    answer: 'William Shakespeare',
    options: ['Mark Twain', 'Jane Austen', 'Charles Dickens', 'William Shakespeare'],
  },
  {
    question: 'What is the currency of Japan?',
    answer: 'Yen',
    options: ['Peso', 'Yen', 'Euro', 'Won'],
  },
  {
    question: 'Who is known as the "Father of Computers"?',
    answer: 'Charles Babbage',
    options: ['Charles Babbage', 'Steve Jobs', 'Alan Turing', 'Bill Gates'],
  },
  {
    question: 'What is the largest mammal in the world?',
    answer: 'Blue Whale',
    options: ['Polar Bear', 'Blue Whale', 'Giraffe', 'Elephant'],
  },
  {
    question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
    answer: 'Venus',
    options: ['Jupiter', 'Earth', 'Venus', 'Mars'],
  },
  {
    question: 'In which year did the Titanic sink?',
    answer: '1912',
    options: ['1905', '1935', '1912', '1909'],
  },
  {
    question: 'In which year did the first manned moon landing occur?',
    answer: '1969',
    options: ['1959', '1969', '1979', '1989'],
  },
  {
    question: ' Who wrote "To Kill a Mockingbird"?',
    answer: 'Harper Lee',
    options: ['Harper Lee', 'J.K. Rowling', 'Ernest Hemingway', 'F. Scott Fitzgerald'],
  },
];

const QuizComponent = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(new Array(quizData.length).fill(null));

  const { question, answer, options } = quizData[currentQuestion];

  const handleAnswerClick = (selectedOption) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = selectedOption;
    setSelectedOptions(newSelectedOptions);
    if (selectedOption === answer) {
      setScore(score + 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartClick = () => {
    setScore(0);
    setCurrentQuestion(0);
    setQuizCompleted(false);
    setSelectedOptions(new Array(quizData.length).fill(null));
  };

  return (
    <div>
<Head>
        <title>Quiz App</title>
        <meta name="description" content="Test your knowledge with our interactive quiz app." />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main>
        <h1>Quiz App</h1>
       
      </main> 

      <div className='container'>
        {!quizCompleted ? (
          <>
            <h2>Question {currentQuestion + 1}</h2>
            <h3>{question}</h3>
            <ul>
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerClick(option)}
                  className={selectedOptions[currentQuestion] === option ? 'selected' : ''}
                >
                  {option}
                </li>
              ))}
            </ul>
            <button onClick={handleNextClick} disabled={!selectedOptions[currentQuestion]}>
              Next
            </button>
          </>
        ) : (
          <div>
            <h2>Quiz Completed</h2>
            <p>{score >= 6 ? 'Congratulations! You are a winner!' : 'Sorry, you lose.'}</p>
            <p>Your final score is: {score}</p>
            <h3>Your Answers:</h3>
            {quizData.map((quiz, index) => (
              <div key={index}>
                Question {index + 1}: {selectedOptions[index] } - {quiz.answer}
              </div>
            ))}
            <h3>Correct Answers:</h3>
            {quizData.map((quiz, index) => (
              <div key={index}>
                Question {index + 1}: <strong>{quiz.answer}</strong>
              </div>
            ))}
            <button onClick={handleRestartClick}>Restart Quiz</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
