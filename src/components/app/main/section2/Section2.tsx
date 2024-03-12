import React from "react";
import styles from "./Section2.module.css";
import Card1 from "./card1/card1";
import Card2 from "./card2/card2";
import Card3 from "./card3/card3";
type Props = {};

const Section2 = (props: Props) => {
  return (
    <section className={styles.section2}>
      <Card1 />
      <Card2 />
      <Card3 />
    </section>
  );
};

export default Section2;
