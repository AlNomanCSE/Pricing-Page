import React from "react";
import styles from "./Section1.module.css";
type Props = {};

const Section1 = (props: Props) => {
  return (
    <section className={styles.section1}>
      <h1>
        Try Pulse free for <br />
        30 days.
      </h1>
      <p>
        See why Pulse is the best way to monitor your cash flow. Sign <br />
        up for any plan and try Pulse absolutely free for 30 days.
      </p>
    </section>
  );
};

export default Section1;
