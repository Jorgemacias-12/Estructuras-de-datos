import styles from "styles/Footer.module.css";
import { RedesSociales } from "@/constants";
import { SocialNetwork } from "./SocialNetwork";
import { CheckIsDesktop } from "@/hooks/Desktop";

export const Footer = () => {
  const IsDesktop = CheckIsDesktop();

  return (
    <footer className={`container center-y ${styles.footer}`}>
      <h2 className={styles.title}>Hecho con ❤️ por JAMZ</h2>

      <hr
        className={
          IsDesktop ? "separator separator-y" : "separator separator-x"
        }
      />

      <p> &copy; {new Date().getFullYear()} Jorge Macias</p>

      <hr
        className={
          IsDesktop ? "separator separator-y" : "separator separator-x"
        }
      />

      <section className={styles.socialNetworks}>
        <h3>Redes sociales</h3>

        {RedesSociales.map((socialNetwork, index) => {
          return (
            <SocialNetwork
              name={socialNetwork.name}
              iconClass={socialNetwork.iconClass}
              url={socialNetwork.url}
              key={index}
            />
          );
        })}
      </section>
    </footer>
  );
};
