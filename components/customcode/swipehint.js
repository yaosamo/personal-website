import styles from "../../components/customcode/swipehint.module.css";
import { useState } from "react";

export default function Chameleonscroller() {
  const svg = (
    <svg
      className={styles.swipe}
      width="40"
      height="40"
      viewBox="-3 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.467 2.80465C29.4922 3.82986 29.4866 5.49764 28.4545 6.52974L20.4238 14.5605C23.6058 11.3785 24.6986 11.9479 25.7238 12.9731C26.749 13.9983 26.7435 15.6661 25.7114 16.6982L22.9931 19.4164C25.9042 16.5053 27.0521 17.0196 28.0773 18.0448C29.1026 19.07 29.097 20.7378 28.0649 21.7699L25.0206 24.8141C27.8491 21.9857 29.4056 22.0913 30.4308 23.1165C31.4561 24.1418 31.4505 25.8095 30.4184 26.8416L21.2444 36.0157C12.3909 44.4998 -2.49976 31.4998 3.65108 19.0921L10.0109 7.79108C10.7264 6.51969 12.3333 6.06216 13.5999 6.76917C14.8665 7.47617 15.3133 9.07998 14.5978 10.3514C14.0587 11.3094 10.543 17.0161 11.3207 16.2384L24.7419 2.81712C25.774 1.78502 27.4418 1.77944 28.467 2.80465Z"
        stroke="#2F3137"
        strokeWidth="2.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  return (
    <>
      <div className={styles.swipe_container}>
        <div className={styles.swipe_content}>
          <div className={styles.swipeShape}>{svg}</div>
        </div>
      </div>
      <div className={styles.image}>
        <img src="images/work/case-three/item-4/img-2@2x.webp"></img>
      </div>
    </>
  );
}
