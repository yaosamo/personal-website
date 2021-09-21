import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Image from 'next/image'



var images =[];
 

export default function GamesScreenshots() {
  
  //call images
  function importAll(r) {
          return r.keys().map(r);
      }
          const images = importAll(require.context('../../public/images/games/gameboy/', false, /\.(png|jpe?g|svg)$/));
         
 




  return ( 
    <Layout>
  <Head>
        <title>Gameboy games screenshots</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta property="og:url" content="https://yaosamo.com" />
        <meta property="og:title" content="Games Screenshots" />
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
            </div>
      </Link>
  
      <div className="content">
      <div className="header">
        <h1 className="title">Gameboy games screenshots</h1>
        <p className="subtitle">Over 1500 screenshots of official releases for your inspiration. <br/> Credits: <a className="link" href="https://retroshark.itch.io/" target="_blank">retroshark</a>, <a className="link" href="https://polyducks.itch.io" target="_blank">Polyducks</a></p>
      </div>
      </div>

      <div className="content">
        <div className="__screenshots">
          <div className="__item">
        

          {images.map((image) =>    
          
          <Image
          src={image}
          />
          )}
       
          </div>
        </div>
      </div>
     
      <style jsx>{`
  

      .content {
        max-width: 40rem;
        padding-bottom: 3.5rem;
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
        
        .title {
          text-align: left;
        }

        .subtitle {
          text-align: left;
          margin-block-start: 0.5em;
         
        }

        h1 {
          margin-block-start: 1em;
          margin-block-end: 0em;
        }

        p {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }

        .__screenshots {
          display: flex;
          flex-direction: row:
          flex-wrap: wrap;
          align-items: flex-start;
        }

      `}</style> 
     
    </Layout>
    )
}

