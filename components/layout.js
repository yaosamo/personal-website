import PeopleData from "../components/people-data";
import StudiosData from "../components/studios-data";
import Links from "../components/links-data.json";
import styles from "../components/layout.module.css";

function Footer() {
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
            <a href="https://github.com/yaosamo/personal-website">github.</a>{" "}
            It's private, no trackers being used.
            <br />
            Let’s meet on Twitter or talk over email yaosamo@gmail.com -> copy
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
