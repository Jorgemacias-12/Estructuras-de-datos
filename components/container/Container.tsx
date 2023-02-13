import React, { ReactNode } from "react";
import styles from "styles/Container.module.css";

type ContainerProps = {
  identity: string;
  children: ReactNode;
};

export const Container = ({identity, children}: ContainerProps) => {
  return (
    <article className={styles.container} id={identity}>
      {children}
    </article>
  )
};
