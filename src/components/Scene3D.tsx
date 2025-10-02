import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Icon3D from "./Icon3D";
import { Suspense } from "react";

interface Scene3DProps {
  type?: "box" | "sphere" | "torus" | "cone" | "octahedron";
  color?: string;
  className?: string;
}

const Scene3D = ({ type = "box", color = "#00d9ff", className = "" }: Scene3DProps) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#00d9ff"
          />
          <Icon3D type={type} color={color} speed={0.005} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
