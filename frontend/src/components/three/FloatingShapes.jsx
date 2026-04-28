import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function WireframeShape({ children, position, color, rotationSpeed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.15 * rotationSpeed;
    meshRef.current.rotation.y = t * 0.2 * rotationSpeed;
    meshRef.current.rotation.z = t * 0.1 * rotationSpeed;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        {children}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.6}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingShapes() {
  return (
    <group>
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#06b6d4" />
      <pointLight position={[-5, -5, -3]} intensity={0.6} color="#8b5cf6" />
      <pointLight position={[0, -3, 5]} intensity={0.4} color="#ec4899" />

      {/* Main icosahedron — cyan */}
      <WireframeShape position={[2, 0.3, 0]} color="#06b6d4" rotationSpeed={0.8}>
        <icosahedronGeometry args={[1.1, 0]} />
      </WireframeShape>

      {/* Torus knot — purple */}
      <WireframeShape position={[-1.8, -0.8, -1]} color="#8b5cf6" rotationSpeed={1.2}>
        <torusKnotGeometry args={[0.55, 0.18, 100, 12]} />
      </WireframeShape>

      {/* Octahedron — magenta */}
      <WireframeShape position={[0.5, 1.8, -2]} color="#ec4899" rotationSpeed={0.6}>
        <octahedronGeometry args={[0.75, 0]} />
      </WireframeShape>

      {/* Dodecahedron — cyan accent */}
      <WireframeShape position={[-2.5, 1.2, 0.5]} color="#06b6d4" rotationSpeed={1}>
        <dodecahedronGeometry args={[0.55, 0]} />
      </WireframeShape>

      {/* Small tetrahedron — green */}
      <WireframeShape position={[2.5, -1.5, -0.5]} color="#10b981" rotationSpeed={1.5}>
        <tetrahedronGeometry args={[0.5, 0]} />
      </WireframeShape>
    </group>
  );
}
