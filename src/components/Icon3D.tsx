import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface Icon3DProps {
  type: "box" | "sphere" | "torus" | "cone" | "octahedron";
  color?: string;
  speed?: number;
}

const Icon3D = ({ type, color = "#00d9ff", speed = 0.01 }: Icon3DProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += speed;
    meshRef.current.rotation.y += speed * 0.7;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  const renderGeometry = () => {
    switch (type) {
      case "sphere":
        return <sphereGeometry args={[1, 32, 32]} />;
      case "torus":
        return <torusGeometry args={[0.7, 0.3, 16, 32]} />;
      case "cone":
        return <coneGeometry args={[0.7, 1.5, 32]} />;
      case "octahedron":
        return <octahedronGeometry args={[1]} />;
      default:
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
    }
  };

  return (
    <mesh ref={meshRef}>
      {renderGeometry()}
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export default Icon3D;
