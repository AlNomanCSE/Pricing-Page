import React from "react";
import styles from "./Section4.module.css";
type Props = {};

const Section4 = (props: Props) => {
  return (
    <section className={styles.section4}>
      <h1>FAQ</h1>
      <div>
        <article>
          <header>
            <h2>How does the 30-day free trial work?</h2>
            <p>
              You can use Pulse absolutely free for 30 days. After 30 days, we
              will charge the credit card you used when you sign up. If you
              choose to cancel your account before your trial ends, your card
              will not be charged.
            </p>
          </header>
        </article>
        <article>
          <header>
            <h2>
              If I upgrade an existing account, do I get another free trial?
            </h2>
            <p>
              Brand new accounts are the only ones eligible for a 30-day free
              trial. If you upgrade an existing account, your credit card will
              be billed the new amount on the date of your next billing cycle.
            </p>
          </header>
        </article>
        <article>
          <header>
            <h2>What is a “Financial Account”?</h2>
            <p>
              Financial Accounts are a grouping of income and expense items that
              can be used for tracking or reporting purposes. <br /> <br />
              They’re designed to be flexible and can be used to differentiate
              between bank accounts, companies, individuals or between personal
              and business entries.
            </p>
          </header>
        </article>
        <article>
          <header>
            <h2>Do I have to commit to a long-term contract?</h2>
            <p>
              No. There is no contract when you use Pulse, other than agreeing
              to our Terms of Service.
            </p>
          </header>
        </article>
        <article>
          <header>
            <h2>Will I be able to cancel my account if I don’t use Pulse?</h2>
            <p>
              Yes – you can cancel your account at any time. To cancel your
              account, go to your billing page and click on “Please cancel my
              account” at the bottom of the page. The account owner is the only
              one who can cancel an account. An email request to delete an
              account is not considered cancellation.
            </p>
          </header>
        </article>
        <article>
          <header>
            <h2>What types of payments do you accept?</h2>
            <p>
              We accept payments made online using Visa, Mastercard, Discover,
              and American Express.
            </p>
          </header>
        </article>
      </div>
    </section>
  );
};

export default Section4;
