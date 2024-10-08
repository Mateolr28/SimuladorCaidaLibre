import React from 'react';

function Results({ tiempo, velocidadFinal, posicion }) {
  return (
    <div className="results">
      <h2>Resultados</h2>
      <p>Tiempo (s): {tiempo.toFixed(2)}</p>
      <p>Velocidad Final (m/s): {velocidadFinal.toFixed(2)}</p>
      <p>Posición (m): {posicion.toFixed(2)}</p>
    </div>
  );
}

export default Results;
