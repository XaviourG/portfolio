import React, { Component, ReactElement } from 'react';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from './Model';

const ThreeJsShowcase = (): ReactElement => {
  return <Canvas style={{height: '100%', width: '100%'}}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 5]} />
      <Model/>
  </Canvas>
}

export default ThreeJsShowcase;

