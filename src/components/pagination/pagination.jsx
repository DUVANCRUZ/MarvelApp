import React, { useState } from "react";

export default function Pagination({
  prevPage,
  nextPage,
  comicsPerPage,
  totalComics,
  pag,
  currentPage
}) {
  // Calcula la cantidad de números que van a aparecer en la paginación
  const pageNumbers = [];
  // Divide el total de cómics entre los cómics por página y redondea hacia arriba
  for (let i = 1; i <= Math.ceil(totalComics / comicsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination_container">
      <nav>
        <ul>
          {/* Logica del botón previo el cual se deshabilita si está en la primera página */}
          <button onClick={prevPage} disabled={currentPage === 1}>
            Prev
          </button>
          {/* Logica de los botones de paginado, los cuales establecen el número de página según el número que se oprima */}
          {pageNumbers.map((number) => (
            <button
              className={`button_pag ${currentPage === number ? "selected" : ""}`}
              key={number}
              onClick={() => pag(number)}
            >
              {number}
            </button>
          ))}
          {/* Lógica del botón next el cual se deshabilita si está en la última página */}
          <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(totalComics / comicsPerPage)}
          >
            Next
          </button>
        </ul>
      </nav>
    </div>
  );
}
