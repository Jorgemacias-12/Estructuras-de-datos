import { Header } from "@/components/header/Header";
import styles from "styles/Producto-2.module.css";
import { CodeEvidences, downloadLink, producto_2_codigo, producto_2_operations, producto_2_referencias } from "@/constants";
import { JEditor } from "@/components/editor/JEditor";
import { CardItem } from "@/components/card/CardItem";
import { CodeReview } from "@/components/codeReview/CodeReview";

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

        <h3 className={styles.sectionTitle}>Código completo:</h3>

        <JEditor data={producto_2_codigo} />
        
        <p className={styles.warning}>
          El código tiene como dependencia la libreria <kbd>colorama</kbd>, si el programa falla al ejecutarse, puedes instalar la libreria utilizando el siguiente comando: 
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
            <ul key={index}>
              <li className={styles.referenceItem}>
                {title} {content}{" "}
                <a className={styles.referenceLink} href={link}>
                  {link}
                </a>
              </li>
            </ul>
          );
        })}
      </section>
    </div>
  );
};

export default Producto_2;
