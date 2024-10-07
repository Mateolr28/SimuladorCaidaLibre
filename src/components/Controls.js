import React from 'react';

function Controls({
  alturaInicial, setAlturaInicial, gravedad, setGravedad, 
  iniciarCaida, reiniciarSimulacion, caidaIniciada, pausado, pausarSimulacion
}) {
  return (
    <div className="controls-container">
      <label>
        Altura Inicial (m):
        <input 
          type="number" 
          value={alturaInicial} 
          onChange={(e) => setAlturaInicial(Number(e.target.value))} 
        />
      </label>

      <label style={{ marginLeft: '20px' }}>
        Gravedad (m/s²):
        <input 
          type="number" 
          value={gravedad} 
          onChange={(e) => setGravedad(Number(e.target.value))} 
        />
      </label>

      <div className="buttons-container">
        <button onClick={iniciarCaida} disabled={caidaIniciada && !pausado}>
          {pausado ? "Reanudar" : "Iniciar Caída"}
        </button>
        <button onClick={pausarSimulacion} disabled={!caidaIniciada || pausado}>
          Pausar
        </button>
        <button onClick={reiniciarSimulacion}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Controls;
