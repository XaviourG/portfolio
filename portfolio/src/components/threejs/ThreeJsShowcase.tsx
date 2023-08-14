import React, { Component, ReactElement, useState } from 'react';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from './Model';
import TechTags from '../project/TechTags';

const ThreeJsShowcase = (): ReactElement => {
  const [hover, setHover] = useState(false);
  const [downloading, setDownloading] = useState(false);
 
  return <div className="flex flex-col w-full items-center" style={{height: '50vh'}}>
    <Canvas style={{height: '100%', width: '100%'}}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={1} />
      <directionalLight position={[1, 1, 5]} />
      <Model hover={hover} setHover={setHover} setDownloading={setDownloading}/>
    </Canvas>
    {(hover || downloading) && <div className="-translate-y-96 h-0">
      <TechTags tags={[`${downloading ? 'DOWNLOADING...' : 'DOWNLOAD'}`]}/>
    </div>}
  </div>
}

export default ThreeJsShowcase;

