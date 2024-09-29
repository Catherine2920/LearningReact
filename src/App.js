import React from 'react'; // imports react js library
import './App.css';
import logo from './Harlyy_Logo.png';

const Header = () => {
  return (
      <header className="header flex items-center justify-between p-4">
          <div className="logo">
          <img src={logo} alt="Logo" className="logo-img w-32 h-auto" />
          </div>
          <nav className="navbar">
              <ul className="flex space-x-[30px]">
                  <li><a href="#" >Home</a></li>
                  <li><a href="#" >Products</a></li>
                  <li><a href="#" >Support</a></li>
                  <li><a href="#" >Pricing</a></li>
                  <li><a href="#" >About</a></li>
                  <li><a href="#" >Contact</a></li>
              </ul>
          </nav>
          <div className="auth-buttons space-x-[30px]">
              <button className="font-bold">Log In</button>
              <button className = "bg-customPurple text-white py-2 px-4 rounded-full">Join Now</button>
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