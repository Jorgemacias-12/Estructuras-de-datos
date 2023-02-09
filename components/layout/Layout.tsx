import React, { Fragment, ReactNode } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import styles from "styles/Layout.module.css"

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.appContainer}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
