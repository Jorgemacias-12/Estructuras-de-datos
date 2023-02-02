import { Header } from "@/components/header/Header";
import styles from "styles/Producto-2.module.css";
import {
  CodeEvidences,
  downloadLink,
  pilaDownloadLink,
  pila_codeCaptures,
  producto_2_codigo,
  producto_2_operations,
  producto_2_pila_operations,
  producto_2_referencias,
} from "@/constants";
import { JEditor } from "@/components/editor/JEditor";
import { CardItem } from "@/components/card/CardItem";
import { CodeReview } from "@/components/codeReview/CodeReview";
import Cite from "@/components/cite/Cite";
import Head from "next/head";
import { useEffect, useState } from "react";

const Producto_2 = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(pilaDownloadLink)
      .then((response) => response.text())
      .then((text) => setCode(text))
      .catch((err) => console.log(err));
  }, []);

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

        <h3 className={`${styles.sectionTitle} center-text`}>
          Previsualización del código y descarga:
        </h3>

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

        <h3 className={styles.sectionTitle}>Referencias</h3>

        {producto_2_referencias.map(({ title, content, link }, index) => {
          return (
            <Cite key={index} title={title} content={content} link={link} />
          );
        })}

        <hr className=" separator separator-x" />
      </section>

      <section className={styles.container} id="pila">
        <h2 className="subtitle">Pila Estática</h2>

        <p className="text text-subtitle">
          <b> Actividad de clase (TDA Pila estática):</b>
        </p>

        <p className="text">
          El alumno deberá ingresar una serie de elementos en una TDA pila
          estática y se aplicará las sigueintes operaciones utilizando el
          lenguaje de Python:
        </p>

        <h3 className="text-subtitle">Planteamiento</h3>

        <p className="text">
          Una persona tiene diferentes cantidades de dinero en su bolsillo,
          cartera y su cuenta de banco por lo que al querrer depositar/retirar
          dinero entre cuentas/lugar donde este el dinero.
        </p>

        <h3 className="text-subtitle">Operaciones:</h3>

        <section className={styles.operationsContainer}>
          {producto_2_pila_operations.map(({ title, content, code }, index) => {
            return (
              <CodeReview
                title={title}
                key={index}
                content={content}
                code={code}
              />
            );
          })}
        </section>

        <p className="info">
          <i className="fas fa-circle-info"></i>
          Más abajo se encuentran las evidencias de ejecución, en caso de que el código no funcione.
        </p>

        <p className={styles.warning}>
          Algunas partes del código aquí han sido ignoradas para evitar saturar la vista, si tiene problemás ejecutando el código. Haz una copia el código fuente más abajo o descargalo.
        </p>

        <h3 className={styles.sectionTitle}>Código fuente:</h3>

        <JEditor data={code} />

        <a href={pilaDownloadLink} className={styles.button}>
          Descargar código
        </a>

        <h3 className={styles.sectionTitle}>Capturas de ejecución</h3>

        <section className={styles.imagesContainer} id="capturas">
          {pila_codeCaptures.map(({ title, content, image }, index) => {
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

        <h3 className={styles.sectionTitle}>Referencias</h3>

        {producto_2_referencias.map(({ title, content, link }, index) => {
          return (
            <Cite title={title} content={content} link={link} key={index} />
          );
        })}

        <hr className="separator separator-x" />
      </section>
    </>
  );
};

export default Producto_2;
