import styles from "../cases/case.module.css";
import { useState } from "react";

export default function Images({ Item, Img, Alt, i }) {
  return (
    <img
      src={Img.img}
      alt={Alt}
      style={Item.maxwidth ? { maxWidth: Item.maxwidth } : {}}
    />
  );
}
