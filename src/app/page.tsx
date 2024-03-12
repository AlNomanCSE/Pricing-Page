import Image from "next/image";
import styles from "./page.module.css";
import Section1 from "@/components/app/main/section1/Section1";
import Section2 from "@/components/app/main/section2/Section2";
import Section3 from "@/components/app/main/section3/Section3";

export default function Home() {
  return (
    <main className={styles.main}>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
