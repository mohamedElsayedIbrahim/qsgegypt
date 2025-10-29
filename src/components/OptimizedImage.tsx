import React, { useState } from "react"
import type { OptimizedImageProps } from "../interfaces/Components"


const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  placeholder,
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder && (
        <img
          src={placeholder}
          alt=""
          className={`absolute inset-0 blur-xl transition-opacity duration-500 ${
            loaded ? "opacity-0" : "opacity-100"
          }`}
        />
      )}
      <picture>
        <source srcSet={`${src}.avif`} type="image/avif" />
        <source srcSet={`${src}.webp`} type="image/webp" />
        <img
          src={`${src}.png`}
          alt={alt}
          onLoad={() => setLoaded(true)}
          className="relative w-full h-auto transition-opacity duration-300"
          loading="lazy"
        />
      </picture>
    </div>
  )
}

export default OptimizedImage
