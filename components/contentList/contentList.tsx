import { cleanURL } from "@/utils";
import Link from "next/link";
import React, { useId } from "react";
import styles from "styles/ContentList.module.css";
import { useRouter } from "next/router";

type contentListProps = {
  items: Array<any>;
};

export const ContentList = ({ items }: contentListProps) => {
  const GoToList = useId();
  const url = cleanURL(useRouter().pathname);

  const scrollToHeader = (event: React.MouseEvent<HTMLButtonElement>) => {
    window.history.pushState("", document.title, window.location.pathname);

    // console.log("No deberia de fallar")

    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToArticle = (link: string) => {
    window.location.href = url + link;
    document
      .getElementById(link)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className={styles.container} id={GoToList}>
      <h2 className="subtitle">Lista de contenido</h2>

      <ul className={styles.listIndicator}>
        {items.map(({ title, link }, index) => {
          if (title == "") return;

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
        ></i>
      </section>
    </section>
  );
};
