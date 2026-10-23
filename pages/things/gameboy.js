import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import Image from "next/image";

// Original solution
// var images =[];

export default function GamesScreenshots() {
  //call images
  function importAll(r) {
    return r.keys().map(r);
  }
  const images = importAll(
    require.context(
      "../../public/images/games/gameboy/",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return (
    <Layout
      title="Game Boy Games Screenshots"
      description="Screenshots of official Game Boy releases for your inspiration, collected by Yaroslav Samoylov."
    >
      <Head>
        <meta name="theme-color" content="#fafafa" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Link href="/">
        <div className="arrowShape">
          <img src="../images/home/Arrow-right.svg" className="arrow" alt="Back" />
        </div>
      </Link>

      <div className="content">
        <div className="header">
          <h1 className="title">Gameboy games screenshots</h1>
          <p className="subtitle">
            Some screenshots of official releases for your inspiration. <br />{" "}
            Credits:{" "}
            <a
              className="url"
              href="https://retroshark.itch.io/"
              target="_blank"
            >
              retroshark
            </a>
            ,{" "}
            <a className="url" href="https://polyducks.itch.io" target="_blank">
              Polyducks
            </a>
          </p>
        </div>
      </div>

      <div className="content">
        <div className="__screenshots">
          <div className="__item">
            {/* Original render */}
            {images.map((image) => (
              <Image src={image} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
  

      .content {
        max-width: 40rem;
        padding-bottom: 3.5rem;
      }
        
        .title {
          text-align: left;
        }

        .subtitle {
          text-align: left;
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

        .__screenshots {
          display: flex;
          flex-direction: row:
          flex-wrap: wrap;
          align-items: flex-start;
        }

      `}</style>
    </Layout>
  );
}
