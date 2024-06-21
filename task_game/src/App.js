import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false)
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh scale={active ? 1.1 : 1} onClick={() => setActive(!active)} >
          <boxGeometry args={[4,4,4]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  )
}


export default App;
