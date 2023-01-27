import styles from "styles/CardItem.module.css"
import Image from "next/image"

type CardItemProps = {
  title: string,
  content: string,
  imageURL: string
}

export const CardItem = ({title, content, imageURL}: CardItemProps) => {
  return (
    <article className={styles.container}>
     
      <Image unoptimized={true} width={100} height={300} className={styles.image} src={imageURL} alt=""/>

      <section className={styles.contentContainer}>

        <h3 className={styles.title}>
          {title}
        </h3>

        <p className={styles.content}>
          {content}
        </p>

      </section>

    </article>
  )
}
