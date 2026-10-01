"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import {
  transitionVertexShader,
  transitionFragmentShader,
  particleVertexShader,
  particleFragmentShader,
} from "./shaders";

interface ExperienceCanvasProps {
  progress: number;
}

interface TextureStage {
  t1: THREE.Texture;
  t2: THREE.Texture;
}

export const ExperienceCanvas: React.FC<ExperienceCanvasProps> = ({ progress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const uniformsRef = useRef<{
    uProgress: { value: number };
    uTime: { value: number };
    uTexture1: { value: THREE.Texture | null };
    uTexture2: { value: THREE.Texture | null };
    uResolution: { value: THREE.Vector2 };
    uMouse: { value: THREE.Vector2 };
  } | null>(null);

  const stagesRef = useRef<TextureStage[]>([]);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const initialProgressRef = useRef(progress);

  // Update shader uniform on progress prop update
  useEffect(() => {
    if (!uniformsRef.current || stagesRef.current.length === 0) return;

    const stages = stagesRef.current;
    const stageCount = stages.length;

    // Distribute overall progress across the distinct texture stages
    const scaled = Math.min(Math.max(progress, 0), 0.999) * stageCount;
    const stageIndex = Math.floor(scaled);
    const localProgress = scaled - stageIndex;

    const currentStage = stages[stageIndex];
    if (currentStage) {
      uniformsRef.current.uTexture1.value = currentStage.t1;
      uniformsRef.current.uTexture2.value = currentStage.t2;
      uniformsRef.current.uProgress.value = localProgress;
    }
  }, [progress]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 4.2);
    cameraRef.current = camera;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        powerPreference: "high-performance",
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.style.pointerEvents = "none";
      renderer.domElement.style.touchAction = "pan-y";
      container.appendChild(renderer.domElement);
    } catch (err) {
      console.warn("WebGL initialization skipped:", err);
      return;
    }

    // Load authentic OTIS imagery
    const textureLoader = new THREE.TextureLoader();
    const texCommercial = textureLoader.load("/images/otis-hero-commercial-cleaning.jpg");
    const texOffice = textureLoader.load("/images/otis-hero-office-cleaning.jpg");
    const texFloorDirty = textureLoader.load("/images/real_floor_dirty_1789881645030.jpg");
    const texFloorClean = textureLoader.load("/images/real_floor_clean_1789881653699.jpg");
    const texClinic = textureLoader.load("/images/otis-hero-clinic.jpg");
    const texFloors = textureLoader.load("/images/otis-hero-floor-maintenance.jpg");
    const texPostReno = textureLoader.load("/images/otis-hero-post-renovation.jpg");
    const texRetail = textureLoader.load("/images/otis-hero-retail.jpg");

    const allTextures = [
      texCommercial,
      texOffice,
      texFloorDirty,
      texFloorClean,
      texClinic,
      texFloors,
      texPostReno,
      texRetail,
    ];

    allTextures.forEach((t) => {
      t.wrapS = THREE.ClampToEdgeWrapping;
      t.wrapT = THREE.ClampToEdgeWrapping;
      t.minFilter = THREE.LinearFilter;
      t.magFilter = THREE.LinearFilter;
      t.colorSpace = THREE.SRGBColorSpace;
    });

    const stages: TextureStage[] = [
      { t1: texCommercial, t2: texOffice },      // Act 01: Hero to Corporate Atrium
      { t1: texFloorDirty, t2: texFloorClean },  // Act 02: Transformation (Real Unfiltered Restoration)
      { t1: texClinic, t2: texFloors },          // Act 03: Clinical Sanitation & Hard Floors
      { t1: texPostReno, t2: texRetail },        // Act 04: Post-Reno & Commercial Spaces
    ];
    stagesRef.current = stages;

    // Plane sizing calculation to cover camera frustum
    const computePlaneSize = () => {
      const vFov = (camera.fov * Math.PI) / 180;
      const height = 2 * Math.tan(vFov / 2) * camera.position.z;
      const width = height * camera.aspect;
      return { width, height };
    };

    const { width: pWidth, height: pHeight } = computePlaneSize();

    // 1. Primary Transition Mesh
    const planeGeo = new THREE.PlaneGeometry(pWidth * 1.05, pHeight * 1.05, 48, 48);
    const planeUniforms = {
      uTexture1: { value: texCommercial },
      uTexture2: { value: texOffice },
      uProgress: { value: initialProgressRef.current },
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0, 0) },
    };
    uniformsRef.current = planeUniforms;

    const planeMat = new THREE.ShaderMaterial({
      vertexShader: transitionVertexShader,
      fragmentShader: transitionFragmentShader,
      uniforms: planeUniforms,
      transparent: true,
      depthWrite: false,
    });

    const planeMesh = new THREE.Mesh(planeGeo, planeMat);
    planeMesh.position.z = 0;
    scene.add(planeMesh);

    // 2. Architectural Micro-Particulates
    const isMobileDevice = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = prefersReducedMotion ? 80 : (isMobileDevice ? 140 : 600);
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);
    const speeds = new Float32Array(particleCount);
    const randoms = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * pWidth * 1.6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * pHeight * 1.6;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 3.0 + 1.0;

      scales[i] = Math.random() * 0.7 + 0.3;
      speeds[i] = Math.random() * 0.6 + 0.4;

      randoms[i * 3 + 0] = Math.random();
      randoms[i * 3 + 1] = Math.random();
      randoms[i * 3 + 2] = Math.random();
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    particleGeo.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
    particleGeo.setAttribute("aRandom", new THREE.BufferAttribute(randoms, 3));

    const particleUniforms = {
      uTime: { value: 0 },
      uProgress: { value: 0 },
    };

    const particleMat = new THREE.ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: particleUniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Tracking with Inertial Damping
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Resize Handler
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      planeUniforms.uResolution.value.set(width, height);

      const updated = computePlaneSize();
      planeMesh.geometry.dispose();
      planeMesh.geometry = new THREE.PlaneGeometry(updated.width * 1.05, updated.height * 1.05, 48, 48);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let isTabActive = true;
    const clock = new THREE.Clock();

    const onVisibilityChange = () => {
      isTabActive = !document.hidden;
      if (isTabActive) clock.start();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const render = () => {
      animationFrameId = requestAnimationFrame(render);
      if (!isTabActive) return;

      clock.getDelta();
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;

        // Camera spatial parallax (restrained architectural stability)
        camera.position.x = mouse.x * 0.08;
        camera.position.y = mouse.y * 0.05;
        camera.lookAt(0, 0, 0);

        planeUniforms.uMouse.value.set(mouse.x, mouse.y);
      }

      // Camera depth drift based on progress
      const scrollZ = 4.2 - planeUniforms.uProgress.value * 0.4;
      camera.position.z += (scrollZ - camera.position.z) * 0.08;

      planeUniforms.uTime.value = elapsed;
      particleUniforms.uTime.value = elapsed;
      particleUniforms.uProgress.value = planeUniforms.uProgress.value;

      renderer.render(scene, camera);
    };

    render();

    // Clean teardown on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Explicit WebGL Resource Disposal
      planeGeo.dispose();
      planeMat.dispose();
      allTextures.forEach((t) => t.dispose());
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050811]"
      aria-hidden="true"
    />
  );
};
