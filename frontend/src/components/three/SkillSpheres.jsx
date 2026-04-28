import { useRef, useState, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Billboard, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function SkillNode({ position, name, color, proficiency, isSelected, onSelect }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const glowRef = useRef();
  const scaleVec = useMemo(() => new THREE.Vector3(), []);
  const glowVec = useMemo(() => new THREE.Vector3(), []);
  const size = 0.15 + (proficiency / 100) * 0.15;
  const active = hovered || isSelected;

  useFrame(() => {
    const s = active ? 1.5 : 1;
    meshRef.current.scale.lerp(scaleVec.set(s, s, s), 0.1);
    if (glowRef.current) {
      const gs = active ? 2.2 : 1;
      glowRef.current.scale.lerp(glowVec.set(gs, gs, gs), 0.1);
    }
    meshRef.current.rotation.y += 0.006;
  });

  const onOver = useCallback(() => { setHovered(true); document.body.style.cursor = 'pointer'; }, []);
  const onOut = useCallback(() => { setHovered(false); document.body.style.cursor = 'default'; }, []);

  return (
    <group position={position}>
      <mesh ref={glowRef}>
        <sphereGeometry args={[size * 2, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={active ? 0.18 : 0.04} depthWrite={false} />
      </mesh>
      <mesh ref={meshRef} onPointerOver={onOver} onPointerOut={onOut} onClick={() => onSelect?.(name)}>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={active ? 1.5 : 0.5} roughness={0.15} metalness={0.8} />
      </mesh>
      <Billboard>
        <Text position={[0, -(size + 0.22), 0]} fontSize={active ? 0.13 : 0.1} color={active ? '#ffffff' : color} anchorX="center" anchorY="middle" outlineWidth={active ? 0.004 : 0} outlineColor="#000000">
          {name}
        </Text>
        {active && (
          <Text position={[0, size + 0.2, 0]} fontSize={0.1} color="#ffffff" anchorX="center" anchorY="middle" outlineWidth={0.003} outlineColor="#000000">
            {`${proficiency}%`}
          </Text>
        )}
      </Billboard>
    </group>
  );
}

function Connections({ nodes }) {
  const geometry = useMemo(() => {
    const pts = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = new THREE.Vector3(...nodes[i].position);
        const b = new THREE.Vector3(...nodes[j].position);
        if (a.distanceTo(b) < 3) pts.push(a, b);
      }
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [nodes]);
  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.12} />
    </lineSegments>
  );
}

export default function SkillSpheres({ skills = [] }) {
  const [selected, setSelected] = useState(null);
  const handleSelect = useCallback((name) => setSelected((p) => (p === name ? null : name)), []);

  const nodes = useMemo(() => {
    const palette = ['#06b6d4','#8b5cf6','#ec4899','#10b981','#f59e0b','#3b82f6','#ef4444','#06b6d4','#8b5cf6','#ec4899'];
    return skills.map((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const radius = 1.5 + (i % 3) * 0.3;
      const y = Math.sin(i * 1.3) * 0.9;
      return { ...skill, position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius], color: skill.color || palette[i % palette.length] };
    });
  }, [skills]);

  return (
    <>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} minPolarAngle={Math.PI / 4} maxPolarAngle={(Math.PI * 3) / 4} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#06b6d4" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#8b5cf6" />
      <Connections nodes={nodes} />
      {nodes.map((node, i) => (
        <SkillNode key={node.id || i} position={node.position} name={node.name} color={node.color} proficiency={node.proficiency} isSelected={selected === node.name} onSelect={handleSelect} />
      ))}
    </>
  );
}
