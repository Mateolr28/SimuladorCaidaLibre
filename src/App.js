import React, { useState } from 'react';
import MainPage from './components/MainPage';
import FreeFallSimulator from './components/FreeFallSimulator'; // Importar el simulador de caída libre
import ParabolicSimulator from './components/ParabolicSimulator'; // Importar el simulador de movimiento parabólico

function App() {
  const [simuladorSeleccionado, setSimuladorSeleccionado] = useState(null);

  const mostrarSimulador = (tipo) => {
    setSimuladorSeleccionado(tipo);
  };

  const regresar = () => {
    setSimuladorSeleccionado(null);
  };

  return (
    <div className="App">
      {!simuladorSeleccionado ? (
        <MainPage mostrarSimulador={mostrarSimulador} />
      ) : simuladorSeleccionado === 'caidaLibre' ? (
        <FreeFallSimulator regresar={regresar} />
      ) : (
        <ParabolicSimulator regresar={regresar} />
      )}
    </div>
  );
}

export default App;
