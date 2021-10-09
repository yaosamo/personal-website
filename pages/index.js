import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'



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
          Hello! I’m Yaroslav Samoylov — curious designer based in Hillsboro, Oregon 🌲. Interested in cars, hardware user interfaces, science & developer tools, human interactions, productivity, ethics. Currently Lead Product Designer & Interim Head of Design at <a className="link" alt="Gubagoo.com" href="https://www.gubagoo.com" target="_blank">Gubagoo</a>, where we're building modern service to buy car online. 
          </p>
          <a className="button" href="https://twitter.com/yaosamo/" target="_blank">Follow me on Twitter</a>
          </div>
          </div>

        {/* VR */}
        <div className="work_item">
          <div className="bg-container">
              <div className="bg-mask">
                <div className="bg"></div>
                <div className="beautiful-circle"></div>
              </div>
            </div>
          <div className="work">
            <div className="__wraper">
            <div className="__header">
                <div className="__title">
                  <p>2020 — Current</p>
                  <h2>Gubagoo Virtual Retailing</h2>
                </div>
                <p className="description">I was in charge of design “Virtual Retailing” service for dealerships, we build several industry breaking features such as real-time payments from lenders and approval under 90 seconds, trade-in with conditions evaluated to the pennies, checkout payments with Stripe integration. You can see live product on one of our customer's website <a className="link" href="https://www.nalleybmw.com/new-inventory/index.htm" alt="Nalley BMW" target="_blank">Nalley BMW</a></p>
            </div>
            </div>
          {/* Pics */}
            <div className="pics">
              <div className="pics-container">
                 
                  <picture>
                  <source srcset="../images/work/VR/Loader_mob.webp 4.3x" />
                  <img src="../images/work/VR/Loader_mob.webp" alt="Loader" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/Menu.webp 4.3x" />
                  <img src="../images/work/VR/Menu.webp" alt="Menu" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/Payments_mob.webp 4.3x" />
                  <img src="../images/work/VR/Payments_mob.webp" alt="Payments" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/Rebates_mob.webp 4.3x" />
                  <img src="../images/work/VR/Rebates_mob.webp" alt="Rebates" /> 
                  </picture>
                
                  <picture>
                  <source srcset="../images/work/VR/FI_mob.webp 4.3x" />
                  <img src="../images/work/VR/FI_mob.webp" alt="Rebates" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/Review_mob.webp 4.3x" />
                  <img src="../images/work/VR/Review_mob.webp" alt="Review" /> 
                  </picture>
                
                  <picture>
                  <source srcset="../images/work/VR/Checkout_mob.webp 4.3x" />
                  <img src="../images/work/VR/Checkout_mob.webp" alt="Checkout" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/Loader_desk.webp 3x" />
                  <img src="../images/work/VR/Loader_desk.webp" alt="Loader" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/FI_desk.webp 3x" />
                  <img src="../images/work/VR/FI_desk.webp" alt="F&I" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/VR/Review_desk.webp 3x" />
                  <img src="../images/work/VR/Review_desk.webp" alt="F&I" /> 
                  </picture>
                  
                  
              </div>
            </div>

          </div>
        </div>

        {/* Showroom */}
        <div className="work_item">
          <div className="bg-container">
              <div className="bg-mask">
                <div className="bg"></div>
                <div className="beautiful-elipsis"></div>
              </div>
            </div>
          <div className="work">
            <div className="__wraper">
            <div className="__header">
                <div className="__title">
                  <p>2020</p>
                  <h2>Gubagoo Showroom</h2>
                </div>
                <p className="description">I was responsible for design of a crucial part of online purchase experience — online showroom. That dealerships would use on their website and in-store with shoppers side-by-side. Design strategy here was to make it a little bit different from what's out there while keeping all requirements in place. And another challenge was to make it scalable to work with dealer speficic tools.</p>
            </div>
            </div>
          {/* Pics */}
            <div className="pics">
              <div className="pics-container">
                 
                  <picture>
                  <source srcset="../images/work/showroom/Mobile.webp 4.3x" />
                  <img src="../images/work/showroom/Mobile.webp" alt="Main screen mobile" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/showroom/Desktop-models.webp 3x" />
                  <img src="../images/work/showroom/Desktop-models.webp" alt="Vehicles screen desktop" /> 
                  </picture>

                  <picture>
                  <source srcset="../images/work/showroom/Desktop-vin.webp 3x" />
                  <img src="../images/work/showroom/Desktop-vin.webp" alt="Vehicles screen desktop" /> 
                  </picture>
                  
              </div>
            </div>

          </div>
        </div>

        {/* Things */}
        <div className="content">
        <div className="things">
          <h2>Things I create
            
          </h2>
          <a href="/things/gameboy/" alt="Gameboy Screenshots"><Link href="/things/gameboy/">
          <div className="thing">
              <div className="__title">
                <h4>Gameboy games screenshots</h4>
                    <div className="arrow-shape">
                    <img src="../images/home/Arrow-right.svg" className="arrow"/>
                    </div>
                </div>
                <p>Over 1500 screenshots of official releases.</p>
            
            </div>
            </Link>
            </a>


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
          {/* Andreas Gysin */}
          <a href="https://ertdfgcvb.xyz" alt="Andreas Gysin" target="_blank">
          <div className="person">
              <p>Andreas Gysin</p>
              <a className="__new">New</a>
          </div>
          </a>

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

          {/* Gadzhi Kharkharov */}
          <a href="https://kkga.me/" alt="Gadzhi Kharkharov" target="_blank">
          <div className="person">
              <p>Gadzhi Kharkharov</p>
              <a className="__new">New</a>
          </div>
          </a>
          

           {/* Ilya Kolganov */}
           <a href="https://ilyakolganov.com/" alt="Ilya Kolganov" target="_blank">
          <div className="person">
              <p>Ilya Kolganov</p>
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

          {/* Noah Stokes */}
          <a href="http://noahstokes.com" alt="Noah Stokes" target="_blank">
          <div className="person">
              <p>Noah Stokes</p>
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
    
        {/* Studios */}
        <div className="content">
        <div className="people">
          
          <h4>
          Cool studios (A → Z):
          </h4>
          
          <div className="__links">
            
          {/* Collins */}
          <a href="https://www.wearecollins.com" alt="Collins" target="_blank">
          <div className="person">
              <p>Collins</p>
          </div>
          </a>

          {/* Play */}
          <a href="https://www.play.studio" alt="Play" target="_blank">
          <div className="person">
              <p>Play</p>
          </div>
          </a>

          {/* Red Antler */}
          <a href="https://redantler.com" alt="Red Antler" target="_blank">
          <div className="person">
              <p>Red Antler</p>
          </div>
          </a>
          
          </div>
          
        </div>
        </div>
   
         {/* Footer */}
         <div className="footer">
           <p>Design and code by me using NextJS. © 2021.</p>
         </div>
      <style jsx>{`
      .person .__new {
        color: red;
        font-size: 80%;
        margin-left: 0.5rem;
        
      }
      
      .work_item {
        padding-block-end: 6.5rem;
        padding-block-start: 5rem;
      }
      
      .footer {
        max-width: 75rem;
        margin: 0 auto;
        padding: 0 1.5rem;
        opacity: .5;
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
        background: var(--blur-bg);
        backdrop-filter: saturate(180%) blur(3rem);
        height: 63rem;
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

      .pics-container img {
        border-radius: 1rem;
      }

      .pics-container picture {
        margin: auto;
      }

      .header {
        padding-block-start: 8rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      }


      .beautiful-elipsis {
        position: absolute;
        transform-origin: center -200px;
        animation: elipsis 20s ease-in-out infinite alternate-reverse;
        background-color: red;
        width: 400px;
        height: 400px;
        border-radius: 40rem;
        z-index: -1;
      }

      .beautiful-circle {
        position: absolute;
        transform-origin: center;
        animation: circle 30s ease-in-out infinite alternate;
        background-color: #FF6645;
        width: 400px;
        height: 400px;
        border-radius: 40rem;
        z-index: -1;
      }


      @keyframes elipsis {
        0% {
          background-color: #FB461E;
          transform: scale-y(1) translateY(0px);
        }
        100% {
          background-color: #FB461E;
          transform: scaleY(4) rotate(360deg) translateY(-900px);
        }
      }


      @keyframes circle {
        0% {
          background-color: #5F45FF;
          transform: scale-y(1);
        }

        100% {
          background-color: #5F45FF;
          transform: scaleY(2) translateY(-1000px) translateX(1200px);
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
        max-width: 50rem;
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
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        align-items: center;
        margin-block-end: 1rem;
        transition: all .1s;
        margin-right: 1.5rem;
      }
      
      .person:hover p {
        border-bottom: 0.5px solid var(--active);
        color: var(--active);
      }

      .person p {
        margin-block-start: 0em;
        margin-block-end: 0em;
        border-bottom: 0.5px solid var(--white);
        border-opacity: 0.2;
      }

      @media (prefers-color-scheme: light) {
        .person p { // Dark underline
          border-bottom: 0.5px solid var(--dark);
        }
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
        max-width: 30rem;
        padding-top: 10rem;
      }

      .things h2 {
        margin-block-end: 4rem;
      }

      .things a {
        color: inherit;
        text-decoration: none;
      }

      .thing {
        margin-block-end: 4rem;
        
      }

      .arrow-shape {
        transition: all .3s;
        opacity: 0;
      }

      .thing:hover .arrow-shape {
        opacity: 1;
        transform: translateX(8px);
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
        margin-block-end: 0.5rem;
        
      }

      .thing .arrow {
        width: 1.5rem;
        height: 1.5rem;
      }

      h4 {
        margin-right: 0.5rem;
        margin-block-after: 0rem;
        margin-block-end: 0rem;
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
            height: 71rem;
          }

        }

      
      @media (max-width:414px)  { 
        // plus size work bg height.

        .button {
          width: 100%;
        }

        .bg {
          height: 82rem;
        }

      }

      @media (max-width:375px)  { 
        // standard work bg height

        .bg {
          height: 84rem;
        }

      }

      @media (max-width:320px)  { 
        // why am I doing this

        .bg {
          height: 90rem;
        }

      }

      `}</style>

    </Layout>
  )
}
