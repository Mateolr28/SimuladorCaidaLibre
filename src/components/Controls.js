import React from 'react';

function Controls({
  alturaInicial, setAlturaInicial, gravedad, setGravedad, iniciarCaida, reiniciarSimulacion,
  caidaIniciada, pausado, pausarSimulacion, velocidadInicial, setVelocidadInicial, angulo, setAngulo
}) {
  return (
    <div className="controls">
      {setAlturaInicial && (
        <>
          <label>
            Altura Inicial (m):
            <input
              type="number"
              value={alturaInicial}
              onChange={(e) => setAlturaInicial(parseFloat(e.target.value) || 0)} // Conversión a número
            />
          </label>
          <label>
            Gravedad (m/s²):
            <input
              type="number"
              value={gravedad}
              onChange={(e) => setGravedad(parseFloat(e.target.value) || 0)} // Conversión a número
            />
          </label>
        </>
      )}
      {setVelocidadInicial && (
        <>
          <label>
            Velocidad Inicial (m/s):
            <input
              type="number"
              value={velocidadInicial}
              onChange={(e) => setVelocidadInicial(parseFloat(e.target.value) || 0)} // Conversión a número
            />
          </label>
          <label>
            Ángulo (°):
            <input
              type="number"
              value={angulo}
              onChange={(e) => setAngulo(parseFloat(e.target.value) || 0)} // Conversión a número
            />
          </label>
        </>
      )}
      <button onClick={iniciarCaida}>
        {caidaIniciada ? (pausado ? 'Reanudar' : 'Pausar') : 'Iniciar'}
      </button>
      <button onClick={reiniciarSimulacion}>Reiniciar</button>
    </div>
  );
}

export default Controls;
