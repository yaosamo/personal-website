import styles from "../../components/customcode/chameleonscroller.module.css";
import { useState } from "react";

export default function Chameleonscroller() {
  return (
    <>
      <video
        className={styles.video}
        muted="muted"
        autoPlay="true"
        loop="true"
        aria-label="A video of the player displaying horizontal scroll"
        src="images/work/case-two/item-2/vid-1.mp4"
      ></video>
      <p className={styles.copy}>
        I had a problem using one audioplayer and its scroll bar was small and
        wasn't comfortable scrolling through my 10h+ long books. It was hard to
        be presice when scatter for a certain moment. I wanted to be able to
        scrub through an audio book for 10s or 4h in a convenient way.
        <br />
        <br />
        So I designed custom scroller. Its width equals to the lenght of a book
        in seconds the bar goes all the way off the screen and it scrolls using
        native iOS ScrollView which allow you to scroll very slow and very fast
        with few swipes.
        <br />
        <br />
        This way scattering is joyful and easy on any lengh, seconds, minutes or
        hours.
      </p>
    </>
  );
}
