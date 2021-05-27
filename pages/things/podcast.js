import Link from 'next/link'
import Head from 'next/head'
import Layout from '/components/layout'


export default function Podcast() {
  return ( 
    <Layout>
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
      <Link href="/">
        <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
            </div></Link>
      <div className="header">
        <div className="logo">
            <img src="../images/podcast/logo.svg" alt="And designer podcast" />
        </div>
        <h1 className="title">And Designer</h1>
        <p className="subtitle">A podcast where we explore different aspects of design, technology and business through the lenses of a product designer. Hosted by <a href="https://twitter.com/yaosamo" target="_blank">Yaroslav Samoylov.</a></p>
      </div>

      <div className="intro">
       <iframe media="(prefers-color-scheme: light)" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/intro/id1555995946?i=1000511073575&theme=dark"></iframe>
      </div>

      <div className="listen">
        {/* Title */}
        <div>
          <h2>Listen on</h2>
        </div>

          {/* Apple Podcasts */}
          <a href="https://podcasts.apple.com/us/podcast/and-designer/id1555995946" target="_blank">
          <div className="column">
            
            <div className="row">
              <div>
                <img src="../images/podcast/ApplePodcasts@2x.jpg" alt="Apple Podcasts" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">Apple Podcasts</p>
              </div>
            </div>
            
          </div>
          </a>

          {/* Spotify */}
          <a href="https://open.spotify.com/show/6xViWjyWUsCap3Dh3qJ0uq" target="_blank">
          <div className="column">

            <div className="row">
              <div>
                <img src="../images/podcast/Spotify@2x.svg" alt="Spotify" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">Spotify</p>
              </div>
            </div>

          </div>
          </a>
          
           {/* Google Podcasts */}
           <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjk1NDU0ODM4MC9zb3VuZHMucnNz" target="_blank">
           <div className="column">
             
            <div className="row">
              <div>
                <img src="../images/podcast/GooglePodcasts@2x.svg" alt="Google Podcasts" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">Google Podcasts</p>
              </div>
          
            </div>
          </div>
          </a>
           
          {/* SoundCloud */}
          <a href="https://soundcloud.com/and-designer" target="_blank">
          <div className="column">
            <div className="row">
              
              <div>
                <img src="../images/podcast/SoundCloud@2x.svg" alt="SoundCloud" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">SoundCloud</p>
              </div>
          
            </div>
          </div>
          </a>
      </div>
      
     
      <style jsx>{`
        .arrow-shape {
          background: var(--gray-10);
          width: 2.5rem;
          transform: rotate(180deg);
          flex-direction: row-reverse;
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
          margin: 0 auto;
          text-align: center;
          margin-block-start: 0.5em;
          max-width: 20rem; 
        }

        .subtitle a {
          font-weight: 500;
          color: var(--active);
          text-decoration: none; 
        }

        .subtitle a:hover {
          text-decoration: none;
          background-color: var(--green-10);
          border-radius: .125rem;
          margin-left: -.15rem;
          margin-right: -.15rem;
          padding-left: .15rem;
          padding-right: .15rem;
        }

        h1 {
          margin-block-start: 1em;
          margin-block-end: 0em;
        }

        p {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }

        .intro {
          margin-block-start: 2em;
          margin-block-end: 2em;
        }

        .intro, iframe {
          width: 100%;
          max-width: 45rem;
          overflow: hidden;
          background: transparent;
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

        a {
          color: inherit;
          text-decoration: none;
        }

        a:visited {
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

