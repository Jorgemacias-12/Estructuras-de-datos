import styles from "styles/Index.module.css";
import LandingImage from "public/code.png";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>JAMZ - Portafolio </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <main className={styles.container}>
        <Image
          className={styles.landImage}
          unoptimized
          src={LandingImage}
          alt="Imagen de código como portada"
          priority
        />

        <section className={styles.overlay}>
          <p>Portafolio</p>
          <p>de</p>
          <p>Evidencias</p>
        </section>
      </main>
    </>
  );
}
