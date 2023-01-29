import Editor from "@monaco-editor/react";
import styles from "styles/CodeReview.module.css";

type CodeReviewProps = {
  title: string;
  content: string[];
  code: string;
};

export const CodeReview = ({ title, content, code }: CodeReviewProps) => {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>{title}</h3>

      <section className={styles.contentContainer}>
        {
          content.map((text, index) =>{
            return <p className={styles.text} dangerouslySetInnerHTML={{__html: text}} key={index}></p>
          })
        }
      </section>

      <Editor
        width="100%"
        height="300px"
        language="python"
        theme="vs-dark"
        value={code}
        options={{ readOnly: true, fontFamily: "JetBrains Mono" }}
      />
    </article>
  );
};
