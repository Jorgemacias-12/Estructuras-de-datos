import styles from "styles/TextPoints.module.css";

type TextPointsProps = {
  title: string;
  content: string;
};

const TextPoints = ({ title, content }: TextPointsProps) => {
  return (
    <ul className={styles.container}>
      <li className={styles.title}>{title}</li>
      <p className={styles.content}>{content}</p>
    </ul>
  );
};

export default TextPoints;
