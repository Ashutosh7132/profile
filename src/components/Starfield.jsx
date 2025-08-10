import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Enhanced Stars component with multiple layers and colors
function Stars({ theme }) {
  const ref = useRef()
  const particles = useMemo(() => {
    // Reduce particle count for mobile devices
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 3000 : 8000
    
    const temp = new Float32Array(count * 3)
    for(let i = 0; i < count; i++) {
      const r = 200 + Math.random() * 1200
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = (Math.random() - 0.5) * 300
      const z = r * Math.sin(phi) * Math.sin(theta)
      temp[i * 3] = x
      temp[i * 3 + 1] = y
      temp[i * 3 + 2] = z
    }
    return temp
  }, [])

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime() * 0.03
    if (ref.current) {
      ref.current.rotation.y = t
      ref.current.rotation.x = Math.sin(t * 0.5) * 0.1
    }
    
    // Smoother scroll-based camera movement
    try {
      const scroll = window.scrollY / (document.body.scrollHeight - window.innerHeight || 1)
      camera.position.z = 100 + scroll * 150
      camera.position.y = -scroll * 50
    } catch (e) {
      // Fallback if scroll calculation fails
      camera.position.z = 100
      camera.position.y = 0
    }
  })

  return (
    <points ref={ref} position={[0, 0, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attachObject={['attributes', 'position']} count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        attach="material" 
        size={1.5} 
        sizeAttenuation 
        color={theme === 'dark' ? '#ffffff' : '#1f2937'} 
        depthWrite={false} 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Nebula cloud effect
function Nebula({ theme }) {
  const ref = useRef()
  const cloudRef = useRef()
  
  // Reduce complexity for mobile
  const isMobile = window.innerWidth < 768
  const sphereDetail = isMobile ? 16 : 32
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.02
    if (ref.current) {
      ref.current.rotation.y = t * 0.5
      ref.current.rotation.z = Math.sin(t) * 0.1
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.x = -t * 0.3
      cloudRef.current.rotation.y = t * 0.2
    }
  })

  const nebulaColor = theme === 'dark' 
    ? new THREE.Color(0x4f46e5).multiplyScalar(0.3)
    : new THREE.Color(0x6366f1).multiplyScalar(0.2)

  return (
    <group>
      {/* Main nebula cloud */}
      <mesh ref={ref} position={[0, 0, -400]} scale={[2, 1.5, 2]}>
        <sphereGeometry args={[300, sphereDetail, sphereDetail]} />
        <meshBasicMaterial 
          color={nebulaColor}
          transparent 
          opacity={0.1} 
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Secondary cloud layer */}
      <mesh ref={cloudRef} position={[200, 100, -600]} scale={[1.5, 2, 1.5]}>
        <sphereGeometry args={[200, sphereDetail, sphereDetail]} />
        <meshBasicMaterial 
          color={new THREE.Color(0x7c3aed).multiplyScalar(0.2)}
          transparent 
          opacity={0.08} 
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  )
}

// Floating particles for extra ambiance
function FloatingParticles({ theme }) {
  const ref = useRef()
  const particles = useMemo(() => {
    // Reduce particle count for mobile devices
    const isMobile = window.innerWidth < 768
    const count = isMobile ? 800 : 2000
    
    const temp = new Float32Array(count * 3)
    for(let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 2000
      temp[i * 3 + 1] = (Math.random() - 0.5) * 1000
      temp[i * 3 + 2] = (Math.random() - 0.5) * 2000
    }
    return temp
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.01
    if (ref.current) {
      ref.current.rotation.y = t
      ref.current.position.y = Math.sin(t * 2) * 10
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute attachObject={['attributes', 'position']} count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        attach="material" 
        size={0.8} 
        color={theme === 'dark' ? '#8b5cf6' : '#6366f1'} 
        transparent 
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Performance optimization wrapper
function PerformanceMonitor({ children }) {
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  
  useEffect(() => {
    // Check if device is mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    // Check if browser is Chrome
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    
    // Set performance mode based on device and browser
    setIsLowPerformance(isMobile || (isChrome && window.innerWidth < 1024))
    
    // Add resize listener to adjust performance settings
    const handleResize = () => {
      setIsLowPerformance(window.innerWidth < 768 || (isChrome && window.innerWidth < 1024))
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return children(isLowPerformance)
}

export default function Starfield({ theme = 'dark' }) {
  return (
    <PerformanceMonitor>
      {(isLowPerformance) => (
        <Canvas 
          camera={{ position: [0, 0, 100], fov: isLowPerformance ? 60 : 75 }}
          gl={{ 
            antialias: !isLowPerformance,
            powerPreference: 'high-performance',
            alpha: true,
            depth: true,
            stencil: false,
            precision: isLowPerformance ? 'lowp' : 'highp'
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        >
          <ambientLight intensity={0.1} />
          <pointLight position={[100, 100, 100]} intensity={0.3} color={"#4f46e5"} />
          <pointLight position={[-100, -100, -100]} intensity={0.2} color={"#7c3aed"} />
          
          <Stars theme={theme} />
          <Nebula theme={theme} />
          <FloatingParticles theme={theme} />
          
          {/* Distant galaxy backdrop */}
          <mesh rotation={[0, 0, 0]} position={[0, -100, -800]}>
            <sphereGeometry args={[600, isLowPerformance ? 16 : 32, isLowPerformance ? 16 : 32]} />
            <meshBasicMaterial 
              color={theme === 'dark' ? '#0f0f23' : '#1e293b'} 
              side={THREE.BackSide} 
              transparent 
              opacity={0.7} 
            />
          </mesh>
        </Canvas>
      )}
    </PerformanceMonitor>
  )
}
