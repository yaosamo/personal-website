import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../components/index.module.css";
import Case from "../components/cases/case";
import Portfolio from "../components/data/cases.json";
import WordAnimation from "../components/wordanimation";

const word = "design engineer";

// Who this is and what site this is, for search engines.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://design.yaosamo.com/#person",
      name: "Yaroslav Samoylov",
      alternateName: ["Yaosamo", "Yaric Samoylov"],
      url: "https://design.yaosamo.com/",
      image: "https://design.yaosamo.com/images/about/me2@2x.webp",
      jobTitle: "Product designer and design engineer",
      homeLocation: { "@type": "Place", name: "Oregon, United States" },
      sameAs: [
        "https://x.com/yaosamo",
        "https://github.com/yaosamo",
        "https://dribbble.com/yaosamo",
        "https://www.linkedin.com/in/yaric-sam-63487b3a/",
        "https://yaosamo.com/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://design.yaosamo.com/#website",
      url: "https://design.yaosamo.com/",
      name: "Yaroslav Samoylov",
      inLanguage: "en",
      publisher: { "@id": "https://design.yaosamo.com/#person" },
    },
  ],
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <div className="content">
        <div className={styles.header}>
          <p className={styles.subtitle}>
            about me & other things I do →{" "}
            <Link href="/about" className="link">
              see info
            </Link>
          </p>
          <h1 className="headingL weightMedium">
            Yaroslav Samoylov,
            <br />
            software designer &{" "}
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
