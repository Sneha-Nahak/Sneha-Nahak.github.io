import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Html } from "@react-three/drei";
import { Link } from "react-router-dom";
import HackerRoom from "./HackerRoom.jsx";
import "../index.css";

// Loader that works inside Canvas using Html
const Loader = () => (
  <Html center>
    <div className="scene-loading">
      <h2>Loading 3D Room...</h2>
      <p>Please wait a moment 🌀</p>
    </div>
  </Html>
);

const Scene = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="r3f-scene"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="scene-tooltip">
          <h2>You can Contact me below👇</h2>
          <Link to="/contact">
            <span
              style={{ color: "red", fontWeight: "bold", fontSize: "1.5rem" }}
            >
              Contact
            </span>
          </Link>
          <br />
          Please hold your mouse, <br />
          Move around or scoll
          <br />
          And see the magic! 🪄🔮🌟
        </div>
      )}

      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 2]} intensity={1} />

        {/* Use of Suspense with Html-based fallback */}
        <Suspense fallback={<Loader />}>
          <HackerRoom
            scale={0.011}
            position={[0, -0.5, 0]}
            rotation={[0, Math.PI, 0]}
          />
        </Suspense>

        <OrbitControls />
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Scene;
