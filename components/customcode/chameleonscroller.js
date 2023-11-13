import styles from "../../components/customcode/chameleonscroller.module.css";
import { useState } from "react";

export default function Chameleonscroller() {
  return (
    <>
      <video
        className={styles.video}
        muted="muted"
        playsInline
        autoPlay={true}
        loop={true}
        aria-label="A video of the player displaying horizontal scroll"
        src="images/work/case-two/item-2/vid-1.mp4"
      />
      <p className={styles.copy}>
        I had a problem while using an audio player: its scroll bar was small
        and wasn't comfortable when scrolling through my 10h+ long books. It was
        hard to be precise when scanning for a certain moment. I wanted to be
        able to scrub through an audio book for 10s or 4h in a convenient way.
        <br />
        <br />
        My solution was to design a custom scroller. Its width is equal to the
        length of a book in seconds, so the bar goes all the way off the screen,
        and it scrolls using the native iOS ScrollView – which allows you to
        scroll both very slow and very fast with few swipes.
        <br />
        <br />
        This way scanning is joyful and easy for any amount of time: seconds,
        minutes or hours.
      </p>
    </>
  );
}
