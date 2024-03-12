import Link from "next/link";
import React from "react";
import styles from "../Section2.module.css";
type Props = {};

const card1 = (props: Props) => {
  return (
    <article className={styles.article1}>
      <h1>
        These are what we call the Pulse Basics. They’re what every customer
        gets.
      </h1>
      <ul>
        <li>Manage cash flow on a daily, weekly, monthly, or yearly basis</li>
        <li>
          Forecast growth with recurring income or expenses that scale
          automatically
        </li>
        <li>Works with any currency</li>
        <li>
          See Money In and Money Out, categorize transactions, and run helpful
          reports
        </li>
        <li>
          Toggle entries and accounts on and off to game out different scenarios
        </li>
      </ul>
      <p>
        Just need the Pulse Basics? <Link href="">Get them now</Link> for $29
        per month.
      </p>
    </article>
  );
};

export default card1;
