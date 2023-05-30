import styles from "../cases/case.module.css";
import { useState } from "react";

export default function Videos({ Item, Img, i }) {
  return (
    <video
      style={Item.maxwidth ? { maxWidth: Item.maxwidth } : {}}
      className={styles.video}
      muted="muted"
      playsInline
      autoPlay="true"
      loop="true"
      src={Img.img}
    />
  );
}
