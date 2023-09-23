import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { useEffect, useState } from "react";
import {getComics} from "../../redux/actions";
import Comic from "../Comic/Comic";
import Pagination from "../Pagination/Pagination";
import img from "../../assets/images/hulk.gif";

export default function Comics() {

  //despachamos la funcion getComics desde las actions
  const dispatch= useDispatch();
  
  // Estado para controlar la carga de imágenes
  const [imagesLoaded, setImagesLoaded] = useState(false);
  

  useEffect(() => {
      dispatch(getComics()).then(() => {
        // Cuando las imágenes estén cargadas, actualiza el estado
        setImagesLoaded(true);
      });
  }, []);



  //Traigo el estado comics del reducer
  const comics = useSelector((state) => state.comics);
  
  /*se filtran el array de los comicd para eliminar cuando la imagen no esta disponible,
  se realiza debido a que hay muchos comics con imagenes no disponibles y daña la estetica de la pagina,
  */
 const urlImgNotFound="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
 const filteredComics = comics.filter((comic) => {
    return comic.thumbnail.path !== urlImgNotFound;
  });

  //Logica del paginado 
  //Se crea estado seteable de la pagina actual
  const [currentPage, setCurrentPage] = useState(1);
  //Se van a mostrar 9 comics por pagina
  const comicsPerPage = 9;
  //se calcula el indice del primer comic de la pagina
  const indexOfLastComic = currentPage * comicsPerPage;
  //se calcula el indice del ultimo comic de la pagina
  const indexOfFirstComic = indexOfLastComic - comicsPerPage;
  //se recorta el array de comic para que muestre solo los nueve segun la pagina correspondiente
  const currentComic = filteredComics.slice(indexOfFirstComic, indexOfLastComic);
  //se saca el total de comics del array filtraod
  const totalComics= filteredComics.length
  //Se setea el numero de la pagina para actualizar a la pagina actual
  const pag = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //Logica para avanzar a la siguiente pagina con el boton next
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  //Logica para avanzar a la siguiente pagina con el boton anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };


 
    
  
    
  return (

    <div className="comics_container">
     
        <div className="pagination_container">
          {/*Se pasan todos los atributos al componente pagination*/}
          <Pagination
            prevPage={prevPage}
            nextPage={nextPage}
            comicsPerPage={comicsPerPage}
            totalComics={totalComics}
            pag={pag}
            currentPage={currentPage}
          />
        </div>
      

        {/* Lógica para mostrar la imagen de carga */}
        {imagesLoaded ? (
          <div className="comics_grid">
            {currentComic.map((comic) => {
              const { id, title, pageCount, thumbnail } = comic;
              if (thumbnail.path !== urlImgNotFound) {
                return (
                  <Comic
                    key={id}
                    id={id}
                    title={title}
                    pageCount={pageCount}
                    img={thumbnail.path}
                    imgext={thumbnail.extension}
                  />
                );
              }
            })}
          </div>
        ) : (
          <div className="loading_container">
            <img src={img} alt="Loading" className="loading-image" />
            <h2>Loading...</h2>
          </div>
      )}
    </div>
  );
}
