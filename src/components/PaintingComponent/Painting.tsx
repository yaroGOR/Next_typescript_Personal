import React, { useEffect } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { PaintingModel } from './PaintingModel'
import { OrbitControls } from '@react-three/drei'


const Painting = () => {
   
  return (
    <div style={{height: "500px"}}>
    <Canvas  camera={{ fov: 9 }} >
        <ambientLight/>
        <PaintingModel/>
        <axesHelper args={[100]} />
        

    </Canvas>
    </div>
  )
}

export default Painting