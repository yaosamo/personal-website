import styles from "../components/wordanimation.module.css";
import { useState } from "react";

export default function WordAnimation({ char, i }) {
  const [hover, setHover] = useState(false);

  function HandleHover() {
    setHover(true);
  }

  function HandleAnimeitonEnd() {
    setHover(false);
  }

  return (
    <span
      onMouseOver={() => HandleHover()}
      onAnimationEnd={() => HandleAnimeitonEnd()}
      className={hover ? styles.letter : ""}
    >
      {char}
    </span>
  );
}
