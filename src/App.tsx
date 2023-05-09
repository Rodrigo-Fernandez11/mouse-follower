import { useEffect, useState } from "react";
import "./App.css";


function App() {

  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(()=>{
    console.log('efect', { enable });
    
    const handleMove = ( event ) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY });
      setPosition ({ x: clientX, y:clientY })
    }

    if (enable) {
      window.addEventListener('pointermove', handleMove)
    }
    //CUANDO DE DESMONTA
    //CUANDO CAMBIAN LAS DEPENDENCIAS, ANTES DE EJECUTAR EL EFECTO  NUEVO
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  },[enable])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  );
}

export default App;
