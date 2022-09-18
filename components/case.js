const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";
import styles from "../components/case.module.css";

export default function Case({}) {
  const addborder = true;
  const bordercolor = "#c65431";
  const backgroundcolor = "#f4f5f6";
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className="bodyMD">2019-2022 / Gubagoo -> Released</p>
        <h1 className="headingL weightMedium">
          A service to sell cars fully online. Clients include Audi, BMW, Land
          Rover, Nissan, Toyota, Volvo, Porsche and other brands
        </h1>
        <div className={styles.contributors}>
          <p className="bodyMD">
            Product design: Emrah Demirag, Eugene Belyakoff, Tim Marks, Yaroslav
            Samoylov
          </p>
          <p className="bodyMD">
            Direction: Alyssa Bouranova, John Ellithorp, Miran Maric and whole
            Asbury AG, Ryan Osten, Tim Marks
          </p>
        </div>
      </div>
      <div className={styles.items}>
        {/* Individual pics */}
        <div
          style={addborder ? { background: backgroundcolor } : {}}
          className={styles.item}
        >
          <div className={styles.images}>
            {/* if border? add border color */}
            <img
              style={
                addborder ? { border: "1px " + bordercolor + " solid" } : {}
              }
              width="390"
              height="844"
            />
            <img
              style={
                addborder ? { border: "1px " + bordercolor + " solid" } : {}
              }
              width="390"
              height="844"
            />
          </div>
          <p>Title</p>
        </div>
      </div>
    </div>
  );
}
