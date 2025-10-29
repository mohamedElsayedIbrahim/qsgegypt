import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import clsx from "clsx"
import { navLinks } from "../../../static/navLinks"

interface MobileNavProps {
  isOpen: boolean
}

export default function MobileNav({ isOpen }: MobileNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label))
  }

  if (!isOpen) return null

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:hidden bg-navy border-t border-light-navy"
    >
      <ul className="flex flex-col p-4 space-y-2">
        {navLinks.map((item) => (
          <li key={item.label}>
            {item.submenu ? (
              <>
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="w-full flex justify-between items-center text-off-white py-2 text-left"
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className={clsx(
                      "transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )}
                  />
                </button>
                {activeDropdown === item.label && (
                  <div className="pl-4">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block py-2 text-medium-gray hover:text-gold"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={item.href}
                className="block py-2 text-off-white hover:text-gold"
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
