
import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'

export function PaintingModel(props:any) {
  let camera = useThree(state=>state.camera)
  let scene = useThree(state=>state.scene)


  useLayoutEffect(()=>{
    camera.position.set(0,-1.4,5.94)
    scene.position.set(0,1.5,5.6)
    camera.rotation.set(Math.PI*0.46, 0 ,0)


},[])
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material_0} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')

