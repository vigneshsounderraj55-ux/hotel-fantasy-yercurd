import { useEffect, useRef, useState, type RefObject } from 'react';
import type * as THREE from 'three';

/**
 * Lazy-loaded Three.js mist particle field.
 * Evokes mist drifting over the hills. Only renders when WebGL is available
 * and the user hasn't requested reduced motion.
 */
export function MistParticles({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion && containerRef.current) {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) return <div ref={containerRef} className={className} aria-hidden="true" />;

  return <MistFieldInner className={className} containerRef={containerRef} />;
}

function MistFieldInner({
  className,
  containerRef,
}: {
  className?: string;
  containerRef: RefObject<HTMLDivElement | null>;
}) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import('three');

      let renderer: THREE.WebGLRenderer | null = null;
      let frameId = 0;

      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          60,
          container.clientWidth / container.clientHeight,
          0.1,
          1000
        );
        camera.position.z = 50;

        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const particleCount = 180;
        const positions = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 120;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 70;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
          sizes[i] = Math.random() * 2.5 + 0.5;
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
          color: 0x5e7a4d,
          size: 1.2,
          transparent: true,
          opacity: 0.35,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        let mouseX = 0;
        let mouseY = 0;
        const onMouseMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
          mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
        };
        window.addEventListener('mousemove', onMouseMove);

        const animate = () => {
          frameId = requestAnimationFrame(animate);
          points.rotation.y += 0.0008 + mouseX * 0.01;
          points.rotation.x += 0.0004 + mouseY * 0.008;
          renderer!.render(scene, camera);
        };
        animate();

        const onResize = () => {
          if (!container || !renderer) return;
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, container.clientHeight);
        };
        window.addEventListener('resize', onResize);

        cleanup = () => {
          cancelAnimationFrame(frameId);
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('resize', onResize);
          geometry.dispose();
          material.dispose();
          renderer?.dispose();
          if (renderer?.domElement.parentNode) {
            renderer.domElement.parentNode.removeChild(renderer.domElement);
          }
        };
      } catch {
        // WebGL not available
      }
    })();

    return () => cleanup?.();
  }, [containerRef]);

  return <div ref={containerRef} className={className} aria-hidden="true" />;
}
