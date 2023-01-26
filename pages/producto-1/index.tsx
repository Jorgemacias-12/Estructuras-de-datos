import styles from "styles/Producto-1.module.css";
import Image from "next/image";
import headerImage from "public/images/product-1-header.jpg";
import { producto_1_contenido, producto_1_tipos } from "@/constants";
import { TextParagraph } from "@/components/text/TextParagraph";
import TextPoints from "@/components/text/TextPoints";

const producto_1 = () => {
  return (
    <>
      <section className={styles.header}>
        <Image
          src={headerImage}
          className={styles.image}
          alt="gradiente de colores para el fondo"
        />
        <h1 className={styles.title}>Producto 1</h1>
      </section>

      {
        producto_1_contenido.map(({ title, content, image }, index) => {
          return (
            <TextParagraph
              title={title}
              content={content}
              url={image}
              key={index}
            />
          );
        })
      }

      {producto_1_tipos.map(({ title, content }, index) => {
        return <TextPoints title={title} content={content} key={index} />;
      })}
    </>
  );
};

export default producto_1;
