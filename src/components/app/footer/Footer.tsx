import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.signup}>
        <Image
          src="pulse-logo.svg"
          alt="logo"
          width={300}
          height={300}
          className={styles.image}
        />
        <button>Sigh Up for a free 30-Day Trial</button>
      </div>
      <div className={styles.links}>
        <div>
          <h1>Product</h1>

          <a href="">Featires</a>
          <a href="">Pricing</a>
          <a href="">Sign Up</a>
        </div>
        <div>
          <h1>Company</h1>

          <a href="">Customer Stories</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <div>
          <h1>Resources</h1>

          <a href="">Support</a>
          <a href="">Blog</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
