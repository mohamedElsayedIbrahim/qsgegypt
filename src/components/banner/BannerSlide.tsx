import { motion } from "framer-motion"
import type { BannerSlideProps } from "../../interfaces/Components"



export default function BannerSlide({
  videoSrc,
  title,
  buttonText,
  buttonLink,
}: BannerSlideProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/40 backdrop-blur-[1px]" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-off-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8"
        >
          <a
            href={buttonLink}
            className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 py-3 rounded-full shadow-md transition-all"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>
    </div>
  )
}
