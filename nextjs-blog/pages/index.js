import Layout from '../components/layout'
import Head from 'next/head'

export default function Podcast() {
  return ( //layout - parent with all global styles but child has content indes/about.  
    <Layout>
      
      <Head>
        <title>And designer is a podcast where we expose designs to other areas. Hosted by Yaric Samoylov.</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="header">
        <div className="logo">
            <img src="../images/logo.svg" alt="And designer podcast" />
        </div>
        <h1 className="title">And designer</h1>
        <p className="subtitle">It’s a podcast where we expose<br></br>design to other areas</p>
      </div>

      <div className="intro">
        <iframe allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" height="175" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/us/podcast/intro/id1555995946?i=1000511073575&theme=light"></iframe>
      </div>

      <div className="listen">
        {/* Title */}
        <div className="h1-left">
          <h1 className="">Listen on</h1>
        </div>

          {/* Apple Podcasts */}
          <a href="https://podcasts.apple.com/us/podcast/and-designer/id1555995946" target="_blank">
          <div className="column">
            
            <div className="row">
              <div>
                <img src="../images/ApplePodcasts@2x.jpg" alt="Apple Podcasts" className="source-logo"/>
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
                <img src="../images/Spotify@2x.jpg" alt="Spotify" className="source-logo"/>
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
                <img src="../images/GooglePodcasts@2x.jpg" alt="Google Podcasts" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">Google Podcasts</p>
              </div>
          
            </div>
          </div>
          </a>

           {/* YouTube */}
           <a href="https://www.youtube.com/channel/UChbFqLnIY9kh_nLHGrV0A7Q/videos" target="_blank">
           <div className="column">

            <div className="row">
              <div>
                <img src="../images/YouTube@2x.jpg" alt="YouTube" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">YouTube</p>
              </div>
            </div>

          </div>
          </a>

          {/* SoundCloud */}
          <a href="https://soundcloud.com/and-designer" target="_blank">
          <div className="column">
            <div className="row">
              
              <div>
                <img src="../images/SoundCloud@2x.jpg" alt="SoundCloud" className="source-logo"/>
              </div>
              
              <div>
                <p className="source-name">SoundCloud</p>
              </div>
          
            </div>
          </div>
          </a>

      </div>
     

      <style jsx>{`
        .logo {
          display: flex;
          justify-content: center;
          text-align: center;
        }

        .title {
          text-align: center;
        }

        .subtitle {
          text-align: center;
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

        .intro {
          margin-block-start: 1.5em;
          margin-block-end: 2em;
        }

        .intro, iframe {
          width: 100%;
          max-width: 45rem;
          overflow: hidden;
          background: transparent;
        }

        .column {
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          padding: 8px;
        }

        .column:hover {
          cursor: pointer;
          background: #F9F9F9
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
          width: 3.5rem;
          height: 3.5rem;
        }

        .source-name {
          text-align: left;
          padding-left: 1rem;
          min-width: 14em;
        }

        a {
          text-decoration: none;
        }

        a:visited {
          color: inherit;
        }

        .listen {
          margin: 0 0.75rem;
          width: 100%;
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

