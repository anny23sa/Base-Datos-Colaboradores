import React, { useState } from 'react';
import Buscador from "./components/Buscador/Buscador";
import Listado from "./components/Listado/listado";
import Alert from "./components/Alert/Alert";
import Formulario from "./components/Formulario/Formulario";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseColaboradores from './components/BaseColaboradores/BaseColaboradores'; // Importa la lista de colaboradores



const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); // Inicializa con la lista de colaboradores
  const [mensajeAlerta, setMensajeAlerta] = useState('');
  const [tipoAlerta, setTipoAlerta] = useState ('successs');
  const [buscador, setBuscador] = useState ("");
  
  const handleBuscador = (value) => {
    setBuscador (value);
  }
  // Función para agregar un nuevo colaborador a la lista
  const agregarColaborador = (nuevoColaborador) => {
    if (!nuevoColaborador.nombre || !nuevoColaborador.email || !nuevoColaborador.edad || !nuevoColaborador.cargo || !nuevoColaborador.telefono) {
    setMensajeAlerta('Completa todos los campos.');
    setTipoAlerta('danger');
  }else {
    setColaboradores([...colaboradores, nuevoColaborador]);
    setMensajeAlerta('Colaborador agregado exitosamente');
    setTipoAlerta('success');
  }

  }

  return (
    <div className="container">
      <h1>Lista De Colaboradores</h1>
      <Buscador dataBuscador= {handleBuscador}/>
      <Listado colaboradores={colaboradores} 
      dataBusqueda={buscador}/>
      <div className='container'>
      <Formulario agregarColaborador={agregarColaborador} />
      </div>
      <Alert mensaje={mensajeAlerta} tipo={tipoAlerta} />
    </div>
  );
};

export default App;











