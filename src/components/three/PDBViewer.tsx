'use client';

import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import { PDBLoader } from 'three/addons/loaders/PDBLoader.js';

export default function PDBViewer() {
  return (
    <div className="w-1/2 h-1/2">
      <Canvas camera={{ position: [0, 5, 10] }}>
        <TrackballControls rotateSpeed={5} />
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <mesh>
          <sphereGeometry args={[2]} />
          <meshStandardMaterial />
        </mesh>
        <gridHelper args={[10, 10]} />
        <axesHelper args={[8]} />
      </Canvas>
    </div>
  );
}
