import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import Logo from "./Logo"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        sticky ? "bg-navy/90 shadow-lg backdrop-blur" : "bg-transparent"
      )}
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Logo />
        <DesktopNav />

        {/* Mobile Button */}
        <button
          className="lg:hidden text-off-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <MobileNav isOpen={mobileOpen} />
    </header>
  )
}
