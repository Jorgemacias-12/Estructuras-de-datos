import { Header } from "@/components/header/Header";
import styles from "styles/Producto-2.module.css";
import { producto_2_codigo, producto_2_operations } from "@/constants";
import { JEditor } from "@/components/editor/JEditor";
import { useState, useEffect } from "react";

const Producto_2 = () => {

  return (
    <div>
      <Header title="Producto 2" />

      <section className={styles.container}>
        <h2>Planteamiento</h2>

        <p className="text">
          El programa planteado para esta actividad se basa en la lista de
          compras de una persona en una tienda.
        </p>

        <p className="text">
          Las operaciones que realiza mi programa utilizando una lista son las
          siguientes:
        </p>

        <ul className={styles.operationsContainer}>
          {producto_2_operations.map((operation, index) => {
            return <li key={index}>{operation}</li>;
          })}
        </ul>

        <h3 className={styles.sectionTitle}>Previsualización del código:</h3>

        <JEditor data={producto_2_codigo} />
        <a className={styles.button} href="/code/JAMZ-TDA-ListaEstatica.py">
          Descargar código
        </a>
      </section>
    </div>
  );
};

export default Producto_2;
