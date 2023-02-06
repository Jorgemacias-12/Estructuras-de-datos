import { cleanURL } from "@/utils";
import React, { RefObject, useId, useRef } from "react";
import useNavigation from "react"
import styles from "styles/ContentList.module.css";

type contentListProps = {
  items: Array<any>;
};

export const ContentList = ({ items }: contentListProps) => {
  const GoToList = useId();

  const scrollToHeader = (event: React.MouseEvent<HTMLButtonElement>) => {

    window.history.pushState("", document.title, window.location.pathname)

    window.scrollTo(0, 0);
  };

  const goToArticle = (link: string) => {
    const route = cleanURL();

    window.location.href = route + link;
  };

  return (
    <section className={styles.container} id={GoToList}>
      <h2 className="subtitle">Lista de contenido</h2>

      <ul className={styles.listIndicator}>
        {items.map(({ title, link }, index) => {
          return (
            <li
              onClick={() => goToArticle(link)}
              className={styles.listItem}
              key={index}
            >
              <a className={styles.listLink} href={link}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>

      <section className={styles.scrollToTopContainer}>
        <i
          className={`fas fa-angle-up ${styles.scrollToTop}`}
          onClick={scrollToHeader}
        >
        </i>
      </section>
    </section>
  );
};
