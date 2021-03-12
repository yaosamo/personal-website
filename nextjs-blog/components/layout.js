import styles from './layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
    <div className={styles.container}>{children}
    
    <Head>
        <title>Podcast "And Designer"</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta property="og:url" content="https://yaosamo.com" />
        <meta property="og:title" content="Podcast 'And Designer'" />
        <meta property="og:description" content="Here we expose designs to other areas such as engineering, management, business and all other aspects related to design. Hosted by Yaric Samoylov." />
        <meta property="og:image" content="https://yaosamo.com/static/meta/hi.jpg" />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="And designer"/>
        <meta name="description" content="And designer is a podcast where we expose designs to other areas. Hosted by Yaric Samoylov." />
        <link rel="apple-touch-icon" sizes="57x57" href="/static/meta/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/static/meta/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/static/meta/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/static/meta/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/static/meta/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/static/meta/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/static/meta/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/static/meta/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/meta/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/static/meta/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/metafavicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/meta/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/meta/favicon-16x16.png" />
        <link rel="manifest" href="/static/meta/manifest.json" />
        <meta name="msapplication-TileColor" content="#fafafa"/>
        <meta name="msapplication-TileImage" content="/static/meta/ms-icon-144x144.png" />
        <meta name="theme-color" content="#fafafa" />
      </Head>  
    
    </div>
    
    )
  
  }

  