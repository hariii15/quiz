import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Question.css';

const Question = ({ quizResults, setQuizResults }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const questions = [
    {
      text: "How do you prefer to spend your free time?",
      options: [
        { text: "Relaxing alone in a quiet space", value: "cat" },
        { text: "Going out with friends and being social", value: "dog" }
      ]
    },
    {
      text: "How do you react when meeting new people?",
      options: [
        { text: "Cautiously - I like to observe first", value: "cat" },
        { text: "Enthusiastically - I introduce myself right away", value: "dog" }
      ]
    },
    {
      text: "What's your ideal weather?",
      options: [
        { text: "Warm and sunny - perfect for lounging", value: "cat" },
        { text: "Any weather is good for adventure!", value: "dog" }
      ]
    },
    {
      text: "How do you approach challenges?",
      options: [
        { text: "Carefully analyze before taking action", value: "cat" },
        { text: "Jump right in and figure it out along the way", value: "dog" }
      ]
    },
  ];

  const handleAnswer = async (value) => {
    const updatedResults = {
      ...quizResults,
      answers: [...quizResults.answers, value]
    };

    setQuizResults(updatedResults);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate personality
      const catAnswers = updatedResults.answers.filter(a => a === "cat").length;
      const dogAnswers = updatedResults.answers.filter(a => a === "dog").length;
      const personality = catAnswers > dogAnswers ? "cat" : "dog";

      // Fetch image based on personality
      try {
        let imageUrl;
        if (personality === "cat") {
          const response = await fetch('https://api.thecatapi.com/v1/images/search');
          const data = await response.json();
          imageUrl = data[0].url;
        } else {
          const response = await fetch('https://dog.ceo/api/breeds/image/random');
          const data = await response.json();
          imageUrl = data.message;
        }

        // Update results with personality and image
        setQuizResults({
          ...updatedResults,
          personality: personality,
          image: imageUrl
        });

        // Navigate to user form
        navigate('/user-form');
      } catch (error) {
        console.error("Error fetching image:", error);
        // Navigate anyway
        navigate('/user-form');
      }
    }
  };

  return (
    <div className="question-container">
      <h2>Question {currentQuestion + 1} of {questions.length}</h2>
      <div className="question">
        <h3>{questions[currentQuestion].text}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="option-btn"
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
