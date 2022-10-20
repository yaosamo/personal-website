import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/about.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hi, it's Yaric</title>
      </Head>
      <div className="content">
        <Link href="/">
          <div className={styles.arrowback}>
            <img
              src="../images/home/Arrow-right.svg"
              className={styles.arrow}
            />
          </div>
        </Link>
        <p className={styles.headingL}>
          I love working on{" "}
          <a className={styles.headingHighlight}> side projects </a>especially
          on applications that solve someone elses problem perfectly and not
          trying to be flexible to fit everyone needs. Here’s the most notable
          things:
        </p>
      </div>
    </Layout>
  );
}
