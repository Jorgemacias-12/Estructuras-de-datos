import styles from "styles/Header.module.css"
import Image from "next/image"
import IMG from "public/images/product-1-header.jpg"

type HeaderProps = {
  title: string;
}

export const Header = ({title}: HeaderProps) => {
  return (
    <section className={styles.container}>
      <Image className={styles.image} src={IMG} alt="Header image"/>
      <h1 className={styles.title}>
        {title}
      </h1>
    </section>
  )
}
