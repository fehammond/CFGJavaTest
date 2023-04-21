import './App.css';
import {useState} from 'react';

function App() {
 const [isOver18, setIsOver18] = useState(false);
 const [notOver18, setNotOver18] = useState(true);

 const verified = (e) => {
  e.preventDefault();
  setIsOver18(true);
 }

const notVerified = (e) => {
  e.preventDefault();
  setNotOver18(false);
}

 if (!notOver18) {
  return (
    <div className="access-denied">
    <h2>This website is not accessible</h2>
      <h1><span style={{color: 'red'}}>Access Denied.</span></h1>
    </div>
  )
 }
 
 if (!isOver18) {
return (
    <div className="age-verification">
      <h2>We need to verify your age</h2>
      <h1>Are you over 18?</h1>
      <div style={{display: 'flex'}}>
      <button onClick={verified}>Yes</button>
      <button onClick={notVerified}>No</button>
    </div>
    </div>
  )
}
return (
  <div className="website-content">
    <header>
    <h1>Smoking Kills</h1>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#health-risks">Health Risks</a></li>
        <li><a href="#quitting">Thinking of Quitting?</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    </nav>
    </header>
    </div>
)
}

export default App;
