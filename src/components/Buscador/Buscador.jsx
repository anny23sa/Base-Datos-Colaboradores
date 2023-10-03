import React, { useState } from "react";

const Search = ({ dataBuscador }) => {
  const handleBuscador = (e) => {
    dataBuscador(e.target.value);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary w-50">
        <div className="container">
          <a className="navbar-brand"></a>
          <form className="d-flex" role="buscar">
            <input
              className="form-control"
              type="buscar"
              placeholder="Buscar un colaborador"
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
