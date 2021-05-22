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
        Hayo! I’m Yaroslav Samoylov
        </h1>

        <p className="description">
        A curious and multidisciplinary designer from Russia based in Hillsboro, Oregon 🌲. Currently <a href="https://www.gubagoo.com" target="_blank">@gubagoo</a>, where we're building modern service to buy car online.
        </p>

        <div className="grid">
          <h2>Things I create</h2>
          
          <div className="card"><Link href="/things/podcast/">
            <h3>Podcast "And Designer"</h3></Link>
            <p>Explore different aspects of design, technology and business through the lenses of a product designer.</p>
          </div>
        </div>

      <footer>
        <a>
        Some great people (A → Z):{' '} Denis Sharypin, Luc Mikelsons, Melkeydev, Soulprovider. 
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: left;
          align-items: left;
        }

        footer {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: left;
          align-items: left;
          margin-block-start: 3rem;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: left;
          align-items: left;
        }
       
        .title,
        .description {
          text-align: left;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: left;
          justify-content: left ;
          flex-wrap: wrap;
          margin-top: 3rem;
        }

        h1 {
          margin-block-end: 1rem;
          line-height: 150%;
        }

        .grid h2 {
          margin-block-end: 1rem;
          line-height: 150%;
          font-size: 2rem;
        }

        .card {
          width: 100%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
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

        .card p {
          margin: 0;
          line-height: 1.5;
        }

      `}</style>

    </Layout>
  )
}
