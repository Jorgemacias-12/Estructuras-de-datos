import { getI18N } from "@/i18n";
import { $theme } from "@/stores/theme";
import { buildURL } from "@/utils";
import { useStore } from "@nanostores/react";
import { useState } from "react";

interface ActivityProps {
  id: string
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  currentLocale: string;
}

export const Activity = ({ id, title, description, pubDate, updatedDate, heroImage, currentLocale }: ActivityProps) => {
  const [isDescriptionOpen, setIsOpenDescription] = useState(false);

  const handleOpenDescription = () => {
    setIsOpenDescription(!isDescriptionOpen);
  }

  const theme = useStore($theme);

  const { ACTIVITIES_PAGE_CALL_TO_ACTION, ACTIVITY_LINK_CAPTION } = getI18N({ currentLocale });

  const containerDefaultClassNames = "flex flex-col items-center rounded-lg border p-2 gap-2 self-start";
  const containerDarkClassNames = "border-raisin-black-600 bg-raisin-black-400";
  const containerLightClassNames = "bg-white-smoke-700";

  const descriptionCommonClassNames = "overflow-hidden flex flex-col transition-all duration-300 gap-2";
  const descriptionEnabledClassNames = "h-auto opacity-100";
  const descriptionDisabledClassNames = "h-0 opacity-0";

  return (
    <article className={`${containerDefaultClassNames} ${theme === 'light' ? containerLightClassNames : containerDarkClassNames}`}>
      <img className="rounded-md w-full" width={300} src={heroImage} alt="article image header" />
      <h3 className="text-center text-xl font-semibold mt-2 px-2">{title}</h3>

      <section className="text-white w-full flex gap-2 p-2 items-center justify-between">
        <a
          className="w-1/2 text-center bg-indigo-500 p-2 rounded-md hover:bg-primary-200 transition"
          href={buildURL(currentLocale!, id, 'activities')}
        >{ACTIVITIES_PAGE_CALL_TO_ACTION}</a>

        <button
          onClick={handleOpenDescription}
          className="w-1/2 border-none bg-indigo-500 p-2 rounded-md hover:bg-primary-200 transition active:bg-indigo-600"
        >{ACTIVITY_LINK_CAPTION}</button>
      </section>

      <section className={`${descriptionCommonClassNames} ${isDescriptionOpen ? descriptionEnabledClassNames : descriptionDisabledClassNames}`}>
        <p className="text-balance text-center">{description}</p>
        <div className="flex justify-between">
          <p className="rounded-md p-2 bg-indigo-200 text-indigo-800">created:    {pubDate.toLocaleDateString()}</p>
          {updatedDate && <p className="rounded-md p-2 bg-teal-200 text-teal-800">updated: {updatedDate?.toLocaleDateString()}</p>}
        </div>
      </section>
    </article>
  )
}
