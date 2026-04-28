import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function TechCube() {
  const groupRef = useRef();
  const outerRef = useRef();
  const innerRef = useRef();
  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Mouse-follow parallax on the whole group
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, pointer.x * 0.6, 0.04);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -pointer.y * 0.4, 0.04);

    // Gentle self-rotation on outer cube
    outerRef.current.rotation.y += 0.003;
    outerRef.current.rotation.x = Math.sin(t * 0.25) * 0.4;

    // Counter-rotation on inner shape
    innerRef.current.rotation.x = -t * 0.15;
    innerRef.current.rotation.y = -t * 0.22;
  });

  const faceColors = ['#06b6d4', '#8b5cf6', '#ec4899', '#10b981', '#f59e0b', '#3b82f6'];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 3, 3]} intensity={1} color="#06b6d4" />
      <pointLight position={[-2, -2, 2]} intensity={0.5} color="#8b5cf6" />

      <mesh ref={outerRef}>
        <boxGeometry args={[2, 2, 2]} />
        {faceColors.map((color, i) => (
          <meshStandardMaterial key={i} attach={`material-${i}`} color={color} wireframe emissive={color} emissiveIntensity={0.4} transparent opacity={0.5} />
        ))}
      </mesh>

      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} transparent opacity={0.4} wireframe />
      </mesh>
    </group>
  );
}
