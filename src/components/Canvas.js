import React, { useEffect, useRef } from 'react';

function Canvas({
  alturaInicial, gravedad, tiempo, setTiempo, setPosicion, setVelocidadFinal, posicion, caidaIniciada, pausado
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
          const nuevaPosicion = alturaInicial - (0.5 * gravedad * Math.pow(nuevoTiempo, 2));

          // Si el objeto toca el suelo
          if (nuevaPosicion <= 0) {
            clearInterval(interval);
            setPosicion(0);
            setVelocidadFinal(0);
          } else {
            setPosicion(nuevaPosicion);
            setVelocidadFinal(gravedad * nuevoTiempo);
          }

          // Dibujar el objeto
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.arc(400, canvas.height - nuevaPosicion, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'red';
          ctx.fill();
          ctx.closePath();

          return nuevoTiempo;
        });
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [caidaIniciada, pausado, alturaInicial, gravedad, setPosicion, setVelocidadFinal]);

  return <canvas ref={canvasRef} width={800} height={400} style={{ border: '1px solid black' }} />;
}

export default Canvas;
