export default function Logo() {
  return (
    <a href="https://www.domeint.com" className="flex items-center gap-2">
      <img
        src="https://www.domeint.com/data/logo/logo/dome-logo.png"
        alt="Dome International"
        className="hidden dark:block h-10 w-auto"
      />
      <img
        src="https://www.domeint.com/data/logo/logo/dome-logo-white.png"
        alt="Dome International"
        className="block dark:hidden h-10 w-auto"
      />
    </a>
  )
}
