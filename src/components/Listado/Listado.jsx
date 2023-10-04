import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Listado = ({ colaboradores, dataBusqueda}) => {
  const filtradoColaboradores = colaboradores.filter((colaboradores) => {
  const busquedaData = dataBusqueda.toLowerCase();

  return(
    colaboradores.nombre.toLowerCase().includes(busquedaData) ||
    colaboradores.correo.toLowerCase().includes(busquedaData) ||
    colaboradores.edad.toLowerCase().includes(busquedaData) ||
    colaboradores.cargo.toLowerCase().includes(busquedaData) ||
    colaboradores.telefono.toLowerCase().includes(busquedaData) 


  );
})
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {filtradoColaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
              <td>{colaborador.eliminar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listado