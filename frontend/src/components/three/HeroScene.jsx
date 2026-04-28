import { useRef, useState, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Tech nodes representing the user's actual skill set.
 * Each has a distinct shape to visually differentiate the technology.
 */
const techNodes = [
  { name: 'React', color: '#61DAFB', shape: 'torus', pos: [2.3, 0.5, 0.3] },
  { name: 'Node.js', color: '#68A063', shape: 'box', pos: [-2.1, 0.7, -0.3] },
  { name: 'MongoDB', color: '#4DB33D', shape: 'cylinder', pos: [1.3, -1.4, 0.6] },
  { name: 'Neo4j', color: '#008CC1', shape: 'octahedron', pos: [-1.7, -1.0, 0.8] },
  { name: 'Tailwind', color: '#38BDF8', shape: 'dodecahedron', pos: [0.2, 2.0, -0.4] },
];

/* ── Tech skill node ──────────────────────────────────────── */
function TechNode({ name, color, shape, pos }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef();
  const scaleVec = useMemo(() => new THREE.Vector3(), []);

  useFrame(() => {
    const s = hovered ? 1.4 : 1;
    meshRef.current.scale.lerp(scaleVec.set(s, s, s), 0.1);
    meshRef.current.rotation.y += hovered ? 0.025 : 0.008;
    meshRef.current.rotation.x += 0.004;
  });

  const geo = useMemo(() => {
    switch (shape) {
      case 'torus':
        return <torusGeometry args={[0.28, 0.1, 16, 32]} />;
      case 'box':
        return <boxGeometry args={[0.42, 0.42, 0.42]} />;
      case 'cylinder':
        return <cylinderGeometry args={[0.22, 0.26, 0.42, 8]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.32]} />;
      case 'dodecahedron':
        return <dodecahedronGeometry args={[0.3]} />;
      default:
        return <sphereGeometry args={[0.3]} />;
    }
  }, [shape]);

  return (
    <Float speed={1.6 + Math.random() * 0.8} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={pos}>
        {/* Ambient glow sphere */}
        <mesh>
          <sphereGeometry args={[hovered ? 0.65 : 0.45, 16, 16]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={hovered ? 0.14 : 0.03}
            depthWrite={false}
          />
        </mesh>

        {/* Wireframe shape */}
        <mesh
          ref={meshRef}
          onPointerOver={() => {
            setHovered(true);
            document.body.style.cursor = 'pointer';
          }}
          onPointerOut={() => {
            setHovered(false);
            document.body.style.cursor = 'default';
          }}
        >
          {geo}
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 1.2 : 0.5}
            wireframe
            transparent
            opacity={hovered ? 0.95 : 0.7}
          />
        </mesh>

        {/* Always-facing label */}
        <Billboard>
          <Text
            position={[0, -0.52, 0]}
            fontSize={hovered ? 0.14 : 0.11}
            color={hovered ? '#ffffff' : color}
            anchorX="center"
            anchorY="middle"
            outlineWidth={hovered ? 0.005 : 0}
            outlineColor="#000000"
          >
            {name}
          </Text>
        </Billboard>
      </group>
    </Float>
  );
}

/* ── Central atom (represents the developer) ──────────────── */
function CoreAtom() {
  const ring1 = useRef();
  const ring2 = useRef();
  const ring3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ring1.current.rotation.z = t * 0.4;
    ring2.current.rotation.z = t * 0.3;
    ring2.current.rotation.x = t * 0.2;
    ring3.current.rotation.y = t * 0.35;
    ring3.current.rotation.z = t * 0.15;
  });

  return (
    <group>
      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.2}
          transparent
          opacity={0.75}
        />
      </mesh>

      {/* Core halo */}
      <mesh>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.07} depthWrite={false} />
      </mesh>

      {/* Ring 1 — cyan */}
      <mesh ref={ring1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[0.65, 0.015, 16, 80]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} />
      </mesh>

      {/* Ring 2 — purple */}
      <mesh ref={ring2} rotation={[-Math.PI / 4, Math.PI / 3, 0]}>
        <torusGeometry args={[0.75, 0.012, 16, 80]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
      </mesh>

      {/* Ring 3 — magenta */}
      <mesh ref={ring3} rotation={[Math.PI / 6, -Math.PI / 4, Math.PI / 5]}>
        <torusGeometry args={[0.85, 0.01, 16, 80]} />
        <meshStandardMaterial color="#ec4899" emissive="#ec4899" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

/* ── Connection lines (graph / constellation) ─────────────── */
function ConnectionLines() {
  const geometry = useMemo(() => {
    const pts = [];
    const center = new THREE.Vector3(0, 0, 0);

    // Centre → each node
    techNodes.forEach((n) => {
      pts.push(center.clone(), new THREE.Vector3(...n.pos));
    });

    // Adjacent-node connections (ring)
    for (let i = 0; i < techNodes.length; i++) {
      const next = techNodes[(i + 1) % techNodes.length];
      pts.push(new THREE.Vector3(...techNodes[i].pos), new THREE.Vector3(...next.pos));
    }

    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#06b6d4" transparent opacity={0.1} />
    </lineSegments>
  );
}

/* ── Root scene — mouse-follow parallax ───────────────────── */
export default function HeroScene() {
  const groupRef = useRef();
  const { pointer } = useThree();

  useFrame(() => {
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      pointer.x * 0.4,
      0.03
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      -pointer.y * 0.25,
      0.03
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-5, -3, -3]} intensity={0.7} color="#8b5cf6" />
      <pointLight position={[0, 5, -5]} intensity={0.4} color="#ec4899" />

      <CoreAtom />
      <ConnectionLines />

      {techNodes.map((node) => (
        <TechNode key={node.name} {...node} />
      ))}
    </group>
  );
}
