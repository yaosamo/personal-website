import styles from "./layout.module.css";
import PeopleData from "../components/people-data";
import StudiosData from "../components/studios-data";
import LinkCss from "../components/links.module.css";

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      {children}
      {/* Footer */}
      <div className="footer">
        {/* People */}
        <div className="content">
          <h4>Some great people & friends (A → Z):</h4>
          <div className={LinkCss.link}>
            {PeopleData.map(function (Person) {
              return (
                <a href={Person.url} alt={Person.name} target="_blank">
                  <div className={LinkCss.item}>
                    <p>{Person.name}</p>
                    {Person.new != null && <a className={LinkCss.__new}>New</a>}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Studios */}
        <div className="content">
          <h4>Cool studios (A → Z):</h4>
          <div className={LinkCss.link}>
            {StudiosData.map(function (Studio) {
              return (
                <a href={Studio.url} alt={Studio.name} target="_blank">
                  <div className={LinkCss.item}>
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
