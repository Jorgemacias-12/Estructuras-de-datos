import { Trabajos } from "@/constants";
import { CheckIsDesktop } from "@/hooks/Desktop";
import Image from "next/image";
import { createRef, useState } from "react";

import styles from "styles/Navbar.module.css";
import { Menu } from "./Menu";

// TODO: Agregar enlaces al trabajo en cuestion
export const Navbar = () => {
  const IsDesktop = CheckIsDesktop();

  const [togglerClass, setVisible] = useState(false);

  const openMenu = () => {
    setVisible(!togglerClass);
  };

  return (
    <nav
      className={`container center-y ${styles.navigation} ${
        togglerClass && styles.mobile
      }`}
    >
      <section className={`container ${styles.brandContainer}`}>
        <section className={`container center ${styles.brand}`}>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Escudo_UdeG.svg"
            width={32}
            height={40}
            alt="Logo Universidad de Guadalajara"
            priority
          />

          <h1 className={styles.title}>Estructuras de datos</h1>
        </section>

        {!IsDesktop && (
          <i
            onClick={openMenu}
            className={`${styles.menuToggler} fas fa-${
              togglerClass ? "times" : "bars"
            }`}
          ></i>
        )}
      </section>

      {IsDesktop ? (
        <Menu IsVisible={false} />
      ) : (
        <Menu IsVisible={togglerClass} />
      )}
    </nav>
  );
};
