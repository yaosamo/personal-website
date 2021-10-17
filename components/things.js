import styles from './things.module.css';
import Link from 'next/link'

function Things() {
    return (
        <div className={styles.things}>
            <h2>Things I create</h2>
            <a href="/things/gameboy/" alt="Gameboy Screenshots"><Link href="/things/gameboy/">
            <div className={styles.thing}>
                <div className={styles.__title}>
                <h4>Gameboy games screenshots</h4>
                    <div className={styles.arrow_shape}>
                    <img src="../images/home/Arrow-right.svg" className={styles.arrow}/>
                    </div>
                </div>
                <p>Over 1500 screenshots of official releases.</p>
            </div>
          </Link>
          </a>
        </div>  
    );
}

export default Things;