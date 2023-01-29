import styles from "styles/Cite.module.css"

type CiteProps = {
  title: string,
  content: string,
  link: string
}

export const Cite = ({title, content, link}: CiteProps) => {
  return (
    <>
      <li className={styles.referenceItem}>
        {title} {content} <a className={styles.referenceLink} rel="noopener noreferrer" target="_blank" href={link}>{link}</a>
      </li>
    </>
  )
}

export default Cite
