import styles from "../components/wordanimation.module.css";
import { useState, useEffect } from "react";

export default function WordAnimation({ char, id }) {
  const density = ";:+=-,._Ñ@#W$9876543210?!abcdefghijklmnopqrstuvwxyz";
  const [hover, setHover] = useState(false);
  const [roll, setRoll] = useState(false);

  var [letter, setLetter] = useState(char);

  var ind = 0;

  useEffect(() => {
    setTimeout(HandleHover, id * 35);
  }, []);

  function HandleHover() {
    setHover(true);
    if (density[ind] === char) {
      setLetter(density[ind]);
      setRoll(false);
    }
    if (!roll && ind < density.length && density[ind] != char && char != " ") {
      setLetter(density[ind]);
      ind++;
      setTimeout(HandleHover, 40);
      setRoll(true);
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
