import React from "react";
import img from "../../assets/images/notfound.gif"
import { Link } from 'react-router-dom'; 


export default function NotFound() {
  return (
    <div className="notFound_container">
      <h1>Page Not Found</h1>
      <p>The requested page does not exist.</p>
      <img src={img} />
      <Link to="/home">
        <button>Go to Home</button>
      </Link>
    </div>
      
  );
}
