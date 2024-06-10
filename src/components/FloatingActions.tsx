import { useStore } from '@nanostores/react';
import { $theme } from '../stores/theme'; 
import { ThemeSwitcher } from './ThemeSwitcher';
import { useCallback, useEffect, useState } from 'react';

export const FloatingActions = () => {
  const FIXED_SCROLL_THRESHOLD = 40;

  const theme = useStore($theme);
  const [useFixedActions, setuseFixedActions] = useState(false);

  const scrollToTop = () => {
    if (!window) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFixedFloatingActions = useCallback(() => {
    if (!window) return
    const scrollOverpassed = window.scrollY > FIXED_SCROLL_THRESHOLD;
    setuseFixedActions(scrollOverpassed);
  }, []);


  useEffect(() => {
    addEventListener('scroll', updateFixedFloatingActions);

    return () => {
      removeEventListener('scroll', updateFixedFloatingActions);
    }
  }, [])

  const showFixedActions = useFixedActions ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  const light = "bg-white-smoke-500 border";
  const dark = "bg-raisin-black border border-raisin-black-600";

  return (
    <section className={`fixed right-4 bottom-4 flex items-center border gap-4 p-2 z-10 rounded-md ${theme === 'light' ? light : dark} ${showFixedActions}`}>
      <ThemeSwitcher />
      <button onClick={scrollToTop} className="w-10 h-10 bg-indigo-500 rounded-full" aria-label="Volver al principio">
        <span className="fas fa-arrow-up text-white fa-fd fa-lg"></span>
      </button>
    </section>
  );
};