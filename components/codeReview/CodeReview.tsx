import Editor from "@monaco-editor/react";
import { useState } from "react";
import styles from "styles/CodeReview.module.css";

type CodeReviewProps = {
  title: string;
  content: string[];
  code: string;
};

export const CodeReview = ({ title, content, code }: CodeReviewProps) => {
  const [visible, setVisible] = useState(false);

  const toggleView = () => {
    setVisible(!visible);
  };

  return (
    <article className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <section className={styles.contentContainer}>
        {content.map((text, index) => {
          return (
            <p
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text }}
              key={index}
            ></p>
          );
        })}
      </section>

      <button className={styles.toggleViewButton} onClick={toggleView}>
        {
          visible ? "Esconder código" : "Mostrar código"
        }
      </button>

      {visible && (
        <Editor
          width="100%"
          height="300px"
          language="python"
          theme="vs-dark"
          value={code}
          options={{ readOnly: true, fontFamily: "JetBrains Mono" }}
        />
      )}
    </article>
  );
};
