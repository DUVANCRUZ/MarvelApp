import React from "react";
import { Link } from 'react-router-dom'; 


export default function Comic({id, title, pageCount, img, imgext }) {
  return (
    <div className="comic_container">
      <h2>{title}</h2>
      <img src={`${img}.${imgext}`} />
      <h2>Pages: {pageCount} </h2>
      <Link to={`/detail/${id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}
