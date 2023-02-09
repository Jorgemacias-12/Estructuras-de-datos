import { ContentList } from "@/components/contentList/contentList";
import { Header } from "@/components/header/Header";
import Head from "next/head";
import styles from "styles/Producto-2.module.css";

export const Producto_3 = () => {
  return (
    <>
      <Head>
        <title>JAMZ - Producto 3</title>
      </Head>

      <Header title="UA3-TDA Búsqueda y Ordenamiento" />

      <ContentList items={[{ title: "Si" }]} />

      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">Búsqueda lineal en estructura de datos</h2>
      </section>
      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">2</h2>
      </section>
      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">3</h2>
      </section>
      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">4</h2>
      </section>
      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">5</h2>
      </section>
      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">6</h2>
      </section>

      {/* 
      <section className={styles.container} id="lineal">
        <hr className="separator separator-x" />

        <h2 className="subtitle">1</h2>
      </section>

      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">2</h2>
      </section>

      <se className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">3</h2>

        <section className={styles.container}>
          <hr className="separator separator-x" />
          <h2 className="subtitle">4</h2>
        </section>

        <section className={styles.container}>
          <hr className="separator separator-x" />
          <h2 className="subtitle">5</h2>
        </section>
      </se                 ction>

      <section className={styles.container}>
        <hr className="separator separator-x" />
        <h2 className="subtitle">6</h2> */}
      {/* </section> */}
    </>
  );
};

export default Producto_3;
