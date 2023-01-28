import styles from "styles/Header.module.css"
import Image from "next/image"
import IMG from "public/images/product-1-header.jpg"

type HeaderProps = {
  title: string;
}

export const Header = ({title}: HeaderProps) => {
  return (
    <section className={styles.container}>
      <Image unoptimized width="100"height="100" className={styles.image} src="./images/product-1-header.jpg" alt="Header image"/>
      <h1 className={styles.title}>
        {title}
      </h1>
    </section>
  )
}
