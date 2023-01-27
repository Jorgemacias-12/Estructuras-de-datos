import { Trabajos } from "@/constants";
import styles from "styles/Menu.module.css";
import react, { AnimationEventHandler, useCallback, useEffect } from "react";
import { CheckIsDesktop } from "@/hooks/Desktop";
import React from "react";
import Link from "next/link";

type MenuProps = {
  IsVisible: boolean;
};

export const Menu = ({ IsVisible }: MenuProps) => {
  const IsDesktop = CheckIsDesktop();

  return (
    <section
      className={`${styles.container} ${!IsDesktop && styles.mobile} ${
        !IsDesktop && styles.hidden
      }`}
      data-visible={IsVisible}
    >
      <ul className={styles.menu}>
        {Trabajos.map((trabajo, index) => {
          return (
            <li key={index}>
              <Link className={styles.menuItem} href={trabajo.url}>
                {trabajo.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
