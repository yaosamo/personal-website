import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yaroslav Samoylov — A curious product designer.</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet"></link>
      </Head>

      <div className="content">
        <div className="header">
          <p>
          Hello! I’m Yaroslav Samoylov — curious designer based in Hillsboro, Oregon 🌲. Currently Lead Product Designer & Head of Design <a className="link" alt="Gubagoo.com" href="https://www.gubagoo.com" target="_blank">@gubagoo</a>, where we're building modern service to buy car online. 
          </p>
          <a className="button" href="https://twitter.com/yaosamo/" target="_blank">Follow me on Twitter</a>
          </div>
          </div>



        {/* Work */}
       
          <div className="bg-container">
            <div className="bg-mask">
              <div className="bg"></div>
              <div className="beautiful-elipsis"></div>
              <div className="beautiful-circle"></div>
            </div>
          </div>
          {/* Text */}
          <div className="work">
            <div className="__wraper">
            <div className="__header">
                <div className="__title">
                  <p>2020 — Current</p>
                  <h2>Gubagoo Virtual Retailing</h2>
                </div>
                <p className="description">I was in charge of design “virtual retailing” service for dealerships, we build several components such as real-time payments from lenders, online lender approval, online trade-in with conditions, checkout payments for due at signing or full purchase. Here’s a live version from one of the dealers (for PII use “Gubagoo” if you don’t want to get called)</p>
            </div>
            </div>
          {/* Pics */}
            <div className="pics">
              <div className="pics-container">
                
                  <picture>
                  <source srcset="../images/work/Mob-Checkout@2x.png 3.5x" />
                  <img src="../images/work/Mob-Checkout@2x.png" alt="logo" /> 
                  </picture>
               
                
                  <picture>
                  <source srcset="../images/work/Mob-Checkout@2x.png 3.5x" />
                  <img src="../images/work/Mob-Checkout@2x.png" alt="logo" /> 
                  </picture>
               
                
                  <picture>
                  <source srcset="../images/work/Desk-Checkout@2x.png 3.5x" />
                  <img src="../images/work/Desk-Checkout@2x.png" alt="logo" /> 
                  </picture>
                
              </div>
            </div>

          </div>
        

      




        {/* Things */}
        <div className="content">
        <div className="things">
          <h2>Things I create
            
          </h2>
          <a href="/things/podcast/" alt="Podcast 'And Designer'"><Link href="/things/podcast/">
          <div className="thing">
              <div className="__title">
                <h4>Podcast "And Designer"</h4>
                    <div className="arrow-shape">
                    <img src="../images/home/Arrow-right.svg" className="arrow"/>
                    </div>
                </div>
                <p>Explore different aspects of design, technology and business through the lenses of a product designer.</p>
            
            </div>
            </Link>
            </a>

            <a href="https://standart.io/" alt="Standartio Icons" target="_blank">
            <div className="thing">
              <div className="__title">
                <h4>Standartio</h4>
                    <div className="arrow-shape">
                    <img src="../images/home/Arrow-right.svg" className="arrow"/>
                    </div>
              </div>  
                <p>Meticulously-made icons. Free and open source.</p>
            </div>     
            </a>
            
        </div>
        </div>



        {/* People */}
        <div className="content">
        <div className="people">
          
          <h4>
          Some great people & friends (A → Z):
          </h4>
          
          <div className="__links">

           {/* Anton Repponen */}
           <a href="https://repponen.com" alt="Anton Repponen" target="_blank">
          <div className="person">
              <p>Anton Repponen</p>
          </div>
          </a>
          

          {/* Brian Lovin */}
          <a href="http://brianlovin.com" alt="Brian Lovin" target="_blank">
          <div className="person">
              <p>Brian Lovin</p>
          </div>
          </a>
          
           {/* Denis Sharypin */}
           <a href="http://sharypin.cool" alt="Denis Sharypin" target="_blank">
          <div className="person">
              <p>Denis Sharypin</p>
          </div>
          </a>

          {/* Louis Berger */}
          <a href="https://louisberger.de" alt="Louis Berger" target="_blank">
          <div className="person">
              <p>Louis Berger</p>
          </div>
          </a>

          {/* Luc Mikelsons */}
               <a href="http://mikelsons.ca" alt="Luc Mikelsons" target="_blank">
          <div className="person">
              <p>Luc Mikelsons</p>
          </div>
          </a>

          {/* Nick Pryde */}
          <a href="https://www.nickp.design" alt="Nick Pryde" target="_blank">
          <div className="person">
              <p>Nick Pryde</p>
          </div>
          </a>

          {/* Nila Arumugam */}
               <a href="http://nila.myportfolio.com" alt="Nila Arumugam" target="_blank">
          <div className="person">
              <p>Nila Arumugam</p>
          </div>
          </a>

          {/* Rasmus Anderssonn */}
               <a href="http://rsms.me" alt="Rasmus Andersson" target="_blank">
          <div className="person">
              <p>Rasmus Andersson</p>
          </div>
          </a>

               {/* Shola Anozie */}
               <a href="http://soulprovidr.fm" alt="Shola Anozie" target="_blank">
          <div className="person">
              <p>Shola Anozie</p>
          </div>
          </a>
          </div>

        </div>
        </div>
    

      <style jsx>{`
      .content {
        max-width: 78rem;
        margin: 0 auto;
      }

      .__wraper {
        margin: 4rem 1.5rem;
      }

      .pics {
        overflow: scroll;
      }

      .pics::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
      }

      .bg-mask {
        position: relative;
        overflow: hidden;
        transform: translateZ(0);
        border-radius: 1rem;
      }

      .bg {
        background: rgba(170, 196, 200, 0.1); //library
        backdrop-filter: saturate(180%) blur(3rem);
        height: 51rem;
        z-index: 1;
    }

      .bg-container {
        z-index: 0;
        position: absolute;
        width: 100%;
        max-width: 1200px;
        padding: 0 calc((100% - 1200px) / 2);
        overflow: hidden;
    }
    
      .pics-container {
          z-index: 1;
          display: grid;
          gap: 4rem;
          padding-left: calc((100% - 1120px) / 2);
          padding-right: calc((100% - 1120px) / 2);
          grid-auto-flow: column;
          width: fit-content;
          overflow: visible;
      }

      .pics-container picture:first-child {
        padding-left: 1.5rem;
      }

      .pics-container picture:last-child {
        padding-right: 1.5rem;
      }

      .header {
        padding-block-start: 8rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 1.5rem 10rem;
      }


      .beautiful-elipsis {
        position: absolute;
        transform-origin: center 120px;
        animation: elipsis 5s ease-in-out infinite alternate-reverse;
        background-color: red;
        width: 400px;
        height: 400px;
        border-radius: 40rem;
        z-index: -1;
      }

      .beautiful-circle {
        position: absolute;
        transform-origin: center;
        animation: circle 20s ease-in-out infinite alternate-reverse;
        background-color: red;
        width: 400px;
        height: 400px;
        border-radius: 40rem;
        z-index: -1;
      }


      @keyframes elipsis {
        0% {
          background-color: red;
          transform: scale-y(1) rotate(0deg) translateY(0px);
        }
        100% {
          background-color: orange;
          transform: scaleY(4) rotate(360deg) translateY(-100px);
        }
      }


      @keyframes circle {
        0% {
          background-color: purple;
          transform: scale-y(1) translateY(300px) translateX(300px)  ;
        }
        100% {
          background-color: blue;
          transform: scaleY(2) translateY(-800px) translateX(1000px);
        }
      }

      .work {
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
      }

      .work h2 {
        margin-block-start: 0.5rem;
      }

      .work p {
        margin-block-start: 0;
        margin-block-end: 0;
      }

      .work .__header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 67rem;
        width: 100%;
      }

      .work .__header .__title {
        width: 16rem;
      }

      @media (max-width:414px)  { 
        .work .__header .__title {
          width: 100%; // to make header one line
        }
      }
      
      .work .__header p {
        max-width: 48rem;
      }

      .header p {
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 160%;
        width: 40rem;
      }

      .arrow {
        filter: var(--icon);
      }
      
      .people {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-top: 10rem;
        margin: 0 1.5rem;
      }

      .people h4 {
        margin-block-end: 1.5rem;
      }

      .people .__links {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
      }

      .person {
        background: var(--element-background);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        align-items: center;
        border-radius: 0.5rem;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        margin-block-end: 1rem;
        transition: all .1s;
        margin-right: 1rem;
      }
      
      .person:hover p {
        border-bottom: 0.5px solid rgba(35, 36, 38, 1);
      }

      .person p {
        margin-block-start: 0em;
        margin-block-end: 0em;
        border-bottom: 0.5px solid rgba(35, 36, 38, .2);
      }

      .people a { 
        color: inherit;
        text-decoration: none;
      }

      .link-preview {
        opacity: .5;
      }

      .description {
        line-height: 160%;
        font-size: 1.25rem;
      }

      .things {
        padding-top: 10rem;
        margin: 0 1.5rem;
      }

      .things h2 {
        margin-block-end: 4rem;
      }

      .things a {
        color: inherit;
        text-decoration: none;
      }

      .thing {
        max-width: 30rem;
        margin-block-end: 4rem;
        transition: all .1s;
      }

      .thing:hover .arrow-shape {
        transform: translateX(4px);
      }

      .thing p {
        margin-block-start: 0rem;
        margin-block-end: 0rem;
      }

      .thing .__title {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-block-end: 1rem;
        
      }

      .thing .arrow {
        width: 1.5rem;
        height: 1.5rem;
      }

      h4 {
        margin-right: 1rem;
        margin-block-after: 0rem;
        margin-block-end: 0rem;
      }

      .link {
        font-weight: 500;
        color: var(--active);
        text-decoration: none; 
      }

      .link:hover {
        text-decoration: none;
        background-color: var(--green-10);
        border-radius: .125rem;
        margin-left: -.15rem;
        margin-right: -.15rem;
        padding-left: .15rem;
        padding-right: .15rem;
      }

      .button {
        font-weight: 500;
        color: var(--active);
        text-decoration: none; 
        margin-block-start: 2rem;
        border: 1px solid;
        border-color: var(--green-20);
        box-sizing: border-box;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        transition: all .1s;
        width: 20rem;
        height: 4rem;
      }

      .button:active,
      .card:active,
      .person:active {
        transform: scale(0.98); 
      }

      .button:hover {
        cursor: pointer;
        border: 1px solid var(--active);
      }

      @media (max-width:1024px)  { 
        // ipad
          .bg {
            height: 59rem;
          }

        }

      @media (max-width:414px)  { 
      // smartphones, portrait iPhone, portrait 480x320 phones (Android)
        .header, .things, .people {
          margin-left: 1.5rem;
          margin-right: 1.5rem;
        }
        
        .button {
          width: 100%;
        }

        .bg {
          height: 67rem;
        }

      }

      


      `}</style>

    </Layout>
  )
}
