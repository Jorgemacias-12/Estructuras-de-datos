import Image from "next/image";
import styles from "styles/TextParagraph.module.css"

type TextParagraphProps = {
  title: string;
  content: string;
  url: string;
};

export const TextParagraph = ({ title, content, url }: TextParagraphProps) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <section className={styles.contentContainer}>
        {
          url !== '' ? <Image width={400} height={300} className={styles.image} src={url} alt={"imagen de apoyo"} /> : ""
        }
        <p className={styles.content}>{content}</p>
      </section>
    </section>
  );
};
