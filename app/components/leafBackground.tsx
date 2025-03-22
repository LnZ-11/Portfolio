"use client";

import React, { useState, useEffect } from 'react';

interface LeafBackgroundProps {
  children?: React.ReactNode;
}

const LeafMotifBackground = ({ children }: LeafBackgroundProps) => {
  const [leaves, setLeaves] = useState<React.ReactNode[]>([]);

  // Generate different leaf shapes
  const leafShapes = [
    'polygon(50% 0%, 80% 30%, 60% 100%, 20% 70%)', // Standard leaf
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond leaf
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', // Octagon leaf
    'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // Teardrop leaf
    'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)', // Rounded square leaf
    'polygon(40% 0%, 60% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%)', // Triangular leaf
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond leaf
    'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', // Octagon leaf
    'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // Teardrop leaf
    'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' // Rounded square leaf
  ];

  // Generate different green shades
  const greenShades = [
    '#03c10c', // Bright green
    '#0a8a43', // Dark green
    '#7cb342', // Light green
    '#4caf50', // Medium green
    '#8bc34a', // Lime green
    '#006400', // Deep green
    '#32cd32', // Lime green
    '#DF950DFF', // Orange
  ];

  // Generate leaves only on the client side
  useEffect(() => {
    const generatedLeaves = [];
    const leafCount = Math.random() * 30 + 20; // Increased number of leaves

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

      generatedLeaves.push(
        <div
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
        />
      );
    }
    setLeaves(generatedLeaves);
  },[]);

  return (
    <div className="relative bg-[#fef9e7] min-h-screen w-full overflow-hidden">
      {leaves}
      {/* Content container */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LeafMotifBackground;
