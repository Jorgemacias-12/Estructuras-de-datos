import { $lang } from "@/stores/lang"
import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react"
import { useState } from "react";

export const LangSelector = () => {
  const lang = useStore($lang);
  const theme = useStore($theme);
  const [openMenu, setOpenMenu] = useState(false);

  const supportedLangs = [
    {
      name: "English",
      flagURL: "https://flagsapi.com/US/flat/32.png",
      code: "us"
    },
    {
      name: "Spanish",
      flagURL: "https://flagsapi.com/MX/flat/32.png",
      code: "es"
    },
  ]

  const containerClassNames = "flex relative transition-all duration-300 border border-raisin-black-600 rounded-md w-full md:w-fit";
  const light = "bg-white-smoke-600";
  const dark = "bg-raisin-black border-raisin-black";

  const flagsContainerClassNames = "absolute top-12 border border-raisin-black-600 p-2 right-0 bg-raisin-black w-32 rounded-md duration-300 transition-all";

  const updateLang = (lang: string) => {
    $lang.set(lang);
  }

  const handleShowMenu = () => {
    setOpenMenu(!openMenu);
  }

  const langContainerHiddenClasses = "pointer-events-none opacity-0 translate-y-0";
  const langContainerShownClasses = "opacity-100 translate-y-[1rem]";

  // TODO: Refact this to improve the data structure and do not have to do this
  const flag = lang === 'ES' ? "MX" : lang;

  return (
    <section className={`${containerClassNames} `}>
      <button type="button" className="h-full flex items-center justify-between gap-2 hover:bg-raisin-black-600 p-1 w-full" onClick={handleShowMenu}>
        <div className="flex items-center gap-2">
          
          <img src={`https://flagsapi.com/${flag}/flat/32.png`} alt="lang code flag" />
          {lang}
        </div>
        <span className={`duration-300 transition-all inline-flex fas fa-angle-left ${openMenu ? '-rotate-90' : 'rotate-0'}`}></span>
      </button>

      <div className={`${flagsContainerClassNames} ${openMenu ? langContainerShownClasses : langContainerHiddenClasses}`}>
        {
          supportedLangs.map(({ name, flagURL, code }, index) => {
            return <button key={index} className="flex w-full items-center gap-2 hover:bg-raisin-black-600" onClick={() => { handleShowMenu(); updateLang(code.toUpperCase()) }}>
              <img src={flagURL} alt="lang code flag" />
              {name}
            </button>
          })
        }
      </div>
    </section>
  )
}
