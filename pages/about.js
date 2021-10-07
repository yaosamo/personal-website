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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>  
      
      <Link href="/">
        <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
            </div></Link>
            <div className="content">
                <div className="item">
                  <div className="timestamp"><p>October 3, 2021 at 9:43 PM</p><div className="cursor"/></div>
                  <p className="subtitle">Hi, I’m Yaroslav Samoylov a Lead Product Designer working on tools for dealerships at Gubagoo. Previously Zvooq, Looch (Former Genue). At Gubagoo I collaborated with teams at Facebook, Apple Business Chat, Google Business and many more. Our clients include BMW, Toyota, Mercedes, Volvo, Porsche and pretty much every big automotive manufacture.
</p><p className="subtitle">Born and raised in Togliatti, Russia. Living in a beautiful Hillsboro, Oregon. I’m an O1 visa holder and currently working on the greencard. Married to a beautiful woman and we have almost 3 years old dragon-blood son.
</p><p className="subtitle">I love how through design you can change people’s preconceived notion about well-established process and open new possibilities. I’m always have been inspired by tech industry to explore and create. On my spare time I enjoy adjacent areas to design such as 3D, coding, art and game development.
</p><p className="subtitle">Also I play ultimate freesbi every weekend and cheer for the Arsenal FC.
</p><p className="subtitle">Random, but I recently discovered that my parents gave me a name that is well designed.</p>
                <img src="../images/about/name.svg"/>
                </div> 

              <div className="item">
              <div className="me"></div>
              <p className="block-end">This is me working on this page, while listening Sludge playlist and watching Silicon Valley on the background</p>
              <h2 className="setup">My setup</h2>
              <ul>
                <li className="h4">Software</li>
                <li>Figma, duh</li>
                <li>Notion</li>
                <li>Github</li>
                <li>Visual Studio Code</li>
                <li>Browsers: Safari, Brave</li>
                <li>UsabilityHub</li>
                <li>Principle for mac</li>
                <li>Terminal</li>
                <li>Blender</li>
                <li>Telegram</li>
                <li>Construct 3</li>
                <li>Vercel</li>
                <li>iCloud 2tb</li>
                </ul>

                <ul>
                <li className="h4">Hardware</li>
                <li>iMac Pro 2017 (Xeon 8 core, 1tb, 32gb, Radeon Vega 56 8gb)</li>
                <li>Macbook Air 2021 (M1, 16gb, 256gb)</li>
                <li>Airpods Pro Max</li>
                <li>Airpods Pro</li>
                <li>iPhone XS Max 512gb</li>
                <li>Redmi note 7</li>
                <li>Wacom Intuos BT</li>
                <li>Microphone</li>
                </ul>

                <ul>
                <li className="h4">Products I especially adore</li>
                <li>Bellroy</li>
                <li>Airbirds</li>
                <li>Sputnik bags</li>
                <li>Shwood Eyewear</li>
                </ul>
                
                </div>
                <div className="item">
                <h2>Things I designed for my friends</h2>
                <div className="gallery">
                  <img src="../images/about/designforfriends/2.png"/>
                  <img src="../images/about/designforfriends/1.png"/>
                  <img src="../images/about/designforfriends/3.png"/>
                  <img src="../images/about/designforfriends/4.png"/>
                  <img src="../images/about/designforfriends/5.png"/>
                </div>
                </div>

                <div className="item">
                <h2>Links</h2>
                <ul>
                  <li>Twitter @yaosamo</li>
                  <li>GitHub @yaosamo</li>
                  <li>Instagram @yaosamo</li>
                  <li>Spotify @yaosamo</li>
                  <li>Email hi@yaosamo.com</li>
                </ul>
                </div>

                <div className="item">
                  <p className="thanks">Thank you very much for visiting! Also I do not use tracking of anykind on this website. Enjoy and be safe!</p>
                </div>

              </div>
            
      
   
    
     
      <style jsx>{`
        .content {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-gap: 3.5rem;
          margin-block-start: 2rem; 
        }  

        .content ul {
          list-style-type: none;
          padding-inline: 0;
        }

        .item {grid-column: 1 / 6;}
        // .item-2 {width: 24rem}

        @media (max-width: 414px) {
          .content {grid-template-columns: 1fr;}
          .content {grid-column: 1;}
        }

        .me {
          background: url(../images/about/me.webp) center no-repeat; 
          width: 100%;
          height: 320px;
          border-radius: 0.25rem;
          margin-block-end: 1.5rem;
        }

        .cursor {
          width: 2px;
          height: 1.5rem;
          background-color: var(--active);
          margin: 0px 8px;
          animation: cursor 0.5s infinite alternate;
        }

        .timestamp {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        @keyframes cursor {
          0%,50% {opacity: 100%;}
          51%, 100% {opacity: 0%;} 
        }

        .gallery {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          overflow-y: scroll;
        }

        .gallery img {
          height: 24rem
        }

        .block-end {
          margin-block-end: 3.5rem;
        }

        .h4 {
          font-weight: 700;
          padding-bottom: 0.5rem;
        }

        ul {
          margin-block-end: 1.5em;
        }

        .thanks {
          font-size: 1.5rem;
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
          font-weight: 400;
          font-size: 20px;
          line-height: 180%;
          text-align: left;
          margin-block-start: 0.5em;
          max-width: 42.5rem; 
          margin-block-end: 2.5rem;
        }


        h1 {
          margin-block-start: 1em;
          margin-block-end: 0em;
        }

        p {
          margin-block-start: 0em;
          margin-block-end: 0em;
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

