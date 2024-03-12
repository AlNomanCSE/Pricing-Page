import Image from "next/image";
import styles from "./Section3.module.css";
import React from "react";

type Props = {};

const Section3 = (props: Props) => {
  return (
    <section className={styles.section3}>
      <Image
        src="/subvert-avatar.png"
        alt="image"
        width={300}
        height={300}
        className={styles.image}
      />
      <p className={styles.tagline}>
        “Pulse is worth every penny because it empowers business owners with
        critical financial insight and knowledge.”
      </p>
      <p className={styles.subtag}>SUBVERT MARKETING, INC.</p>
    </section>
  );
};

export default Section3;
