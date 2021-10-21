import styles from './people.module.css'
import Link from 'next/link'


function People(props) {
    return (
        <a href="https://ertdfgcvb.xyz" alt="Andreas Gysin" target="_blank">
        <div className={styles.person}>
            <p>Andreas Gysin</p>
        </div>
        </a>
    );
}

export default People;