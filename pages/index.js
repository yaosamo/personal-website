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
          A curious multi-disciplinary product designer from Russia based in Hillsboro, Oregon 🌲.</p>
          <p className="description">Currently Lead Product Designer & Head of Design <a className="link" alt="Gubagoo.com" href="https://www.gubagoo.com" target="_blank">@gubagoo</a>, where we're building modern service to buy car online.
        </p>
        <a className="button" href="https://twitter.com/yaosamo/" target="_blank">Follow me on Twitter</a>
        
        <div className="grid">
          <h2>Things I create</h2>
          <Link href="/things/podcast/">
          <div className="card">
              <div className="content">
                <h4>Podcast "And Designer"</h4>
                <p>Explore different aspects of design, technology and business through the lenses of a product designer.</p>
              </div>
              <div className="arrow-shape">
                <img src="../images/home/Arrow-right.svg" className="arrow"/>
              </div>
            </div>
            </Link>

            <a href="https://standart.io/" alt="Standartio Icons" target="_blank">
            <div className="card">
              <div className="content">
                <h4>Standartio</h4>
                <p>Meticulously-made icons. Free and open source.</p>
              </div>
              <div className="arrow-shape">
                <img src="../images/home/Arrow-right.svg" className="arrow"/>
              </div>
            </div>     
            </a>
            
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
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
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
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
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
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
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
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
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
              <img src="../images/home/Arrow-right.svg" className="arrow"/>
            </div >
          </div>
          </a>
        </div>
    

      <style jsx>{`
      .arrow {
        filter: var(--icon);
      }
      
      .people {
        margin-block-start: 5.5rem;
      }

      .person {
        background: var(--element-background);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 0.5rem;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        margin-block-end: 1rem;
        transition: all .1s;
      }
      
      .person:hover {
        background: var(--element-hover);
        transform: translateY(-1px);
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
      }

      .person p {
        margin-block-start: 0em;
        margin-block-end: 0em;
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

      .grid {
        margin-top: 5.5rem;
      }

      .card {
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 1rem;
        border-radius: 1rem;
        background: var(--element-background);
        transition: all .1s;
        margin-block-end: 1rem;
      }

      .card:hover {
        cursor: pointer;
        transform: translateY(-1px);
        background: var(--element-hover);
        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
      }

      .grid a {
        color: inherit;
        text-decoration: none;
      }

      .content {
        padding: 0.5rem;
        align-self: stretch;
      }

      .content p {
        opacity: var(--text-opacity);
      }

      .card p {
        margin: 0;
        line-height: 1.5;
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

      `}</style>

    </Layout>
  )
}
