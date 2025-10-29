import { ChevronDown } from "lucide-react"
import { navLinks } from "../../../static/navLinks"

export default function DesktopNav() {
  return (
    <nav className="hidden lg:flex gap-8">
      {navLinks.map((item) => (
        <div key={item.label} className="relative group">
          <a
            href={item.href}
            onClick={(e) => item.submenu && e.preventDefault()}
            className="text-off-white hover:text-gold font-medium flex items-center gap-1"
          >
            {item.label}
            {item.submenu && <ChevronDown size={16} />}
          </a>

          {/* Dropdown */}
          {item.submenu && (
            <div className="absolute top-full left-0 bg-light-navy shadow-lg rounded-lg mt-2 hidden group-hover:block min-w-[220px]">
              {item.submenu.map((sub) => (
                <a
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-2 text-off-white hover:bg-navy hover:text-gold transition"
                >
                  {sub.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

