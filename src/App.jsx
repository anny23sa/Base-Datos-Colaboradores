import React, { useState } from 'react';
import Listado from "./components/Listado/listado";
import Alert from "./components/Alert/Alert";
import Buscador from "./components/Buscador/Buscador";
import Formulario from "./components/Formulario/Formulario";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseColaboradores from './components/BaseColaboradores/BaseColaboradores'; // Importa la lista de colaboradores

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores); // Inicializa con la lista de colaboradores


  return (
    <div>
      <Formulario />
      <Buscador />
      <Alert />
      <Listado />
    </div>
  );
}
export default App





