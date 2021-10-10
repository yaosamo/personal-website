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
        <meta property="og:title" content="Yaroslav Samoylov" />
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
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"/>
        <meta name="theme-color" content="#040407" media="(prefers-color-scheme: dark)"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"></link>
      </Head>  
      
      <Link href="/">
        <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
            </div></Link>
            <div className="content">
                <div className="item">
                  <div className="timestamp"><p>October 3, 2021 at 9:43 PM</p><div className="cursor"/></div>
                    <p className="subtitle">Hi, I’m Yaroslav Samoylov a Lead Product Designer working on tools for dealerships at <a className="link" href="https://gubagoo.com/" target="_blank" alt="Gubagoo">Gubagoo</a>. Previously <a className="link" href="http://zvuk.com" target="_blank" alt="Zvooq/Zvuk">Zvooq</a>, <a className="link" href="http://loo.ch" target="_blank" alt="Looch">Looch</a> (Former Genue). With Gubagoo I collaborated with teams at Facebook, Apple Business Chat, Google Business and many more. Our clients include BMW, Toyota, Mercedes, Volvo, Porsche and pretty much every big automotive manufacture.
                    </p><p className="subtitle">Born and raised in <a className="link" href="https://earth.google.com/web/search/Togliatti,+Russia/@53.5218785,49.4863315,94.73430165a,44273.45089792d,35y,0h,0t,0r/data=CnsaURJLCiQweDQxNjg3OGU4MDBjY2NlMTU6MHhmNTU2OTI3YjEwZDA5NmEZZRniWBfBSkAh6kVIOIi1SEAqEVRvZ2xpYXR0aSwgUnVzc2lhGAIgASImCiQJrabEskZFOkARrabEskZFOsAZbxKR1dymR0AhEIPO37PqTsA" target="_blank" alt="Togliatti on Google Earth">Togliatti, Russia</a>. Living in lovely Hillsboro, <a className="link" href="https://www.instagram.com/p/CTYrHeGL70g/" target="_blank" alt="Oregon, Instagram photo">Oregon</a>. I’m an O1 visa holder and currently working on the greencard. Married to a beautiful woman and we have almost 3 years old dragon-blood son.
                    </p><p className="subtitle">I love how through design you can change people’s preconceived notion about well-established process and open new possibilities. I’m always have been inspired by tech industry to explore and create. On my spare time I enjoy adjacent areas to design such as 3D, coding, art and game development.
                    </p><p className="subtitle">Also I play ultimate frisbee and cheer for the <a className="link" href="https://duckduckgo.com/?q=arsenal+fc&va=b&t=hc&ia=web" target="_blank">Arsenal FC</a>.
                    </p><p className="subtitle">Random, but I recently discovered that my parents gave me a name that is well designed.</p>
                  <div className="name">
                    <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="165" height="56" viewBox="0 0 165 56" >
                    <path className="A_1" d="M140.247 22.8785H143.136L135.914 0.46582H132.994L125.771 22.8785H128.552L130.509 16.4482H138.306L140.247 22.8785ZM134.376 3.7586H134.454L137.591 14.1029H131.223L134.376 3.7586Z" />
                    <path className="S_1" d="M84.9082 16.9143C85.1412 20.8905 88.1699 23.3446 92.7985 23.3446C97.4891 23.3446 100.518 20.7818 100.518 16.759C100.518 13.3886 98.6851 11.4937 94.3361 10.422L92.3791 9.92494C89.4591 9.19494 88.2165 8.07664 88.2165 6.13514C88.2165 3.85194 89.9406 2.48512 92.814 2.48512C95.4544 2.48512 97.1629 3.85193 97.4425 6.1662H100.114C99.9276 2.43852 97.0232 0 92.7985 0C88.3252 0 85.4518 2.46959 85.4518 6.29046C85.4518 9.53664 87.3312 11.5092 91.4938 12.5654L93.4197 13.0469C96.4485 13.7924 97.7532 14.9573 97.7532 16.8988C97.7532 19.3063 95.7961 20.8595 92.814 20.8595C89.8318 20.8595 87.8593 19.3684 87.5797 16.9143H84.9082Z"/>
                    <path className="R" d="M51.5643 13.9476L55.7424 22.8785H58.8332L54.2668 13.3884C56.8141 12.5497 58.4449 10.1423 58.4449 7.20671C58.4449 3.04413 55.6647 0.46582 51.2226 0.46582H43.7051V22.8785H46.4076V13.9476H51.5643ZM46.4076 2.90434H50.974C53.9717 2.90434 55.6802 4.48861 55.6802 7.26883C55.6802 10.0646 53.9407 11.6333 50.8498 11.6333H46.4076V2.90434Z" />
                    <path className="Y_1" d="M10.2045 22.8785V13.637L17.6754 0.46582H14.6156L8.94643 10.7169H8.72898L3.0598 0.46582H0L7.47089 13.637V22.8785H10.2045Z"/>
                    <path className="V_2" d="M155.467 51.5857H155.389L149.58 32.4658H146.707L153.929 54.8785H156.849L164.072 32.4658H161.307L155.467 51.5857Z" />
                    <path className="V_1" d="M155.467 19.5857H155.389L149.58 0.46582H146.707L153.929 22.8785H156.849L164.072 0.46582H161.307L155.467 19.5857Z" />
                    <path className="O_3" d="M142.669 45.4818V41.8628C142.669 35.6656 139.547 32 134.453 32C129.358 32 126.236 35.6656 126.236 41.8628V45.4818C126.236 51.679 129.358 55.3446 134.453 55.3446C139.547 55.3446 142.669 51.679 142.669 45.4818ZM134.453 52.7507C131.051 52.7507 129.001 50.1414 129.001 45.4662V41.8783C129.001 37.2032 131.051 34.5938 134.453 34.5938C137.854 34.5938 139.904 37.2032 139.904 41.8783V45.4662C139.904 50.1414 137.854 52.7507 134.453 52.7507Z" />
                    <path className="L_2" d="M121.112 52.3312H110.488V32.4658H107.77V54.8785H121.112V52.3312Z" />
                    <path className="L_1" d="M121.112 20.3312H110.488V0.46582H107.77V22.8785H121.112V20.3312Z" />
                    <path className="Y_2" d="M93.9467 54.8785V45.637L101.418 32.4658H98.3578L92.6886 42.7169H92.4712L86.802 32.4658H83.7422L91.2131 45.637V54.8785H93.9467Z" />
                    <path className="O_2" d="M79.8606 45.4818V41.8628C79.8606 35.6656 76.7386 32 71.6441 32C66.5497 32 63.4277 35.6656 63.4277 41.8628V45.4818C63.4277 51.679 66.5497 55.3446 71.6441 55.3446C76.7386 55.3446 79.8606 51.679 79.8606 45.4818ZM71.6441 52.7507C68.2426 52.7507 66.1924 50.1414 66.1924 45.4662V41.8783C66.1924 37.2032 68.2426 34.5938 71.6441 34.5938C75.0457 34.5938 77.0959 37.2032 77.0959 41.8783V45.4662C77.0959 50.1414 75.0457 52.7507 71.6441 52.7507Z" />
                    <path className="O_1" d="M79.8606 13.4818V9.86282C79.8606 3.66555 76.7386 0 71.6441 0C66.5497 0 63.4277 3.66555 63.4277 9.86282V13.4818C63.4277 19.679 66.5497 23.3446 71.6441 23.3446C76.7386 23.3446 79.8606 19.679 79.8606 13.4818ZM71.6441 20.7507C68.2426 20.7507 66.1924 18.1414 66.1924 13.4662V9.87835C66.1924 5.20322 68.2426 2.59384 71.6441 2.59384C75.0457 2.59384 77.0959 5.20322 77.0959 9.87835V13.4662C77.0959 18.1414 75.0457 20.7507 71.6441 20.7507Z" />
                    <path className="M" d="M45.0694 46.2738L44.9296 37.2031H45.1315L49.6358 49.6131H51.7792L56.2835 37.2031H56.4854L56.3456 46.2738V54.8785H58.7841V32.4658H55.7088L50.8162 46.3825H50.6143L45.6907 32.4658H42.6309V54.8785H45.0694V46.2738Z" />
                    <path className="A_2" d="M35.5657 54.8785H38.4546L31.2322 32.4658H28.3122L21.0898 54.8785H23.8701L25.8271 48.4482H33.6242L35.5657 54.8785ZM29.6946 35.7586H29.7722L32.9097 46.1029H26.5416L29.6946 35.7586Z" />
                    <path className="A_3" d="M35.5657 22.8785H38.4546L31.2322 0.46582H28.3122L21.0898 22.8785H23.8701L25.8271 16.4482H33.6242L35.5657 22.8785ZM29.6946 3.7586H29.7722L32.9097 14.1029H26.5416L29.6946 3.7586Z" />
                    <path className="S_2" d="M1.16406 48.9143C1.39704 52.8905 4.42578 55.3446 9.05432 55.3446C13.745 55.3446 16.7737 52.7818 16.7737 48.759C16.7737 45.3886 14.9409 43.4937 10.592 42.422L8.63495 41.9249C5.71494 41.1949 4.47238 40.0766 4.47238 38.1351C4.47238 35.8519 6.19643 34.4851 9.06985 34.4851C11.7103 34.4851 13.4188 35.8519 13.6984 38.1662H16.3699C16.1835 34.4385 13.279 32 9.05432 32C4.5811 32 1.70768 34.4696 1.70768 38.2905C1.70768 41.5366 3.58705 43.5092 7.74963 44.5654L9.6756 45.0469C12.7043 45.7924 14.009 46.9573 14.009 48.8988C14.009 51.3063 12.052 52.8595 9.06985 52.8595C6.0877 52.8595 4.11514 51.3684 3.83557 48.9143H1.16406Z" />
                    </svg>
                  </div>
                </div> 

                <div className="item-2">
              <div className="myvideo"><video autoPlay muted playsinline="" loop="true" src="../images/about/me.mp4"></video></div>
              <p className="block-end">This is me working on this page, while listening <a className="link" href="https://open.spotify.com/playlist/37i9dQZF1DXaWgNWdGsjlE?si=555a4c2f75974958" target="_blank" alt="Sludge Playlist on Spotify">Sludge</a> playlist and watching Silicon Valley on the background</p>
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
                <li><a className="link" href="https://www.amazon.com/ZINGYOU-Microphone-BM-800-Double-layer-Broadcasting/dp/B0756V2B6R/ref=asc_df_B0756V2B6R/?tag=hyprod-20&linkCode=df0&hvadid=312155612850&hvpos=&hvnetw=g&hvrand=7241119365179716924&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9032905&hvtargid=pla-563974502298&psc=1" target="_blank" alt="Microphone: Amazon Link">No name Microphone</a></li>
                </ul>

                <ul>
                <li className="h4">Products I especially adore</li>
                <li><a className="link" href="https://bellroy.com/" target="_blank" alt="Bellroy, Wallets & Accessories">Bellroy</a></li>
                <li><a className="link" href="https://www.allbirds.com" target="_blank" alt="Airbirds, my favorite shoes">Airbirds</a></li>
                <li><a className="link" href="https://sputnik-bags.ru" target="_blank" alt="Bags from my home town">Sputnik bags</a></li>
                <li><a className="link" href="http://Shwoodshop.com" target="_blank" alt="Portland, Oregon based wood glasses">Shwood Eyewear</a></li>
                </ul>
                
                  </div>
                <div className="item-3">
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
                  <li>Twitter <a className="link" href="https://twitter.com/yaosamo" target="_blank" alt="Twitter">@yaosamo</a></li>
                  <li>GitHub <a className="link" href="https://github.com/yaosamo" target="_blank" alt="GitHub">@yaosamo</a></li>
                  <li>Instagram <a className="link" href="https://instagram.com/yaosamo" target="_blank" alt="Instagram">@yaosamo</a></li>
                  <li>Spotify <a className="link" href="https://open.spotify.com/user/yaosamo" target="_blank" alt="Spotify">@yaosamo</a></li>
                  <li>Email yaosamo@gmail.com</li>
                </ul>
                  </div>

                <div className="item">
                  <p className="thanks">Thank you very much for visiting! I do not use tracking of anykind on this website. Enjoy and be safe!</p>
                  </div>

              </div>
            
     
      <style jsx>{`
        .svg {
          margin: auto;
        }

        .A_1, .Y_1, .R, .S_1, .A_2, .O_2, .L_2, .V_2  {animation: yr 4s infinite;} 
        
        @keyframes yr {
          0%,20%,80%,100% { opacity: .2
          }
          30%,70% {opacity: 1}
        }

        .A_3, .S_2, .M, .O_1, .Y_2, .L_1, .O_3, .V_1   {animation: sm 4s infinite;} 
        
        @keyframes sm {
          0%,20%,80%,100% { opacity: 1
          }
          30%,70% {opacity: .2}
        }

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

        .item li {}
        .item, .item-3 {grid-column: 1 / 5;}
        .item-2 {
          grid-column: 5 / 8;
          padding: 3.5rem;
          background: var(--sidebar-background);
          border-radius: 0.5rem;  
        }
        .item-2 ul {color: var(--secondary-text);}

        // header on sidebar more contrast
        @media (prefers-color-scheme: dark) {
          .item-2 .h4 {color: var(--white);}
          .svg {fill: var(--white)}
        }
        @media (prefers-color-scheme: light) {
          .item-2 .h4 {color: var(--dark);}
          .svg {fill: var(--dark)}
        }
        
        .item-3 {margin-top: -479px;}

        @media (max-width: 414px) {
          .content {grid-column: 1;}
          .item {grid-column: 1 / 8}
          .item-2 {padding: 0; background: none;}
          .item-2, .item-3 {grid-column: 1 / 8}
          .item-3 {margin-top: 0;}
        }

        .cursor {
          width: 2px;
          height: 1.5rem;
          background-color: var(--active);
          margin: 0px 8px;
          animation: cursor 0.5s infinite alternate;
        }

        .myvideo {
          overflow: overlay;
          width: 100%;
          height: 294px;
          display: flex;
          justify-content: center;
          border-radius: 0.25rem;
          margin-block-end: 1.5rem;
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
          overflow-y: auto;
        }

        .gallery img {
          height: 24rem
        }

        .block-end {
          margin-block-end: 3.5rem;
          color: var(--secondary-text);
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

        .name {
          width: 20rem;
          height: 7rem;
          background-color: var(--sidebar-background);
          border-radius: 0.25rem;
          display: flex;
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

        .subtitle {
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 180%;
          text-align: left;
          margin-block-start: 0.5em;
          max-width: 42.5rem; 
          margin-block-end: 2rem;
        }

        h1 {
          margin-block-start: 1em;
          margin-block-end: 0em;
        }

        p {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }

      `}</style> 
     
    </Layout>

    
    )
}

