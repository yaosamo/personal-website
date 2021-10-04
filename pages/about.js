import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'


export default function Podcast() {
  return ( 
    <Layout>
  <Head>
        <title>About</title>
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>  
      
      <Link href="/">
        <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
            </div></Link>
            <div className="content">
      <div className="header">
        <p className="timestamp">October 3, 2021 at 9:43 PM</p>
        <p className="subtitle">Hi, I’m a curious designer working on tools for dealerships at Gubagoo. Previously Zvooq, Genue.
Born and raised in Togliatti, Russia. Living in a beautiful Hillsboro, Oregon. I’m an O1 visa holder and currently working on the greencard. Married to my beautiful wife and we have almost 3 years old dragon-blood son.
I love how through design you can change industries. I’m always been inspired by the tech to create someting new. I’m excited to see what is interfaces of the future will look likeOn my spare time I enjoy adjacent areas to design such as 3D, coding, art and game development.
I play ultimate freesbi every weekend. Also I watch english premier league and cheer for the Arsenal.
Random, but I recently discovered that my parents gave me a name that is well designed. </p>
      </div>
      </div>
   
      
      
     
      <style jsx>{`
        .content {
          border: 1px solid red;
        }  
    
        .arrow-shape {
          background: var(--gray-10);
          width: 2.5rem;
          transform: rotate(180deg);
          flex-direction: row-reverse;
          margin-left: 1.5rem;
        }

        .arrow-shape:hover {
          cursor: pointer;
          background: var(--gray-20);
        }

        .arrow-shape:active {
          transform: scale(-0.9); 
        }

        .arrow {
          filter: var(--icon);
          padding-right: 1px;
        }
        
        .logo {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .title {
          text-align: center;
        }

        .subtitle {
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          text-align: left;
          margin-block-start: 0.5em;
          max-width: 42.5rem; 
        }


        h1 {
          margin-block-start: 1em;
          margin-block-end: 0em;
        }

        p {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }


        .column {
          background-color: var(--element-background);
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          padding: 8px;
          margin-block-end: 1rem;
          transition: all .1s;
        }

        .column:hover {
          cursor: pointer;
          transform: translateY(-1px);
          background: var(--element-hover);
          box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
        }

        .wrapper h1 {
          padding: 0px;
        }

        .row {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .row div {
          display: inherit;
        }
        
        .source-logo {
          border-radius: 1rem;
          width: 3rem;
          height: 3rem;
        }

        .source-name {
          text-align: left;
          padding-left: 1rem;
          min-width: 14em;
        }

        .listen a {
          color: inherit;
          text-decoration: none;
        }

        .listen a:visited {
          color: inherit;
        }

        .h1-left {
          display: flex;
          flex-direction: column;
          padding: 0.5rem;
          text-align: left;
          margin-block-start: 0em;
          margin-block-end: 0em;
        }  


      `}</style> 
     
    </Layout>
    )
}

