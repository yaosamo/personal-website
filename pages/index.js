import Head from 'next/head'
import Link from 'next/link'
import Layout from '/components/layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yaroslav Samoylov — A curious product designer.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1>
        Hayo!<br></br>I’m Yaroslav<br></br>Samoylov
        </h1>

        <p className="description">A curious multidisciplinary designer from Russia based in Hillsboro, Oregon 🌲.</p>
        <p className="description">Currently <a href="https://www.gubagoo.com" target="_blank">@gubagoo</a>, where we're building modern service to buy car online.</p>
        

        <div className="grid">
          <h2>Things I create</h2>
          <Link href="/things/podcast/">
          <div className="card">

              <div className="content"><h3>Podcast "And Designer"</h3>
              <p>Explore different aspects of design, technology and business through the lenses of a product designer.</p>
              </div>
              <img src="../images/home/Arrow-right.svg" alt="Podcast 'And designer'" className="openpage"/></div>
        
            
            </Link>
        </div>

      <footer>
        <h3>
        Some great people & friends (A → Z):
        </h3>
      </footer>

      <style jsx>{`
        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 160%;
          font-size: 1.25rem;
        }

        .grid {
          display: flex;
          align-items: left;
          justify-content: left ;
          flex-wrap: wrap;
          margin-top: 5.5rem;
        }

        h1 {
          margin-block-end: 1.5rem;
        }

        .grid h2 {
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
          transition: color 0.15s ease, border-color 0.15s ease;
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
        .content {padding: 0.5rem;}
        .openpage {
          background: #AEA9CA;
          border-radius: 3rem;
        }
        .card p {
          margin: 0;
          line-height: 1.5;
        }

        footer {
          margin-block-start: 5.5rem;
        }

      `}</style>

    </Layout>
  )
}
