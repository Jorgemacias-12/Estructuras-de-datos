import React from "react";
import styles from "styles/NotFound.module.css";

const notFound = () => {
  return (
    <article className={styles.container}>
      <section className={styles.messageContainer}>
        <i className={`fa-solid fa-circle-xmark ${styles.icon}`}></i>
        <h1 className={styles.message}>Error obteniendo la ruta</h1>
      </section>
    </article>
  );
};

export default notFound;
