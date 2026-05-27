"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type MouseRef = React.RefObject<{ x: number; y: number }>;

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function HeroScene({
  mouseRef,
  reducedMotion,
}: {
  mouseRef: MouseRef;
  reducedMotion: boolean;
}) {
  const groupRef = useRef<THREE.Group | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);

  const particleData = useMemo(() => {
    const count = 120;
    const rand = mulberry32(42);

    const xBase = new Float32Array(count);
    const yBase = new Float32Array(count);
    const zBase = new Float32Array(count);
    const seeds = new Float32Array(count);
    const amps = new Float32Array(count);

    const positions = new Float32Array(count * 3);

    // Keep particles inside a small box around the center.
    const xRange = 2.2;
    const yRange = 1.6;
    const zRange = 1.8;

    for (let i = 0; i < count; i++) {
      const x = (rand() - 0.5) * xRange;
      const y = (rand() - 0.5) * yRange + 0.2;
      const z = (rand() - 0.5) * zRange;

      xBase[i] = x;
      yBase[i] = y;
      zBase[i] = z;

      const seed = rand() * 10;
      seeds[i] = seed;
      amps[i] = 0.06 + rand() * 0.14;

      positions[i * 3 + 0] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    return { count, geometry, xBase, yBase, zBase, seeds, amps };
  }, []);

  useFrame((state) => {
    if (reducedMotion) return;

    const t = state.clock.getElapsedTime();
    const camera = state.camera;
    const mx = mouseRef.current?.x ?? 0;
    const my = mouseRef.current?.y ?? 0;

    // Soft camera parallax.
    const targetX = mx * 0.9;
    const targetY = -my * 0.6;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
    camera.lookAt(0, 0, 0);

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mx * 0.25,
        0.06,
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -my * 0.12,
        0.06,
      );
    }

    if (sphereRef.current) {
      sphereRef.current.rotation.y += state.clock.getDelta() * 0.6;
      sphereRef.current.rotation.x += state.clock.getDelta() * 0.2;
    }

    const posAttr = particleData.geometry.getAttribute(
      "position",
    ) as THREE.BufferAttribute;

    // AI energy motion: deterministic + gentle oscillation.
    for (let i = 0; i < particleData.count; i++) {
      const y = particleData.yBase[i];
      const amp = particleData.amps[i];
      posAttr.array[i * 3 + 1] =
        y + Math.sin(t * 0.65 + particleData.seeds[i]) * amp;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.28} />
      <directionalLight position={[2.5, 2.5, 2.5]} intensity={0.25} />
      <directionalLight position={[-2.5, 1.8, 2.5]} intensity={0.18} />

      {/* Glowing AI sphere */}
      {reducedMotion ? (
        <mesh ref={sphereRef} position={[0, 1.05, 0]}>
          <sphereGeometry args={[0.55, 18, 18]} />
          <meshStandardMaterial
            color="#A78BFA"
            emissive="#7C3AED"
            emissiveIntensity={1.1}
            roughness={0.25}
            metalness={0.25}
            transparent
            opacity={0.88}
            toneMapped={false}
          />
        </mesh>
      ) : (
        <Float
          speed={1.4}
          rotationIntensity={0.26}
          floatIntensity={2.2}
        >
          <mesh ref={sphereRef} position={[0, 1.05, 0]}>
            <sphereGeometry args={[0.55, 18, 18]} />
            <meshStandardMaterial
              color="#A78BFA"
              emissive="#7C3AED"
              emissiveIntensity={1.1}
              roughness={0.25}
              metalness={0.25}
              transparent
              opacity={0.88}
              toneMapped={false}
            />
          </mesh>
        </Float>
      )}

      {/* Floating ring accents */}
      {reducedMotion ? (
        <mesh position={[0.95, 0.65, -0.25]}>
          <torusGeometry args={[0.65, 0.03, 12, 48]} />
          <meshBasicMaterial
            color="#8B5CF6"
            transparent
            opacity={0.28}
            toneMapped={false}
          />
        </mesh>
      ) : (
        <Float
          speed={1.2}
          rotationIntensity={0.22}
          floatIntensity={1.6}
        >
          <mesh position={[0.95, 0.65, -0.25]}>
            <torusGeometry args={[0.65, 0.03, 12, 48]} />
            <meshBasicMaterial
              color="#8B5CF6"
              transparent
              opacity={0.28}
              toneMapped={false}
            />
          </mesh>
        </Float>
      )}

      {reducedMotion ? (
        <mesh
          position={[-0.9, 0.3, 0.35]}
          rotation={[Math.PI * 0.2, 0, 0]}
        >
          <torusGeometry args={[0.52, 0.028, 14, 44]} />
          <meshBasicMaterial
            color="#A78BFA"
            transparent
            opacity={0.22}
            toneMapped={false}
          />
        </mesh>
      ) : (
        <Float
          speed={1.25}
          rotationIntensity={0.18}
          floatIntensity={1.2}
        >
          <mesh
            position={[-0.9, 0.3, 0.35]}
            rotation={[Math.PI * 0.2, 0, 0]}
          >
            <torusGeometry args={[0.52, 0.028, 14, 44]} />
            <meshBasicMaterial
              color="#A78BFA"
              transparent
              opacity={0.22}
              toneMapped={false}
            />
          </mesh>
        </Float>
      )}

      {/* Minimal “dashboard” blocks */}
      <group position={[0, -0.05, 0]}>
        <mesh position={[-0.85, 0.2, 0]} scale={[0.52, 0.35, 0.05]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#F5F3FF"
            emissive="#7C3AED"
            emissiveIntensity={0.2}
            roughness={0.7}
            metalness={0.05}
            transparent
            opacity={0.55}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0.75, 0.55, -0.05]} scale={[0.64, 0.28, 0.05]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#F5F3FF"
            emissive="#8B5CF6"
            emissiveIntensity={0.22}
            roughness={0.7}
            metalness={0.06}
            transparent
            opacity={0.48}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0.0, 0.0, 0.0]} scale={[1.6, 0.45, 0.06]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#7C3AED"
            emissiveIntensity={0.18}
            roughness={0.72}
            metalness={0.1}
            transparent
            opacity={0.35}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Subtle particles */}
      <points geometry={particleData.geometry}>
        <pointsMaterial
          color="#A78BFA"
          size={0.03}
          sizeAttenuation
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export function HeroFutureScene({
  mouseRef,
  reducedMotion,
}: {
  mouseRef: MouseRef;
  reducedMotion: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
        camera={{ position: [0, 0.15, 4.2], fov: 52 }}
        frameloop={reducedMotion ? "demand" : "always"}
      >
        <HeroScene mouseRef={mouseRef} reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}

