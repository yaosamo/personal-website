import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/about.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hi, it's Yaric</title>
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
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
        <p>
          I love working on side projects especially on applications that solve
          someone elses problem perfectly and not trying to be flexible to fit
          everyone needs. Here’s the most notable things:
        </p>
      </div>
    </Layout>
  );
}
