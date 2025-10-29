import { useState, useEffect } from "react"
import BannerSlide from "../../../components/banner/BannerSlide"
import { AnimatePresence, motion } from "framer-motion"
import VideoApp from "../../../assets/egypt.mp4"

const slides = [
  {
    videoSrc: VideoApp,
    title: " Quality services group (QSG) 1997",
    buttonText: "About Us",
    buttonLink: "#",
  },
  // Add more slides here if needed
]

export default function Banner() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000) // autoplay every 6s
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <BannerSlide {...slides[current]} />
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-gold" : "bg-off-white/50"
            } transition-all`}
          />
        ))}
      </div> */}
    </section>
  )
}
