import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'


{/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<path d="M21.667 12.5L28.3337 20L21.667 27.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.3333 20H12.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>  */}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yaroslav Samoylov — A curious product designer.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
        Hayo! I’m Yaroslav Samoylov
        </h1>
        <p className="description">
          A curious multi-disciplinary product designer from Russia based in Hillsboro, Oregon 🌲.
          <br></br>Currently Lead Product Designer & Head of Design <a className="link" href="https://www.gubagoo.com" target="_blank">@gubagoo</a>, where we're building modern service to buy car online.
        </p>
        <div className="button">
        <a className="link" href="https://twitter.com/yaosamo/" target="_blank">Follow me on Twitter</a></div>
        
        <div className="grid">
          <h2>Things I create</h2>
          <Link href="/things/podcast/">
          <div className="card">

              <div className="content"><h3>Podcast "And Designer"</h3>
                <p>Explore different aspects of design, technology and business through the lenses of a product designer.</p>
              </div>
              <div className="arrow-shape-podcast">
                <img src="../images/home/Arrow-right.svg" className="arrow-white"/>
              </div>
            </div>
            </Link>
        </div>

        <div className="people">
          <h3>
          Some great people & friends (A → Z):
          </h3>
          {/* Brian Lovin */}
          <a href="http://brianlovin.com" target="_blank">
          <div className="person">
            <div>
              <p>Brian Lovin</p>
              <p className="link-preview">brianlovin.com</p>
            </div>
            <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow-dark"/>
            </div>
          </div>
          </a>
           {/* Denis Sharypin */}
           <a href="http://sharypin.cool" target="_blank">
          <div className="person">
            <div>
              <p>Denis Sharypin</p>
              <p className="link-preview">sharypin.cool</p>
            </div>
            <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow-dark"/>
            </div>
          </div>
          </a>
               {/* Luc Mikelsons */}
               <a href="http://mikelsons.ca" target="_blank">
          <div className="person">
            <div>
              <p>Luc Mikelsons</p>
              <p className="link-preview">mikelsons.ca</p>
            </div>
            <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow-dark"/>
            </div>
          </div>
          </a>
               {/* Rasmus Anderssonn */}
               <a href="http://rsms.me" target="_blank">
          <div className="person">
            <div>
              <p>Rasmus Andersson</p>
              <p className="link-preview">rsms.me</p>
            </div>
            <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow-dark"/>
            </div>
          </div>
          </a>
               {/* Shola Anozie */}
               <a href="http://soulprovidr.fm" target="_blank">
          <div className="person">
            <div>
              <p>Shola Anozie</p>
              <p className="link-preview">soulprovidr.fm</p>
            </div>
            <div className="arrow-shape">
              <img src="../images/home/Arrow-right.svg" className="arrow-dark"/>
            </div>
          </div>
          </a>
        </div>
    

      <style jsx>{`
      .arrow-shape-podcast {
        background: #AEA9CA;
        border-radius: 3rem;
        display: inherit;
      }

      .arrow-shape {
        background: #EFEFEF;
        border-radius: 3rem;
        display: inherit;
        }

      .arrow-dark {
        width: 2.5rem;
        height: 2.5rem;
        filter: invert(10%) sepia(5%) saturate(719%) hue-rotate(182deg) brightness(99%) contrast(89%);
      }

      .arrow-white {
        width: 2.5rem;
        height: 2.5rem;
        filter: invert(99%) sepia(100%) saturate(2%) hue-rotate(306deg) brightness(113%) contrast(100%);
      }
      
      .people {
        margin-block-start: 5.5rem;
      }

      .person {
        background: #FAFAFA;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 0.5rem;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        margin-block-end: 1rem;
      }
      
      .person p {
        margin-block-start: 0em;
        margin-block-end: 0em;
      }

      .people a { 
        color: inherit;
        text-decoration: none; }

      .link-preview {
        opacity: .5;
      }

      .description {
        line-height: 160%;
        font-size: 1.25rem;
      }

      .grid {
        display: flex;
        align-items: left;
        justify-content: left;
        flex-wrap: wrap;
        margin-top: 5.5rem;
      }

      h1 {
        margin-block-end: 1.5rem;
      }

      h2 {
      margin-block-end: 1.5rem;
      }

      .card {
        min-height: 10rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 1rem;
        border-radius: 1.5rem;
        background: #FBD757;
      }

      .card:hover,
      .card:focus,
      .card:active {
        cursor: pointer;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        margin-block-end: 0.5rem;
        font-size: 1rem;
        font-weight: 600;
      }
      .content {
        padding: 0.5rem;
      }

      .card p {
        margin: 0;
        line-height: 1.5;
      }

      .link {
        font-weight: 600;
        color: #167B69;
        text-decoration: none; 
      }

      .button {
        max-width: 26rem;
        margin-block-start: 2rem;
        border: 1px solid #D3E4E1;
        box-sizing: border-box;
        border-radius: 0.5rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
      }

      `}</style>

    </Layout>
  )
}
