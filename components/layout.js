import PeopleData from "../components/people-data";
import StudiosData from "../components/studios-data";
import LinkCss from "../components/links.module.css";

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }) {
  return (
    <div className="content">
      {children}
      {/* Footer */}
      <div className="footer" key={0}>
        {/* People */}
        <div key={0}>
          <h4>Some great people & friends (A → Z):</h4>
          <div className={LinkCss.link}>
            {PeopleData.map(function (Person) {
              return (
                <a href={Person.url} alt={Person.name} target="_blank">
                  <div className={LinkCss.item}>
                    <p>{Person.name}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Studios */}
        <div key={0}>
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
