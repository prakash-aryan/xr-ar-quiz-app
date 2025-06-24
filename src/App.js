import React, { useState, useEffect } from 'react';
import QuizData from './data/QuizData';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import './App.css';

const QuizApp = () => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [urlQuizKey, setUrlQuizKey] = useState(null);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Check for quiz parameter in URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const quizParam = urlParams.get('quiz');
    
    if (quizParam && QuizData[quizParam]) {
      setUrlQuizKey(quizParam);
    }
  }, []);

  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0 && !quizCompleted) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleQuizComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, quizCompleted]);

  const startQuiz = (quizKey) => {
    const quiz = QuizData[quizKey];
    if (!quiz) return;
    
    setCurrentQuiz({ key: quizKey, ...quiz });
    setTimeLeft(quiz.duration);
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizStarted(true);
    setQuizCompleted(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestion + 1 < currentQuiz.questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    setQuizStarted(false);
    setQuizCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    answers.forEach((answer, index) => {
      if (answer === currentQuiz.questions[index].correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetToHome = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setTimeLeft(0);
    setQuizStarted(false);
    setQuizCompleted(false);
    setSelectedAnswer(null);
    setUrlQuizKey(null);
    
    // Clear URL parameters
    window.history.replaceState({}, document.title, window.location.pathname);
  };

  // If there's a URL quiz parameter and no current quiz, show quiz selection
  if (urlQuizKey && !currentQuiz && !quizStarted && !quizCompleted) {
    const quiz = QuizData[urlQuizKey];
    return (
      <div className="quiz-access-page">
        <div className="quiz-access-container">
          <div className="quiz-access-card">
            <div className="quiz-icon">
              {urlQuizKey === 'xr' && '🥽'}
              {urlQuizKey === 'ar' && '📱'}
              {urlQuizKey === 'unity' && '🎮'}
            </div>
            <h1 className="quiz-access-title">{quiz.title}</h1>
            <p className="quiz-access-description">{quiz.description}</p>
            <div className="quiz-access-info">
              <div className="quiz-info-item">
                <span className="quiz-info-label">Questions:</span>
                <span className="quiz-info-value">{quiz.questions.length}</span>
              </div>
              <div className="quiz-info-item">
                <span className="quiz-info-label">Duration:</span>
                <span className="quiz-info-value">{Math.floor(quiz.duration / 60)} min</span>
              </div>
            </div>
            <button 
              className="quiz-start-button"
              onClick={() => startQuiz(urlQuizKey)}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Results page
  if (quizCompleted) {
    return (
      <ResultsPage
        currentQuiz={currentQuiz}
        answers={answers}
        calculateScore={calculateScore}
        onRetakeQuiz={() => startQuiz(currentQuiz.key)}
        onBackToHome={resetToHome}
      />
    );
  }

  // Quiz page
  if (currentQuiz && quizStarted) {
    return (
      <QuizPage
        currentQuiz={currentQuiz}
        currentQuestion={currentQuestion}
        timeLeft={timeLeft}
        formatTime={formatTime}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
        onNextQuestion={handleNextQuestion}
        onBackToHome={resetToHome}
      />
    );
  }

  // Home page (no quizzes visible)
  return <HomePage />;
};

export default QuizApp;