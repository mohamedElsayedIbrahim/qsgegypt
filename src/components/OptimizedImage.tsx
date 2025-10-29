import React, { useState } from "react"
import type { OptimizedImageProps } from "../interfaces/Components"

/**
 * Optimized, responsive, modern image component
 * - Auto selects AVIF / WebP / PNG
 * - Supports responsive sizes and blur placeholder
 * - Lazy loads for better performance
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  placeholder,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      {/* Optional blur placeholder */}
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          className={`absolute inset-0 blur-xl scale-105 transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}

      <picture>
        {/* AVIF - smallest size, highest compression */}
        <source
          srcSet={`${src}-480.avif 480w, ${src}-768.avif 768w, ${src}-1080.avif 1080w`}
          type="image/avif"
          sizes={sizes}
        />
        {/* WebP fallback */}
        <source
          srcSet={`${src}-480.webp 480w, ${src}-768.webp 768w, ${src}-1080.webp 1080w`}
          type="image/webp"
          sizes={sizes}
        />
        {/* PNG/JPG fallback */}
        <img
          src={`${src}-1080.png`}
          srcSet={`${src}-480.png 480w, ${src}-768.png 768w, ${src}-1080.png 1080w`}
          sizes={sizes}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </picture>
    </div>
  )
}

export default OptimizedImage
