import { $theme } from "@/stores/theme"
import { useStore } from "@nanostores/react"
import { useState } from "react";
import { getI18N } from "@/i18n";

const lang = getI18N({ currentLocale: "" })
const { HEADER_LINKS } = lang

export const Header = () => {
  const theme = useStore($theme);

  const headerDarkClassNames = "bg-raisin-black border-b border-raisin-black-600 ";
  const headerLightClassNames = "bg-raisin-black text-white";
  const headerCommmonClassNames = "relative flex justify-between h-full mx-auto mx-auto max-w-screen-xl p-2 items-center";

  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setshowMobileMenu(!showMobileMenu);
  }

  const showMenuClassNames = "pointer-events-auto scale-100 translate-y-0 opacity-100 mt-0.5";
  const hideMenuClassNames = "pointer-events-none scale-80 translate-y-[-1rem] opacity-0";
  const menuDefaultClasses = "border border-raisin-black-600 transition-all duration-300 z-50 bg-raisin-black rounded-md h-fit p-4 absolute top-16 right-0 mr-2 md:bg-transparent md:static md:translate-y-0 md:opacity-100 md:pointer-events-auto md:border-0";

  return (
    <header className={`h-16 px-2 ${theme === 'light' ? headerLightClassNames : headerDarkClassNames}`}>
      <section className={`${headerCommmonClassNames}`}>
        <section className="flex items-center h-full gap-2">
          <img
            alt="Logo Universidad de Guadalajara"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Escudo_UdeG.svg"
            width="32"
            height="40"
            className="aspect-square"
          />
          <h1>Estructuras de datos</h1>
        </section>

        <button onClick={toggleMobileMenu} className="md:hidden">
          <span className="fas fa-bars fa-dw text-white fa-xl"></span>
        </button>

        <nav className={`${menuDefaultClasses} ${showMobileMenu ? showMenuClassNames : hideMenuClassNames}`}>
          <ul className="flex gap-2 flex-col md:flex-row items-center h-full">
            {
              HEADER_LINKS.map(({ title, url }, index) => {
                return <li key={index}>
                  <a href={url} className="transition-all duration-300 flex cursor-pointer hover:bg-raisin-black-600 h-full p-2 rounded-md w-full">
                    {title}
                  </a>
                </li>
              })
            }
          </ul>
        </nav>
      </section>
    </header>
  )
}
