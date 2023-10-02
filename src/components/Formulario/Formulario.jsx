//import React from 'react'
//import { Alert } from 'bootstrap'
//import React from 'react'
import { useState } from 'react'


const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')
    const [edad, setEdad] = useState('')
    const [cargo, setCargo] = useState('')
    const [telefono, setTelefono] = useState('')

    const [error, setError] =useState(false)
    const [mensaje, setMensaje] = useState('')

    const validarDatos =(e) => {
      e.preventDefault();

     if (nombre === ''|| email === ''|| edad ===''||cargo === ''|| telefono === '' ){
      setError(true);
      setMensaje('Completa todos los campos.');
     } 
     //resstablecer errores si los datos son validos
     setError(false);
     setMensaje('');
     };

    return (
        <div className='container'>
          <h1>Agregar colaborador</h1>
          <form className="Formulario" onSubmit={validarDatos}>
            {error && <p>{mensaje} </p>}
            <div className="form-group">
              <label></label>
              <input type="text" 
              placeholder='Nombre colaborador'
              name="nombre" 
              className="form-control w-50" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} />
            </div>

            <div className="form-group">
              <label></label>
              <input type="email"
               placeholder='Email colaborador'
              name="email" 
              className="form-control w-50" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
              <label></label>
              <input type="text" 
              placeholder='Edad colaborador'
              name="edad" 
              className="form-control w-50" 
              value={edad} 
              onChange={(e) => setEdad(e.target.value)} />
            </div>

            <div className="form-group">
              <label></label>
              <input type="text"
               placeholder='Cargo Colaborador'
              name="cargo" 
              className="form-control w-50" 
              value={cargo} 
              onChange={(e) => setCargo(e.target.value)} />
            </div>

            <div className="form-group">
              <label></label>
              <input type="text" 
              placeholder='Teléfono colaborador'
              name="telefono" 
              className="form-control w-50" 
              value={telefono} 
              onChange={(e) => setCargo(e.target.value)} />
            </div>

            <br />
            <button type="submit" className="btn btn-primary w-50">Agregar colaborador</button>
          </form>
          <br />

        </div>
      );
}

export default Formulario