import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
    <div className={styles.container}>{children}
    
    <Head>
        <title>Podcast "And Designer"</title>
        <meta name="description" content="And designer is a podcast where we expose designs to other areas. Hosted by Yaric Samoylov." />
        <meta property="og:url" content="https://yaosamo.com" />
        <meta property="og:title" content="Podcast 'And Designer'" />
        <meta property="og:description" content="Here we expose designs to other areas such as engineering, management, business and all other aspects related to design. Hosted by Yaric Samoylov." />
        <meta property="og:image" content="https://www.apple.com/v/iphone-12/f/images/specs/dimensions_iphone12__da0hivvaydw2_large_2x.jpg" />
      </Head>  
    
    </div>
    
    )
  
  }

  