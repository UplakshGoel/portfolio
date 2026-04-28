import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function StarField() {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(2500 * 3);
    for (let i = 0; i < 2500 * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 60;
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta * 0.015;
    ref.current.rotation.y -= delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function SecondaryStars() {
  const ref = useRef();

  const positions = useMemo(() => {
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800 * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 80;
    }
    return pos;
  }, []);

  useFrame((_state, delta) => {
    ref.current.rotation.x += delta * 0.008;
    ref.current.rotation.y += delta * 0.012;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <StarField />
        <SecondaryStars />
      </Canvas>
    </div>
  );
}
