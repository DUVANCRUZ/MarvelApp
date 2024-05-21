import React from "react";
import Comics from "../../components/comics/comics";
import SearchBar from "../../components/searchbar/searchbar";


export default function Home() {
  return (
    <div className="home_container">
      <SearchBar/>
      <Comics/>
    </div>
  );
}
