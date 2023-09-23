import React from 'react';
import { Link } from 'react-router-dom'; 
import img from "../../assets/images/landing.gif"

function Landing() {
  return (
    <div className="landing_container">
      <h1>Welcome to the Marvel App</h1>
      <img src={img}/>
      <Link to="/home">
        <button>Start</button>
      </Link>
    </div>
  );
}

export default Landing;