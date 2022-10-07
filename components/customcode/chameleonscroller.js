import styles from "../../components/customcode/chameleonscroller.module.css";
import { useState } from "react";

export default function Chameleonscroller() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src="images/work/case-two/item-2/img-1@2x.png"></img>
        </div>
        <div>
          <p>
            I made this app for myself. I had a problem with regular scrollers
            because for long books it’s hard to be presice when scatter. It’s
            not versatile enough to go 10 seconds, 2 minutes or 1 hour head.{" "}
            <br />
            <br />
            So I designed custom scroller. Its width equels to the lenght of a
            book in seconds and scrolls using native iOS ScrollView which allow
            you to scroll very slow and very fast with few swipes.
            <br />
            <br />
            This way scattering is joyful and easy on eany lengh, seconds,
            munutes or hours.
          </p>
        </div>
      </div>
    </>
  );
}
