import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getCharacterByComic, getComicById } from "../../redux/actions";
import img from "../../assets/images/hulk.gif";

export default function Details() {
  // Traemos el id que nos mandan por params
  const { id } = useParams();

  // Despachamos el getComicById() y el desde actions
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCharacterByComic(id));
      await dispatch(getComicById(id));
    };

    fetchData();
  }, [dispatch]);

  // Traemos el estado detail y los characters del comic del estado global del reducer
  const detail = useSelector((state) => state.detail);
  const characters = useSelector((state) => state.characters);

  // Lógica de personajes: mostrar personajes con navegación
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);

  const handleNextCharacter = () => {
    setCurrentCharacterIndex((prevIndex) =>
      prevIndex === filteredCharacters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevCharacter = () => {
    setCurrentCharacterIndex((prevIndex) =>
      prevIndex === 0 ? filteredCharacters.length - 1 : prevIndex - 1
    );
  };

  // Filtrar personajes con imágenes disponibles
  const urlImgNotFound =
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
  const filteredCharacters = characters.filter((char) => {
    return char.thumbnail.path !== urlImgNotFound;
  });

  // Verificar si los botones "Previous" y "Next" deben estar deshabilitados
  const isFirstCharacter = currentCharacterIndex === 0;
  const isLastCharacter = currentCharacterIndex === filteredCharacters.length - 1;

  return (
    <div>
      {detail.length > 0 ? (
        <div className="details_container">
          {/* Agregar clases de Bootstrap y estilos personalizados aquí */}
          <div className="row">
            <div className="col-md-6">
              <h1>{detail[0].title}</h1>
              <img
                src={`${detail[0].thumbnail.path}.${detail[0].thumbnail.extension}`}
                alt={detail[0].title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-center">Description:</h2>
              {detail[0].description !== "" ? (
                <p>{detail[0].description}</p>
              ) : (
                <p>Description not available</p>
              )}

              {characters.length === 0 ? (
                <p>No characters available</p>
              ) : (
                <div className="character_card">
                  <h2 className="text-center">Characters:</h2>
                  <img
                    src={`${filteredCharacters[currentCharacterIndex].thumbnail.path}.${filteredCharacters[currentCharacterIndex].thumbnail.extension}`}
                    alt={filteredCharacters[currentCharacterIndex].name}
                    className="img_char"
                    style={{ borderWidth: "2px", borderStyle: "solid", borderRadius: "5px" }}
                  />
                  <h3 className="text-center">
                    {filteredCharacters[currentCharacterIndex].name}
                  </h3>
                  <div className="buttons_container">
                    <button
                      onClick={handlePrevCharacter}
                      disabled={isFirstCharacter}
                      className="btn btn-primary mr-2"
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNextCharacter}
                      disabled={isLastCharacter}
                      className="btn btn-primary"
                    >
                      Next
                    </button>
                  </div>
                  
                </div>
              )}
              <Link to="/home">
                    <button className="btn btn-primary">Go to Back</button>
              </Link>
            </div>
          </div>
          
        </div>
      ) : (
        <div className="loading_container_detail">
          <img src={img} alt="Loading" className="loading-image" />
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
}
