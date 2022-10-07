import styles from "../components/wordanimation.module.css";
import { useState } from "react";

export default function WordAnimation({ char, i }) {
  const density = ";:+=-,._Ñ@#W$9876543210?!abcdefghijklmnopqrstuvwxyz";
  const [hover, setHover] = useState(false);
  var [letter, setLetter] = useState(char);

  var ind = 0;

  function HandleHover() {
    if (density[ind] === char) {
      setLetter(density[ind]);
    }
    if (ind < density.length && density[ind] != char && char != " ") {
      setHover(true);
      setLetter(density[ind]);
      ind++;
      setTimeout(HandleHover, 75);
    }
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
      {letter}
    </span>
  );
}
