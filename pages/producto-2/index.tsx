import { Header } from "@/components/header/Header";
import styles from "styles/Producto-2.module.css";
import { CodeEvidences, downloadLink, producto_2_codigo, producto_2_operations, producto_2_referencias } from "@/constants";
import { JEditor } from "@/components/editor/JEditor";
import { CardItem } from "@/components/card/CardItem";

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

        <h3 className={styles.sectionTitle}>Evidencia</h3>

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

        <a className={styles.button} href={downloadLink}>
          Descargar código
        </a>

        {producto_2_referencias.map(({ title, content, link }, index) => {
          return (
            <li className={styles.referenceItem} key={index}>
              {title} {content}{" "}
              <a className={styles.referenceLink} href={link}>
                {link}
              </a>
            </li>
          );
        })}
      </section>
    </div>
  );
};

export default Producto_2;
