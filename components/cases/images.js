import styles from "../cases/case.module.css";
import { useState } from "react";

export default function Images({ Item, Img, i }) {
  const [eggA, setEggA] = useState(false);

  return (
    <img
      src={Img.img}
      className={eggA ? styles.eastereggA : ""}
      style={
        // if item has border - add it. If item has maxwidth apply it
        Item.maxwidth ? { maxWidth: Item.maxwidth } : {}
      }
    />
  );
}
