import { $theme } from '@/stores/theme'
import { useStore } from '@nanostores/react'
import { useState, type MouseEvent } from 'react'
import { getI18N } from '@/i18n'
import { ThemeSwitcher } from './ThemeSwitcher'
import { Link } from './Link'
import type { Link as LinkT } from '@/types'
interface Props {
  lang: string
}

export const Header = ({ lang }: Props) => {
  const theme = useStore($theme)
  const [showMenu, setShowMenu] = useState(false)

  const menuHiddenClasses = 'pointer-events-none opacity-0 translate-x-[1rem]'
  const menuShownClasses = 'opacity-100 translate-x-0 pointer-events-auto'

  const menuBackgroundSolid =
    theme === 'light'
      ? 'bg-white'
      : 'bg-bunker-900 border-b border-black_rain-600'

  const handleMenuShow = () => {
    setShowMenu((prev) => !prev)
  }

  const handleMenuHide = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target != event.currentTarget) return

    setShowMenu(false)
  }

  const { COMPONENTS } = getI18N(lang)
  const { HEADER } = COMPONENTS
  const { HEADER_MENU_CAPTION, LINKS } = HEADER

  return (
    <header
      className={`h-16 fixed flex justify-center w-full ${menuBackgroundSolid} border-b`}
    >
      <section
        className={`flex w-full h-16 justify-between p-2 max-w-screen-lg px-4 ${menuBackgroundSolid} w-full border-b`}
      >
        <section className="flex items-center gap-2">
          <span className="fas fa-graduation-cap"></span>
          <h1>Estructuras de datos</h1>
        </section>

        <section className="flex items-center gap-2 md:hidden">
          <ThemeSwitcher />

          <button type="button" onClick={handleMenuShow}>
            <span className="fas fa-bars fa-xl"></span>
          </button>
        </section>

        {/* Mobile */}

        <nav
          onClick={handleMenuHide}
          className={`fixed top-0 right-0 w-full h-full flex flex-col gap-1 z-10 transition-all duration-300 transform-cpu bg-black/50 ${
            showMenu ? menuShownClasses : menuHiddenClasses
          }`}
        >
          <section
            className={`flex fle items-center justify-between p-4 ${menuBackgroundSolid}`}
          >
            <h2 className="transition-none">{HEADER_MENU_CAPTION as string}</h2>

            <div className="flex gap-2 items-center">
              <ThemeSwitcher />

              <button
                title="Close navigation button (mobile)"
                type="button"
                onClick={handleMenuShow}
              >
                <span className="fas fa fa-xl fa-fw fa-times md:hidden gap-2"></span>
              </button>
            </div>
          </section>

          <ul className={`m-4 p-2 rounded-md ${menuBackgroundSolid}`}>
            {(LINKS as LinkT[]).map(({ title, url }, index) => {
              return <Link key={index} label={title} url={url} />
            })}
          </ul>
        </nav>

        {/* Desktop */}

        <nav className="hidden md:flex md:items-center md:gap-1">
          <ThemeSwitcher />
          
          <ul className="flex h-full">
            {(LINKS as LinkT[]).map(({ title, url }, index) => {
              return <Link key={index} label={title} url={url} />
            })}
          </ul>
        </nav>
      </section>
    </header>
  )
}
