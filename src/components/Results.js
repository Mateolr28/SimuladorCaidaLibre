import React from 'react';

function Results({ tiempo, velocidadFinal, posicion }) {
  return (
    <div>
      <h2>Resultados</h2>
      <p><strong>Tiempo:</strong> {tiempo.toFixed(2)} s</p>
      <p><strong>Velocidad Final:</strong> {velocidadFinal.toFixed(2)} m/s</p>
      <p><strong>Altura Actual:</strong> {posicion.toFixed(2)} m</p>
    </div>
  );
}

export default Results;
