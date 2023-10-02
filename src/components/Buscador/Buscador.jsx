import React, { useState } from "react";

const Search = ({ dataBuscador }) => {
  const handleBuscador = (e) => {
    dataBuscador(e.target.value);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand">Listado de colaboradores</a>
          <form className="d-flex" role="buscar">
            <input
              className="form-control me-2"
              type="buscar"
              placeholder="Busqueda"
              aria-label="Buscar"
              onChange={handleBuscador}
            />
          </form>
        </div>
      </nav>
    </>
  );
};

export default Search;
