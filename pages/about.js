import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hi, it's Yaric</title>
        <meta name="msapplication-TileColor" content="#fafafa" />
        <meta
          name="msapplication-TileImage"
          content="/static/meta/ms-icon-144x144.png"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#040407"
          media="(prefers-color-scheme: dark)"
        />
      </Head>

      <Link href="/">
        <div className="arrowShape">
          <img src="../images/home/Arrow-right.svg" className="arrow" />
        </div>
      </Link>
      <div className="content">Yo, come back on October 15th.</div>
    </Layout>
  );
}
