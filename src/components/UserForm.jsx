import { useState } from 'react';
import '../styles/UserForm.css';

const UserForm = ({ quizResults }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Get Metropolitan Museum art based on personality
  const getMetArtURL = () => {
    if (quizResults.personality === 'cat') {
      return "https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg"; // Example cat art
    } else {
      return "https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-023.jpg"; // Example dog art
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send data to a backend if needed
  };

  return (
    <div className="user-form-container">
      {!submitted ? (
        <>
          <h2>Almost Done!</h2>
          <p>Please provide your information to see your results:</p>
          <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">See My Results</button>
          </form>
        </>
      ) : (
        <div className="results">
          <h2>Your Results, {userName}!</h2>
          <p>Based on your answers, you're more like a {quizResults.personality === 'cat' ? 'CAT' : 'DOG'}!</p>

          <div className="results-images">
            <div className="result-image">
              <h3>Your Personality Animal:</h3>
              {quizResults.image && (
                <img src={quizResults.image} alt={`Your ${quizResults.personality} personality`} />
              )}
            </div>

            <div className="result-image">
              <h3>Art that matches your personality:</h3>
              <img src={getMetArtURL()} alt="Metropolitan Museum Art" />
            </div>
          </div>

          <div className="personality-description">
            <h3>{quizResults.personality === 'cat' ? 'Cat Personality Traits:' : 'Dog Personality Traits:'}</h3>
            {quizResults.personality === 'cat' ? (
              <p>You're independent, thoughtful, and observant. You value your personal space and time for reflection. You're selective about who you trust but are deeply loyal to those you let into your inner circle.</p>
            ) : (
              <p>You're outgoing, adventurous, and social! You love making new friends and trying new experiences. Your enthusiasm is contagious, and you're always ready to lend a helping hand to those around you.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserForm;
