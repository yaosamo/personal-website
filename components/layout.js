import PeopleData from "../components/people-data";
import StudiosData from "../components/studios-data";
import styles from "../components/layout.module.css";

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }) {
  return (
    <div>
      {children}
      {/* Footer */}
      <div className={styles.footer} key={0}>
        {/* People */}
        <div className="content">
          <h4>Some great people & friends (A → Z):</h4>
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
        <div className="content">
          <h4>Cool studios (A → Z):</h4>
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
      </div>
    </div>
  );
}
