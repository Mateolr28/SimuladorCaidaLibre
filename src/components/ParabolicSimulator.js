import React, { useState } from 'react';
import ParabolicCanvas from './ParabolicCanvas';
import Controls from './Controls';
import Results from './Results';
import '../styles/App.css';

function ParabolicSimulator({ regresar }) {
  const [velocidadInicial, setVelocidadInicial] = useState(50);
  const [angulo, setAngulo] = useState(45);
  const [tiempo, setTiempo] = useState(0);
  const [posicionX, setPosicionX] = useState(0);
  const [posicionY, setPosicionY] = useState(0);
  const [caidaIniciada, setCaidaIniciada] = useState(false);
  const [pausado, setPausado] = useState(false);

  const iniciarMovimiento = () => {
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
    setPosicionX(0);
    setPosicionY(0);
    setCaidaIniciada(false);
    setPausado(false);
  };

  return (
    <div className="simulador">
      <h1>Simulador de Movimiento Parabólico</h1>
      <button onClick={regresar}>Regresar</button>

      <Controls
        alturaInicial={0} // No aplica aquí, puedes ajustar según lo que necesites
        setAlturaInicial={() => {}}
        gravedad={9.81}
        setGravedad={() => {}}
        iniciarCaida={iniciarMovimiento}
        reiniciarSimulacion={reiniciarSimulacion}
        caidaIniciada={caidaIniciada}
        pausado={pausado}
        pausarSimulacion={pausarSimulacion}
        velocidadInicial={velocidadInicial}
        setVelocidadInicial={setVelocidadInicial}
        angulo={angulo}
        setAngulo={setAngulo}
      />

      <ParabolicCanvas
        velocidadInicial={velocidadInicial}
        angulo={angulo}
        tiempo={tiempo}
        setTiempo={setTiempo}
        setPosicionX={setPosicionX}
        setPosicionY={setPosicionY}
        caidaIniciada={caidaIniciada}
        pausado={pausado}
        posicionX={posicionX}
        posicionY={posicionY}
      />

      <Results
        tiempo={tiempo}
        velocidadFinal={Math.sqrt(posicionX * posicionX + posicionY * posicionY)}
        posicion={posicionY}
      />
    </div>
  );
}

export default ParabolicSimulator;
