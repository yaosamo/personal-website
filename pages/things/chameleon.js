import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import css from "../../components/chameleon.module.css";

export default function Icons() {
  return (
    <Layout>
      <Head>
        <title>Chameleon / Audiobook Player</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yaosamo" />
        <meta name="twitter:creator" content="@yaosamo" />
        <meta property="og:url" content="https://yaosamo.com" />
        <meta property="og:title" content="Yaroslav Samoylov" />
        <meta
          property="og:description"
          content="Curious designer based in Oregon"
        />
        <meta property="og:image" content="https://yaosamo.com/intro.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Yaroslav Samoylov" />
        <meta name="description" content="Curious designer based in Oregon" />
        <link rel="icon" href="favicon.svg" />
        <link rel="mask-icon" href="favicon.svg" color="#000000;" />
      </Head>
      <div className={css.roundedFont}>
        <div className="content">
          <div className={css.container}>
            <div className={css.stickyHead}>
              <div className={css.logo}>
                <img src="../../images/chameleon/logo@2x.png" />
              </div>
              <p className={css.subTitle}>Audiobook player</p>
              <h1 className={css.title}>Chameleon</h1>
              <div className={css.buttons}>
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/chameleon-audiobook-player/id1615705830"
                >
                  <div className={css.button}>Get App</div>
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fyaosamo.com%2Fthings%2Fchameleon&via=yaosamo&text=I%27m%20listening%20my%20books%20on"
                >
                  <div className={css.buttonShare}>Share</div>
                </a>
              </div>
            </div>
            <div className={css.contentScroll}>
              <div className={css.contentItem}>
                <video
                  width="414"
                  autoPlay
                  muted
                  playsinline=""
                  loop="true"
                  src="../../images/chameleon/Design.mp4"
                ></video>
                <a>Design</a>
              </div>
              <div className={css.contentItem}>
                <img width="414" src="../../images/chameleon/2@2x.png" />
                <a>Playlists</a>
              </div>
              <div className={css.contentItem}>
                <img width="414" src="../../images/chameleon/3@2x.png" />
                <a>Import</a>
              </div>
              <div className={css.contentItem}>
                <img width="414" src="../../images/chameleon/4@2x.png" />
                <a>
                  Remembers
                  <br /> Last Book Played
                </a>
              </div>
            </div>
          </div>
          <div className={css.about}>
            <p>
              Hi, my name is Yaroslav Samoylov. I made this app for myself
              because I love to listen my library of audiobooks that I store on
              iCloud. If you’d like you can support it by sharing it. Thank you
              for checking it out!
            </p>
            <a target="_blank" href="http://twitter.com/yaosamo">
              <div className={css.buttonFollow}>Follow me on Twitter</div>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
