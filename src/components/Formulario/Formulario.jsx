import React from 'react'

const Formulario = () => {
  return (
    <div>
        <h1>Base de Datos colaboradores</h1>
        <label className="form-label" htmlFor="name">Nombre</label>
        <input className="form-control" type="text" name="name" id="name" />
    </div>
  )
}

export default Formulario