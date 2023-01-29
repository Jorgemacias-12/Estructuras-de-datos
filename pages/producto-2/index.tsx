import { Header } from "@/components/header/Header";
import styles from "styles/Producto-2.module.css";
import {
  CodeEvidences,
  downloadLink,
  producto_2_codigo,
  producto_2_operations,
  producto_2_referencias,
} from "@/constants";
import { JEditor } from "@/components/editor/JEditor";
import { CardItem } from "@/components/card/CardItem";
import { CodeReview } from "@/components/codeReview/CodeReview";
import Cite from "@/components/cite/Cite";
import Head from "next/head";

const Producto_2 = () => {
  return (
    <>
      <Head>
        <title>JAMZ - Producto 2</title>
      </Head>

      <Header title="UA2-TDA ESTÁTICAS" />

      <section className={styles.container}>
        <h2 className="subtitle">LISTA ESTATICA</h2>

        <p className="text text-subtitle">
          <b>ACTIVIDAD DE CLASE (TDALISTA ESTATICA):</b>
        </p>

        <p className="text">
          El alumno deberá ingresar una serie de elementos en una lista estática
          y aplicará las siguientes operaciónes utilizando el lenguaje python.
        </p>

        <h3 className="text-subtitle">Planteamiento:</h3>

        <p className="text">
          En este programa me base en un supermercado, donde la persona tiene un
          carrito de compras donde va depositando los productos.
        </p>

        <h3 className="text-subtitle">Operaciones:</h3>

        <section className={styles.operationsContainer}>
          {producto_2_operations.map(({ title, content, code }, index) => {
            return (
              <CodeReview
                title={title}
                content={content}
                code={code}
                key={index}
              />
            );
          })}
        </section>

        <h3 className={`${styles.sectionTitle} center-text`}>Previsualización del código y descarga:</h3>

        <JEditor data={producto_2_codigo} />

        <p className={styles.warning}>
          El código tiene como dependencia la libreria <kbd>colorama</kbd>, si
          el programa falla al ejecutarse, puedes instalar la libreria
          utilizando el siguiente comando:
          <kbd>pip install colorama</kbd>
        </p>

        <a className={styles.button} href={downloadLink}>
          Descargar código
        </a>

        <h3 className={styles.sectionTitle}>Capturas de Ejecución:</h3>

        <section className={styles.imagesContainer}>
          {CodeEvidences.map(({ title, content, image }, index) => {
            return (
              <CardItem
                title={title}
                content={content}
                imageURL={image}
                key={index}
              />
            );
          })}
        </section>

        <hr className=" separator separator-x" />

        <h3 className={styles.sectionTitle}>Referencias</h3>

        {producto_2_referencias.map(({ title, content, link }, index) => {
          return (
            <Cite key={index} title={title} content={content} link={link} />
          );
        })}
      </section>
    </>
  );
};

export default Producto_2;
