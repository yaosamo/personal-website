import styles from "../cases/case.module.css";
import { useState } from "react";

export default function Images({ Item, Img, i }) {
  return (
    <img
      src={Img.img}
      style={Item.maxwidth ? { maxWidth: Item.maxwidth } : {}}
    />
  );
}
