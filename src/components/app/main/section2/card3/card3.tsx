import React from "react";
import styles from "../Section2.module.css";
type Props = {};

const card3 = (props: Props) => {
  return (
    <article className={styles.article3}>
      <p>
        Complex business with multiple financial accounts, currencies, or
        auditing needs?
      </p>
      <div>
        <h1>Unlock Extra Features</h1>
        <span>$89 per month</span>
        <button>Try Premium</button>
        <h5>Get it all, plus</h5>
        <ul>
          <li>Manage cash flow across unlimited financial accounts</li>
          <li>
            Convert to any currency for localized cash flow reporting and
            projections
          </li>
          <li>
            Attach invoices or contracts to your cash flow entries for
            accountability and auditing
          </li>
        </ul>
      </div>
    </article>
  );
};

export default card3;
