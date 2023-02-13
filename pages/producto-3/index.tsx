import { ContentList } from "@/components/contentList/contentList";
import { JEditor } from "@/components/editor/JEditor";
import { Header } from "@/components/header/Header";
import { Container } from "@/components/container/Container";
import { UA3_workList } from "@/constants";
import Editor from "@monaco-editor/react";
import Head from "next/head";
import styles from "styles/Producto-3.module.css";

export const Producto_3 = () => {
  return (
    <>
      <Head>
        <title>JAMZ - Producto 3</title>
      </Head>

      <Header title="UA3-TDA Búsqueda y Ordenamiento" />

      <ContentList items={UA3_workList} />

      {UA3_workList.map(({ title, content, images, code, link }, index) => {
        return (
          <Container key={index} identity={link}>
            <h2 className="subtitle">{title}</h2>

            {content.map((text, index) => {
              return (
                <p
                  className={styles.text}
                  key={index}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></p>
              );
            })}

            <Editor
              height="350px"
              language="python"
              theme="vs-dark"
              value={code}
              options={{ readOnly: true, fontFamily: "JetBrains Mono" }}
            />

            <hr className="separator separator-x" />
          </Container>
        );
      })}
    </>
  );
};

export default Producto_3;
