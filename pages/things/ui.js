import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import css from "../../components/ui.module.css";

export default function UI() {
  return (
    <Layout>
      <Head>
        <title>UI</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta
          property="og:url"
          content="https://yaosamo.com/things/chameleon"
        />
        <meta property="og:title" content="Chameleon / Audiobook Player" />
        <meta
          property="og:description"
          content="Experiments with User Interfaces"
        />
        <meta
          property="og:image"
          content="https://yaosamo.com/images/chameleon/intro.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Chameleon / Audiobook Player" />
        <meta name="description" content="Listen your audiobooks on iCloud." />
      </Head>
      <Link href="/">
        <div className="arrowShape">
          <img src="../images/home/Arrow-right.svg" className="arrow" />
        </div>
      </Link>

      <div className="content">
        <p className={css.selectText}>
          Hick’s Law (or the Hick-Hyman Law) is named after a British and an
          American psychologist team of William Edmund Hick and Ray Hyman. In
          1952, this pair set out to examine the relationship between the number
          of stimuli present and an individual’s reaction time to any given
          stimulus. As you would expect, the more stimuli to choose from, the
          longer it takes the user to make a decision on which one to interact
          with. Users bombarded with choices have to take time to interpret and
          decide, giving them work they don’t want.
        </p>
      </div>
    </Layout>
  );
}
