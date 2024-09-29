import React from 'react'; // imports react js library

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;