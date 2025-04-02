"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const StarFieldBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    canvas.style.opacity = "0";

    // Preload texture
    const loadingManager = new THREE.LoadingManager(() => {
      canvas.style.transition = "opacity 1s ease-in-out";
      canvas.style.opacity = "1";
    });
    const loader = new THREE.TextureLoader(loadingManager);
    const starTexture = loader.load("/star.png");

    const scene = new THREE.Scene();

    // Parameters for the star field
    const particlesCount = 5000;
    const wrapHeight = 4; // vertical range of the star field
    const scrollScale = 0.001; // adjust to control scroll speed

    // Create geometry and initialize positions.
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    // Save the original positions for wrapping calculations.
    const initialPositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const i3 = i * 3;
      // x and z can be randomized within a range; adjust as needed.
      positions[i3] = (Math.random() - 0.5) * 5;
      positions[i3 + 1] = (Math.random() - 0.5) * wrapHeight; // y in range
      positions[i3 + 2] = (Math.random() - 0.5) * 5;

      initialPositions[i3] = positions[i3];
      initialPositions[i3 + 1] = positions[i3 + 1];
      initialPositions[i3 + 2] = positions[i3 + 2];
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      size: 0.01,
      map: starTexture,
      transparent: true,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    // Optional subtle light
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Set up camera and renderer
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 0, 2);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.setClearColor(new THREE.Color("#21282a"), 1);

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", handleResize);

    // Mouse movement for rotation effect
    let normalizedX = 0.5,
      normalizedY = 0.5;
    const handleMouseMove = (event: MouseEvent) => {
      normalizedX = event.clientX / window.innerWidth;
      normalizedY = event.clientY / window.innerHeight;
    };
    document.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", () => {
      normalizedX = 0.5;
      normalizedY = 0.5;
    });

    // Animation loop
    const clock = new THREE.Clock();
    const rotationFactor = Math.PI * 0.1;
    const defaultSpeed = 0.1;
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      // Compute a scroll offset based on window.scrollY.
      const scrollOffset = window.scrollY * scrollScale;

      // Update each star's y position based on its original value plus the scroll offset.
      const positionsAttribute = particlesGeometry.getAttribute(
        "position"
      ) as THREE.BufferAttribute;
      const array = positionsAttribute.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // x and z remain constant
        array[i3] = initialPositions[i3];
        let newY = initialPositions[i3 + 1] + scrollOffset;
        // Wrap newY to keep it within [-wrapHeight/2, wrapHeight/2]
        if (newY > wrapHeight / 2) {
          newY = newY - wrapHeight;
        } else if (newY < -wrapHeight / 2) {
          newY = newY + wrapHeight;
        }
        array[i3 + 1] = newY;
      }
      positionsAttribute.needsUpdate = true;

      // Apply a rotation based on mouse movement (this rotation is applied to the whole mesh)
      const defaultRotationY = elapsedTime * defaultSpeed;
      particlesMesh.rotation.x = (normalizedY - 0.5) * rotationFactor;
      particlesMesh.rotation.y =
        defaultRotationY + (normalizedX - 0.5) * rotationFactor;

      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="webgl fixed top-0 left-0 w-full h-full z-[-1] bg-[#21282a]"
    />
  );
};

export default StarFieldBackground;
