import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import ThingCss from "../components/things.module.css";

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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="content">
        <div className={styles.header}>
          <h1>
            Yaroslav Samoylov, product designer & design engineer see my work
            below.
          </h1>
        </div>
      </div>
    </Layout>
  );
}
