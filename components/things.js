import styles from "./things.module.css";
import Link from "next/link";

function Things({ thing }) {
  return (
    <a href={thing.link} alt={thing.name}>
      <Link href={thing.link}>
        <div className={styles.thing}>
          <div className={styles.__title}>
            <h4>{thing.name}</h4>
            <div className={styles.arrow_shape}>
              <img
                src="../images/home/Arrow-right.svg"
                className={styles.arrow}
              />
            </div>
          </div>
          <p>{thing.description}</p>
        </div>
      </Link>
    </a>
  );
}

export default Things;
