import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function Sphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#a1a1aa"
          wireframe
          emissive="#52525b"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed top-0 right-0 w-full md:w-1/2 h-screen pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <Sphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
