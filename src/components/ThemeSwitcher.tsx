import { $theme } from "@/stores/theme";
import { useStore } from "@nanostores/react";

export const ThemeSwitcher = () => {
  const theme = useStore($theme);

  const handleThemeChange = () => {
    $theme.set(
      $theme.get() === 'light' ? 'dark' : 'light'
    );
  }

  const commonIconClasses = "fas fa-md fa-fw";

  return (
    <button
      title="Theme switcher"
      type="button"
      onClick={handleThemeChange}
      className={`inline-flex rounded-2xl w-16 relative h-8 border border-gray-500`}
    >
      <span
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out ${commonIconClasses} ${
          theme === 'dark' ? 'translate-x-9 fa-sun text-yellow-300' : 'translate-x-1 fa-moon '
        }`}
      ></span>
    </button>
  );
};
