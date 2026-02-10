import PeopleData from "../components/data/people-data";
import StudiosData from "../components/data/studios-data";
import Links from "../components/data/links-data.json";
import styles from "../components/layout.module.css";
import { useState } from "react";
import Head from "next/dist/shared/lib/head";

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

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }) {
  return (
    <>
      <Head>
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
        <meta name="theme-color" content="#FFFFFF" />
      </Head>
      {children}
      <Footer />
    </>
  );
}
