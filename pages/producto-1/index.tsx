import styles from "styles/Producto-1.module.css";
import Image from "next/image";
import headerImage from "public/images/product-1-header.jpg";
import {
  producto_1_contenido,
  producto_1_data_structures,
  producto_1_operations,
  producto_1_referencias,
  producto_1_tipos,
} from "@/constants";
import { TextParagraph } from "@/components/text/TextParagraph";
import TextPoints from "@/components/text/TextPoints";
import { CardItem } from "@/components/card/CardItem";
import { Header } from "@/components/header/Header";
import Cite from "@/components/cite/Cite";
import Head from "next/head";

const producto_1 = () => {
  return (
    <>
      <Head>
        <title>JAMZ - Producto 1</title>
      </Head>

      <Header title="Producto 1" />

      {producto_1_contenido.map(({ title, content, image }, index) => {
        return (
          <TextParagraph
            title={title}
            content={content}
            url={image}
            key={index}
          />
        );
      })}

      {producto_1_tipos.map(({ title, content }, index) => {
        return <TextPoints title={title} content={content} key={index} />;
      })}

      <section className={styles.gridContainer}>
        {producto_1_data_structures.map(({ title, content, image }, index) => {
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

      <section className={styles.operationsContainer}>
        {producto_1_operations.map(({ title, content }, index) => {
          return (
            <TextParagraph
              title={title}
              content={content}
              url={""}
              key={index}
            />
          );
        })}
      </section>

      <section className={styles.referencesContainer}>
        <h3 className={styles.referencesTitle}>Referencias</h3>

        <ul className={styles.referencesList}>
          {producto_1_referencias.map(({ title, content, link }, index) => {
            return (
              <Cite key={index} title={title} content={content} link={link} />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default producto_1;
