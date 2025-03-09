import  { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParticleImage, { forces, PixelOptions } from "react-particle-image";

/**
 * Props:
 * - src: The image URL (e.g. imported or static path)
 * - alt: alt text for accessibility
 * - className: Tailwind (like "w-40 h-40 rounded-full")
 * - assembleDuration: how many milliseconds before we swap to the final image
 */
interface AssemblingParticleImageProps {
  src: string;
  alt?: string;
  className?: string;
  assembleDuration?: number; // default ~4s
}

const AssemblingParticleImage: FC<AssemblingParticleImageProps> = ({
  src,
  alt,
  className = "",
  assembleDuration = 4000,
}) => {
  // State to handle whether we are still showing the particle animation
  const [showParticles, setShowParticles] = useState(true);

  // For dynamic sizing based on Tailwind classes
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  // Once the image is loaded, compute aspect ratio + set a timer to fade out
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;

    img.onload = () => {
      let baseWidth = 200;
      if (className.includes("w-40")) baseWidth = 160;
      if (className.includes("w-56")) baseWidth = 224;
      // Add more as needed, e.g., "w-64" => 256

      const aspectRatio = img.width / img.height;
      setWidth(baseWidth);
      setHeight(baseWidth / aspectRatio);

      // After assembleDuration ms, fade out the particles
      const timer = setTimeout(() => {
        setShowParticles(false);
      }, assembleDuration);

      return () => clearTimeout(timer);
    };
  }, [src, className, assembleDuration]);

  // Setup the "filter" and "color" callbacks for react-particle-image
  const particleOptions = {
    filter: ({ x, y, image }: PixelOptions) => {
      const { a } = image.get(x, y);
      return a > 128; // Only include non-transparent pixels
    },
    color: ({ x, y, image }: PixelOptions) => {
      const { r, g, b, a } = image.get(x, y);
      return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    },
    radius: () => Math.random() * 1.4 + 0.6,
  };

  return (
    <div
      // Ensure the container is positioned + shaped consistently:
      // "relative", "overflow-hidden", "rounded-full"
      // so both layers match exactly.
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width, height }}
    >
      {/* 
        1) Final STATIC IMAGE 
           - Absolutely positioned, same shape & size 
           - We crossfade it IN while the particles fade OUT 
      */}
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover rounded-full"
        // Start invisible, animate to visible once showParticles = false
        initial={{ opacity: 0 }}
        animate={{ opacity: showParticles ? 0 : 1 }}
        transition={{ duration: 1 }}
      />

      {/* 
        2) PARTICLE LAYER 
           - Also absolutely positioned & sized the same 
           - Crossfade it OUT after assembleDuration 
      */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: showParticles ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <ParticleImage
          src={src}
          width={Math.round(width)}
          height={Math.round(height)}
          maxParticles={2000}
          backgroundColor="transparent"
          particleOptions={particleOptions}
          mouseMoveForce={forces.disturbance}
          touchMoveForce={forces.disturbance}
          scale={1}
        />
      </motion.div>
    </div>
  );
};

export default AssemblingParticleImage;
