import React from "react";
import styles from "styles/SocialNetwork.module.css";

type SocialNetworkProps = {
  name: string;
  iconClass: string;
  url: string;
};

export const SocialNetwork = ({ name, iconClass, url }: SocialNetworkProps) => {
  return (
    <div className={styles.container}>
      <i className={`${iconClass} ${styles.icon}`}></i>
      <a href={url} rel="noreferrer" className={styles.name} target="_blank">
        {name}
      </a>
    </div>
  );
};
