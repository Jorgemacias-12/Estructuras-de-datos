import styles from "@/styles/CodeViewer.module.css";
import Editor from "@monaco-editor/react";
import { useState } from "react";

type CodeViwerProps = {
  code: string;
};

export const CodeViewer = ({ code }: CodeViwerProps) => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <section className={styles.container}>
      <button onClick={toggle} className={styles.button}>
        {visible ? "Esconder código" : "Mostrar código"}
      </button>

      {visible && (
        <Editor
          width="100%"
          height="50vh"
          language="python"
          theme="vs-dark"
          value={code}
          options={{ readOnly: true, fontFamily: "JetBrains Mono" }}
        />
      )}
    </section>
  );
};
