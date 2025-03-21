import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to the Personality Quiz!</h2>
      <p>Find out if you're more like a cat or a dog by answering a few simple questions.</p>

      <div className="image-preview">
        <div className="preview-box">
          <h3>Cat Personalities</h3>
          <img src="https://images.metmuseum.org/CRDImages/ep/web-large/DT1494.jpg" alt="Art depicting cats" />
        </div>
        <div className="preview-box">
          <h3>Dog Personalities</h3>
          <img src="https://images.metmuseum.org/CRDImages/ep/web-large/DP-14936-023.jpg" alt="Art depicting dogs" />
        </div>
      </div>

      <Link to="/quiz" className="start-btn">Start the Quiz</Link>
    </div>
  );
};

export default Home;
