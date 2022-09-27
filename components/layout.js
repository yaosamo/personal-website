import PeopleData from "../components/people-data";
import StudiosData from "../components/studios-data";
import Links from "../components/links-data.json";
import styles from "../components/layout.module.css";
import { useState } from "react";

function Footer() {
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
    <div className="content">
      <div className={styles.footer}>
        <div className={styles.group}>
          <div className={styles.link}>
            {Links.map(function (Link) {
              return (
                <a href={Link.url} alt={Link.name} target="_blank">
                  <div className={styles.item}>
                    <p>{Link.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
        <div className={styles.group}>
          <h4>Some great people & friends:</h4>
          <div className={styles.link}>
            {PeopleData.map(function (Person) {
              return (
                <a href={Person.url} alt={Person.name} target="_blank">
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
                <a href={Studio.url} alt={Studio.name} target="_blank">
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
              github.
            </a>{" "}
            It's private, no trackers being used.
            <br />
            Let’s meet on{" "}
            <a
              className="link"
              href="https://github.com/yaosamo/personal-website"
              target="_blank"
            >
              Twitter
            </a>{" "}
            or talk over email yaosamo@gmail.com ->{" "}
            <a
              className="link"
              onClick={() => copytoClipboard("yaosamo@gmail.com")}
            >
              {copyText}
            </a>
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
    <div>
      {children}
      <Footer />
    </div>
  );
}
