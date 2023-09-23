import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getComicByName } from "../../redux/actions";


export default function SearchBar() {
  const dispatch = useDispatch();

  // Estado local del componente para almacenar el valor del input de búsqueda
  const [name, setName] = useState("");

  // Maneja el cambio en el input de búsqueda
  const handleInputChange = (event) => {
    // Actualiza el estado local con el valor del input
    setName(event.target.value);
  };

  // Maneja la acción de búsqueda
  const handleSearch = (event) => {
    event.preventDefault();

    // Despacha la acción "getRecipeByName" pasando el nombre como argumento
    dispatch(getComicByName(name));
  };

  return (
    <div className="searchBar_container">
      <input
        
        type="text"
        placeholder="Search Comics..."
        value={name}
        onChange={handleInputChange}
      />
      <button  type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
