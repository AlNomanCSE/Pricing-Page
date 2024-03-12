import React from "react";
import styles from "../Section2.module.css";
type Props = {};

const card2 = (props: Props) => {
  return (
    <article className={styles.article2}>
      <div>recommended</div>
      <h1>Small Business Plan</h1>
      <span>$59 per month</span>
      <button>Sign Up Now</button>
      <h5>You got plus basics, plus:</h5>
      <ul>
        <li>Manage cash flow across multiple financial accounts</li>
        <li>
          Invite your investors, book keeper, or management team to see reports
          or manage cash flow
        </li>
        <li>Integrate with QuickBooks Online for more accurate cash flow</li>
        <li>Track your actual cash flow alongside your projected cash flow</li>
      </ul>
    </article>
  );
};

export default card2;
