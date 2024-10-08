import React, { useEffect, useRef } from 'react';

function ParabolicCanvas({
  velocidadInicial, angulo, tiempo, setTiempo, setPosicionX, setPosicionY, caidaIniciada, pausado, posicionX, posicionY
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let interval;

    if (caidaIniciada && !pausado) {
      interval = setInterval(() => {
        setTiempo((prevTiempo) => {
          const nuevoTiempo = prevTiempo + 0.1;
          const radianes = (angulo * Math.PI) / 180;
          const nuevaPosicionX = velocidadInicial * Math.cos(radianes) * nuevoTiempo;
          const nuevaPosicionY = velocidadInicial * Math.sin(radianes) * nuevoTiempo - (0.5 * 9.81 * Math.pow(nuevoTiempo, 2));

          // Si el objeto toca el suelo
          if (nuevaPosicionY <= 0) {
            clearInterval(interval);
            setPosicionY(0);
            setPosicionX(nuevaPosicionX);
          } else {
            setPosicionX(nuevaPosicionX);
            setPosicionY(nuevaPosicionY);
          }

          // Dibujar el objeto
          ctx.clearRect
          (0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(nuevaPosicionX, canvas.height - nuevaPosicionY, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'blue';
          ctx.fill();
          ctx.closePath();

          return nuevoTiempo;
        });
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [caidaIniciada, pausado, velocidadInicial, angulo, setPosicionX, setPosicionY]);

  return <canvas ref={canvasRef} width={800} height={400} style={{ border: '1px solid black' }} />;
}

export default ParabolicCanvas;

