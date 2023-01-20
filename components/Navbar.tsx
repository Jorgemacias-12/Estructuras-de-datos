import { Trabajos } from "@/constants";
import { CheckIsDesktop } from "@/hooks/Desktop";
import Image from "next/image";

import styles from "styles/Navbar.module.css";


// TODO: Agregar enlaces al trabajo en cuestion
export const Navbar = () => {
  const IsDesktop = CheckIsDesktop();

  return (
    <nav className={`container center-y ${styles.navigation}`}>
      <section className={`container center-y ${styles.brand}`}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Escudo_UdeG.svg"
          width={32}
          height={40}
          alt="Logo Universidad de Guadalajara"
          priority
        />

        <h1 className={styles.title}>Estructuras de datos</h1>
      </section>

      <ul className={styles.menu}>
        {Trabajos.map((trabajo, index) => {
          return (
            <li key={index}>
              <a className={styles.menuItem} href="#">
                {trabajo}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
