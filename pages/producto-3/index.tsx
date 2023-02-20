import { ContentList } from "@/components/contentList/contentList";
import { Header } from "@/components/header/Header";
import { Container } from "@/components/container/Container";
import { colaDownloadLink, producto_2_referencias, UA3_workList } from "@/constants";
import Head from "next/head";
import styles from "styles/Producto-3.module.css";
import { CodeViewer } from "@/components/codeViewer/codeViewer";
import Cite from "@/components/cite/Cite";
import { useEffect, useState } from "react";
import { JEditor } from "@/components/editor/JEditor";

export const Producto_3 = () => {
  
  const [code, setCode] = useState("");

  useEffect( () => {
    
    const fetchData = async () => {
      const cola = await fetch(colaDownloadLink).then((response) => response.text())

      setCode(cola);
    }

    fetchData();

  },[]);

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

            <section className={styles.container}>
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

            <CodeViewer code={code} />

            <hr className="separator separator-x" />
          </Container>
        );
      })}

      <h2 id="code" className={styles.infoTitle}>Código completo</h2>

      <CodeViewer code={code}/>

      <h2 id="info" className={styles.infoTitle}>Fuentes de información</h2>

      <Cite
        title={"UA3.- BÚSQUEDA Y ORDENAMIENTO"}
        content={"Recuperado el 20 de febrero de 2023, de"}
        link={
          "https://sites.google.com/academicos.udg.mx/drlizcano/il354-estructura-datos/ua3-b%C3%BAsqueda-y-ordenamiento?authuser=0"
        }
      />
    </>
  );
};

export default Producto_3;
