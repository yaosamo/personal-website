import styles from "../../components/customcode/chameleonscroller.module.css";
import { useState } from "react";

export default function Chameleonscroller() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src="images/work/case-three/item-4/img-1@2x.png"></img>
        </div>
        <div>
          <img src="images/work/case-three/item-4/img-2@2x.png"></img>
        </div>
      </div>
    </>
  );
}
