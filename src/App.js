import React from 'react'; // imports react js library
import './App.css';

const Header = () => {
  return (
      <header className="header">
          <div className="logo">Logo</div>
          <nav className="navbar">
              <ul >
                  <li><a href="#"className="text-black no-underline" >Home</a></li>
                  <li><a href="#" >About</a></li>
                  <li><a href="#" >Services</a></li>
                  <li><a href="#" >Contact</a></li>
              </ul>
          </nav>
          <div className="auth-buttons">
              <button>Log In</button>
              <button>Sign Up</button>
          </div>
      </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;