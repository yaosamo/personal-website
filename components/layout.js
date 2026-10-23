import PeopleData from "../components/data/people-data";
import StudiosData from "../components/data/studios-data";
import Links from "../components/data/links-data.json";
import styles from "../components/layout.module.css";
import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

function Footer() {
  const PeopleSorted = []
    .concat(PeopleData)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const [copyText, setcopyText] = useState("copy");
  const copytoClipboard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setcopyText("copied!");
      setTimeout(() => {
        setcopyText("copy");
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    // Links dribble and linkedin
    <div className="content">
      <div className={styles.footer}>
        <div className={styles.group}>
          <div className={styles.link}>
            {Links.map(function (Link) {
              return (
                <a
                  key={Link.name}
                  href={Link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.item}>
                    <p>{Link.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        {/* people */}
        <div className={styles.group}>
          <h4>Some great people & friends:</h4>
          <div className={styles.link}>
            {PeopleSorted.map(function (Person) {
              return (
                <a
                  key={Person.name}
                  href={Person.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.item}>
                    <p>{Person.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        {/* Studios */}
        <div className={styles.group}>
          <h4>Cool design collectives:</h4>
          <div className={styles.link}>
            {StudiosData.map(function (Studio) {
              return (
                <a
                  key={Studio.name}
                  href={Studio.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={styles.item}>
                    <p>{Studio.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.group}>
          <p>
            I designed and built this website on NextJS. Check on{" "}
            <a
              className="link"
              href="https://github.com/yaosamo/personal-website"
              target="_blank"
            >
              github
            </a>
            .
            <br />
            Let’s meet on{" "}
            <a
              className="link"
              href="https://twitter.com/yaosamo"
              target="_blank"
            >
              Twitter
            </a>{" "}
            or talk over email yaosamo@gmail.com →{" "}
            <a
              className={`${styles.copyCursor} link`}
              onClick={() => copytoClipboard("yaosamo@gmail.com")}
            >
              {copyText}
            </a>
            <br />
            <br />
            Thanks for visiting & have a nice!
          </p>
        </div>
      </div>
    </div>
  );
}

const SITE = "https://design.yaosamo.com";
const DEFAULT_TITLE = "Yaroslav Samoylov, Product Designer & Design Engineer";
const DEFAULT_DESCRIPTION =
  "Yaroslav Samoylov is a product designer and design engineer in Oregon. Portfolio of car-buying products, SwiftUI and React prototypes, and side projects.";

// Main container that being used everywhere with imported CSS class.
// Pages pass their own title, description and share image; the canonical URL comes from the route.
export default function Layout({
  children,
  hideFooter = false,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${SITE}/intro.jpg`,
}) {
  const url = `${SITE}${useRouter().pathname}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Yaroslav Samoylov" />
        <meta name="author" content="Yaroslav Samoylov" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#000000" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
