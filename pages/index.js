import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../components/index.module.css";
import Case from "../components/cases/case";
import Portfolio from "../components/data/cases.json";
import WordAnimation from "../components/wordanimation";

const word = "design engineer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>👨‍💻</title>
      </Head>
      <div className="content">
        <div className={styles.header}>
          <p className={styles.subtitle}>
            about me & other things I do →{" "}
            <Link href="/about">
              <a className="link">see info</a>
            </Link>
          </p>
          <h1 className="headingL weightMedium">
            Yaroslav Samoylov,
            <br />
            product designer &{" "}
            {/* {word.split("").map((char, i) => {
              return <WordAnimation char={char} key={i} id={i} />;
            })} */}
          </h1>
        </div>
      </div>
      {Portfolio.map((Work, i) => (
        <Case Work={Work} key={i} />
      ))}
    </Layout>
  );
}
