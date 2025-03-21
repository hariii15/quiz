import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Question from './components/Question'
import UserForm from './components/UserForm'
import './App.css'

function App() {
  const [quizResults, setQuizResults] = useState({
    answers: [],
    personality: null,
    image: null
  });

  return (
    <>
      <Router>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Question setQuizResults={setQuizResults} quizResults={quizResults} />} />
            <Route path="/user-form" element={<UserForm quizResults={quizResults} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
