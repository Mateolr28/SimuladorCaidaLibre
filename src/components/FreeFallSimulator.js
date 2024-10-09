import React, { useState } from 'react';
import Canvas from './Canvas';
import Controls from './Controls';
import Results from './Results';
import '../styles/FreeFallSimulator.css';

function FreeFallSimulator({ regresar }) {
  const [alturaInicial, setAlturaInicial] = useState(100);
  const [gravedad, setGravedad] = useState(9.81);
  const [tiempo, setTiempo] = useState(0);
  const [velocidadFinal, setVelocidadFinal] = useState(0);
  const [posicion, setPosicion] = useState(alturaInicial);
  const [caidaIniciada, setCaidaIniciada] = useState(false);
  const [pausado, setPausado] = useState(false);

  const iniciarCaida = () => {
    if (pausado) {
      setPausado(false);
    } else {
      setCaidaIniciada(true);
    }
  };

  const pausarSimulacion = () => {
    setPausado(true);
    setCaidaIniciada(false);
  };

  const reiniciarSimulacion = () => {
    setTiempo(0);
    setVelocidadFinal(0);
    setPosicion(alturaInicial);
    setCaidaIniciada(false);
    setPausado(false);
  };

  return (
    <div className="simulador">
      <h1>Simulador de Caída Libre</h1>
      <button onClick={regresar}>Regresar</button>

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

export default FreeFallSimulator;
