import React, { Component, ReactElement } from 'react';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "./Model";

const ThreeJsShowcase = (): ReactElement => {
  return <Canvas style={{height: '500px', width: '500px'}}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
  </Canvas>
}

export default ThreeJsShowcase;

