import React, { useState } from 'react';
import Canvas from './components/Canvas';
import Controls from './components/Controls';
import Results from './components/Results';
import './styles/App.css';

function App() {
  const [alturaInicial, setAlturaInicial] = useState(100);
  const [gravedad, setGravedad] = useState(9.81);
  const [tiempo, setTiempo] = useState(0);
  const [velocidadFinal, setVelocidadFinal] = useState(0);
  const [posicion, setPosicion] = useState(alturaInicial);
  const [caidaIniciada, setCaidaIniciada] = useState(false);
  const [pausado, setPausado] = useState(false);

  // Función para iniciar/reanudar la caída
  const iniciarCaida = () => {
    if (pausado) {
      setPausado(false);  // Reanudar si estaba en pausa
    } else {
      setCaidaIniciada(true);
    }
  };

  // Función para pausar la simulación
  const pausarSimulacion = () => {
    setPausado(true);
    setCaidaIniciada(false);
  };

  // Función para reiniciar la simulación
  const reiniciarSimulacion = () => {
    setTiempo(0);
    setVelocidadFinal(0);
    setPosicion(alturaInicial);
    setCaidaIniciada(false);
    setPausado(false);
  };

  return (
    <div className="App">
      <h1>Simulador de Caída Libre</h1>
      
      <Controls
        alturaInicial={alturaInicial}
        setAlturaInicial={setAlturaInicial}
        gravedad={gravedad}
        setGravedad={setGravedad}
        iniciarCaida={iniciarCaida}
        reiniciarSimulacion={reiniciarSimulacion}
        caidaIniciada={caidaIniciada}
        pausado={pausado}
        pausarSimulacion={pausarSimulacion}
      />
      
      <Canvas
        alturaInicial={alturaInicial}
        gravedad={gravedad}
        tiempo={tiempo}
        setTiempo={setTiempo}
        setPosicion={setPosicion}
        setVelocidadFinal={setVelocidadFinal}
        posicion={posicion}
        caidaIniciada={caidaIniciada}
        pausado={pausado}
      />
      
      <Results
        tiempo={tiempo}
        velocidadFinal={velocidadFinal}
        posicion={posicion}
      />
    </div>
  );
}

export default App;
