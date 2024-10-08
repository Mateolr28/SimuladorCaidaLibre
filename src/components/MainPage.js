import React from 'react';

function MainPage({ mostrarSimulador }) {
  return (
    <div>
      <h1>Simuladores de Física</h1>
      <button onClick={() => mostrarSimulador('caidaLibre')}>Simulador de Caída Libre</button>
      <button onClick={() => mostrarSimulador('movimientoParabolico')}>Simulador de Movimiento Parabólico</button>
    </div>
  );
}

export default MainPage;
