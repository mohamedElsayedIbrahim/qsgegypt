import SiteLogo from '../../../assets/QSG-Egypt.webp'

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <img
        src={SiteLogo}
        alt="QSG Egypt"
        className="hidden dark:block h-30 w-auto"
      />
      <img
        src={SiteLogo}
        alt="QSG Egypt"
        className="block dark:hidden h-30 w-auto"
      />
    </a>
  )
}
