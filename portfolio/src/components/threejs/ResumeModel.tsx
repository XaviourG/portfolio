import React, { Ref, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "next/dist/shared/lib/router/utils/route-regex";

interface thing {
  rotation: {
    x: number,
    y: number,
    z: number,
  }
}

interface gltfThing {
  nodes: any,
  materials: any,
}

interface props {
  hover: boolean,
  setHover: (state: boolean) => void,
  setDownloading: (state: boolean) => void,
}

export function ResumeModel({
  hover,
  setHover,
  setDownloading,
}: props) {
  const { nodes, materials } = (useGLTF("/3d-resume.gltf") as unknown as gltfThing);
  const meshRef = React.useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (!hover) {
      (meshRef.current as unknown as thing).rotation.y += 0.01
    } else {
      (meshRef.current  as unknown as thing).rotation.y += 0.005
    }
  });

  const mouseEnter = () => {
    document.body.style.cursor = 'pointer'
    setHover(true);
  }

  const mouseLeave = () => {
    document.body.style.cursor = 'auto'
    setHover(false);
  }

  const downloadResume = () => {
    setDownloading(true);
    fetch('xaviour_greenhalgh_resume.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'xaviour_g_resume.pdf';
          alink.click();
          setDownloading(false);
      });
    });
  };

  return (
    <group dispose={null} scale={0.075}>
      <group ref={meshRef as unknown as Ref<THREE.Group> | undefined} scale={[29.7, 0.2, 21]}
        castShadow
        receiveShadow
        position={[0, 0, 0]}
        rotation={[0,1.4,1.6]}
        onPointerEnter={(e) => mouseEnter()}
        onPointerLeave={(e) => mouseLeave()}
        onClick={(e) => downloadResume()}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.cv}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_3.geometry}
          material={materials.resume}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3d-resume.gltf");