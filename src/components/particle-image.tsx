import  { FC, useEffect, useState } from "react";
import ParticleImage, { forces, PixelOptions } from "react-particle-image";

/**
 * Props to mirror your usage:
 * - src: the image URL
 * - alt: alt text (optional)
 * - className: e.g. "w-40 h-40 md:w-56 md:h-56" for Tailwind sizing
 */
interface MyParticleImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const MyParticleImage: FC<MyParticleImageProps> = ({ src, alt, className = "" }) => {
  // We'll dynamically compute the (logical) width/height
  // based on your Tailwind classes so it behaves like your custom code.
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);

  // 1) Load the image once to determine aspect ratio & Tailwind-based width
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    
    img.onload = () => {
      let baseWidth = 200;
      // If your code uses w-40 / w-56, interpret them as pixel widths:
      if (className.includes("w-40")) baseWidth = 160;
      if (className.includes("w-56")) baseWidth = 224;

      const aspectRatio = img.width / img.height;
      const newWidth = baseWidth;
      const newHeight = newWidth / aspectRatio;

      setWidth(newWidth);
      setHeight(newHeight);
    };
  }, [src, className]);

  // 2) Setup filter & color callbacks. Note that `image` is NOT a Canvas context;
  //    it’s an Array2D<RGBA>. So use `image.get(x, y)` to read each pixel's RGBA.
  const particleOptions = {
    filter: ({ x, y, image }: PixelOptions) => {
      const { a } = image.get(x, y); // 'a' = alpha channel
      return a > 128;                // only include pixels with alpha > 128
    },
    color: ({ x, y, image }: PixelOptions) => {
      const { r, g, b, a } = image.get(x, y);
      return `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    },
    // random small circle size
    radius: () => Math.random() * 1.4 + 0.6,
  };

  return (
    <div
      className={className}
      style={{ width, height, position: "relative" }}
      aria-label={alt}
    >
      <ParticleImage
        src={src}
        width={Math.round(width)}     // must be an integer
        height={Math.round(height)}   // must be an integer
        maxParticles={2000}
        backgroundColor="transparent"
        particleOptions={particleOptions}
        // Add interactive forces on mouse/touch
        mouseMoveForce={forces.disturbance}
        touchMoveForce={forces.disturbance}
        // scale = 1 to match the computed width/height
        scale={1}
      />
      {/* 
        If you want an actual <img> for SEO or accessibility, you can put 
        one behind or hidden. For instance:

        <img
          src={src}
          alt={alt}
          style={{ 
            position: "absolute",
            width: "100%", 
            height: "100%", 
            top: 0, left: 0,
            opacity: 0 
          }}
        />
      */}
    </div>
  );
};

export default MyParticleImage;
