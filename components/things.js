import styles from './things.module.css'
import Link from 'next/link'


function Things(props) {
    return (
            <a href={props.thing.link} alt={props.thing.name}><Link href={props.thing.link}>
            <div className={styles.thing}>
                <div className={styles.__title}>
                <h4>{props.thing.name}</h4>
                    <div className={styles.arrow_shape}>
                    <img src="../images/home/Arrow-right.svg" className={styles.arrow}/>
                    </div>
                </div>
                <p>{props.thing.description}</p>
            </div>
          </Link>
          </a> 
    );
}

export default Things;