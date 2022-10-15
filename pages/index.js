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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta property="og:url" content="https://yaosamo.com" />
        <meta property="og:title" content="Yaroslav Samoylov" />
        <meta
          property="og:description"
          content="Curious designer based in Oregon"
        />
        <meta property="og:image" content="https://yaosamo.com/intro.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Yaroslav Samoylov" />
        <meta name="description" content="Curious designer based in Oregon" />
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000;" />
        <meta name="theme-color" content="#FFF" />

        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        ></link>
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
            {word.split("").map((char, i) => {
              return <WordAnimation char={char} key={i} id={i} />;
            })}
          </h1>
        </div>
      </div>
      {Portfolio.map((Work, i) => (
        <Case Work={Work} key={i} />
      ))}
    </Layout>
  );
}
