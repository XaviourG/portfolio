import React, { Component, ReactElement, useState } from 'react';
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Model } from './Model';
import { ResumeModel } from './ResumeModel';

const ThreeJsShowcase = (): ReactElement => {
  const [hover, setHover] = useState(false);
  const [downloading, setDownloading] = useState(false);
 
  return <div className="flex flex-col w-full items-center" style={{height: '50vh'}}>
    <Canvas style={{height: '100%', width: '100%'}}>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 1, 5]} />
      <ResumeModel hover={hover} setHover={setHover} setDownloading={setDownloading}/>
    </Canvas>
    {(hover || downloading) && <div className="-translate-y-40 xl:-translate-y-60 h-0">
      <div className="pl-3 pr-3 pt-1 pb-1 m-1 bg-HIGHLIGHT75 rounded-full pointer-events-none">
        <p className="text-BACKGROUND text-xs xl:text-sm font-bold">{`${downloading ? 'DOWNLOADING...' : 'DOWNLOAD'}`}</p>
      </div>
    </div>}
  </div>
}

export default ThreeJsShowcase;

