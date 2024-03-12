"use client";
import React, { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header>
      <nav className={styles.navbar}>
        <Image
          src="pulse-logo.svg"
          alt="logo"
          width={300}
          height={300}
          className={styles.image}
        />
        <div className={styles.menuButton} onClick={handleMenu}>
          {isMenuOpen ? <RxCross2 /> : <IoMenu />}
        </div>
        <div
          className={
            isMenuOpen
              ? `${styles.navlink} ${styles.active}`
              : `${styles.navlink}`
          }
        >
          <Link href="">Features</Link>
          <Link href="">Customer</Link>
          <Link href="">Pricing</Link>
          <Link href="">Blog</Link>
          <button>Sign Up</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
