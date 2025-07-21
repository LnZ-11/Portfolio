"use client";

import {motion} from 'motion/react';
import React, { useState, useEffect, useMemo } from 'react';
interface LeafBackgroundProps {
  children?: React.ReactNode;
}

const LeafBackground = ({ children }: LeafBackgroundProps) => {
  const [leaves, setLeaves] = useState<React.ReactNode[]>([]);

  // Generate different leaf shapes
  const leafShapes = useMemo(() => [
    // 'polygon(50% 0%, 80% 30%, 60% 100%, 20% 70%)', // Standard leaf
    // 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond leaf
    // 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', // Octagon leaf
    // 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // Teardrop leaf
    // 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)', // Rounded square leaf
    // 'polygon(40% 0%, 60% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)', // Triangular leaf
    // 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond leaf
    // 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', // Octagon leaf
    // 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // Teardrop leaf
    // 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)', // Rounded square leaf
    'polygon(50% 0%, 60% 8%, 70% 20%, 75% 35%, 70% 55%, 60% 75%, 50% 100%, 40% 75%, 30% 55%, 25% 35%, 30% 20%, 40% 8%)',
    'polygon(50% 0%, 65% 12%, 75% 28%, 80% 45%, 70% 68%, 50% 100%, 30% 68%, 20% 45%, 25% 28%, 35% 12%)',
    'polygon(50% 0%, 60% 10%, 70% 25%, 75% 45%, 70% 60%, 60% 75%, 50% 85%, 40% 75%, 30% 60%, 25% 45%, 30% 25%, 40% 10%)',
    'polygon(50% 0%, 65% 5%, 80% 15%, 90% 30%, 95% 50%, 90% 70%, 80% 85%, 65% 95%, 50% 100%, 35% 95%, 20% 85%, 10% 70%, 5% 50%, 10% 30%, 20% 15%, 35% 5%)',
    'polygon(50% 0%, 60% 10%, 70% 25%, 75% 45%, 70% 60%, 60% 75%, 50% 85%, 40% 75%, 30% 60%, 25% 45%, 30% 25%, 40% 10%)',
    'polygon(50% 0%, 58% 5%, 66% 15%, 70% 30%, 65% 50%, 55% 70%, 50% 100%, 45% 70%, 35% 50%, 30% 30%, 34% 15%, 42% 5%)',
    


  ], []);

  // Generate different green shades
  const greenShades = useMemo(() => [
    '#03c10c', // Bright green
    '#0a8a43', // Dark green
    '#7cb342', // Light green
    '#4caf50', // Medium green
    '#8bc34a', // Lime green
    '#006400', // Deep green
    '#32cd32', // Lime green
  ], []);

  // Generate leaves only on the client side
  useEffect(() => {
    const generatedLeaves = [];
    const leafCount = Math.random() * 30 + 40; // Increased number of leaves

    for (let i = 0; i < leafCount; i++) {
      // Random properties for each leaf
      const size = Math.floor(Math.random() * 40) + 20; // Size between 30px and 80px
      const shapeIndex = Math.floor(Math.random() * leafShapes.length);
      const colorIndex = Math.floor(Math.random() * greenShades.length);
      const opacity = (Math.random() * 0.5) + 0.2; // Opacity between 0.2 and 0.7
      const top = `${Math.floor(Math.random() * 100)}%`;
      const left = `${Math.floor(Math.random() * 100)}%`;
      const rotation = Math.floor(Math.random() * 360) + 90; // Full rotation possibilities
      const scale = (Math.random() * 0.5) + 0.5; // Scale between 0.5 and 1.0
      const rotationAnimation = Math.floor(Math.random() * 2 - 1) * Math.floor(Math.random() * 10) + rotation;
      const durationAnimation = Math.floor(Math.random() * 3) + 10;

      generatedLeaves.push(
        <motion.div
          key={i}
          className="absolute"
          style={{
            width: `${size}px`,
            height: `${size * 1.5}px`,
            backgroundColor: greenShades[colorIndex],
            opacity: opacity,
            clipPath: leafShapes[shapeIndex],
            top: top,
            left: left,
            transform: `rotate(${rotation}deg) scale(${scale})`,
            transition: 'transform 5s infinite ease-in-out',
            zIndex: 1
          }}
          transition={{
            duration: durationAnimation,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          initial={{rotate:rotation}}
          whileInView={{rotate:rotationAnimation,}}

        />
      );
    }
    setLeaves(generatedLeaves);
  }, [greenShades, leafShapes]);

  return (
    <div className="relative bg-[#000000FF] min-h-screen w-full overflow-hidden z-0">
      {leaves}
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LeafBackground;
