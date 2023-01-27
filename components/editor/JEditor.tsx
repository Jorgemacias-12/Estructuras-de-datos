import Editor from "@monaco-editor/react";
import styles from "styles/JEditor.module.css";

type JEditorProps = {
  data: string;
}

export const JEditor = ({data}: JEditorProps) => {

  return (
    <article className={styles.container} id="editor">
      <Editor
        width="100%"
        height="50vh"
        language="python"
        theme="vs-dark"
        value={data}
        options={{readOnly: true, fontFamily: 'JetBrains Mono'}}
      />
    </article>
  );
};
