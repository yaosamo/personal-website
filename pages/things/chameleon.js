import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import css from "../../components/chameleon.module.css";

export default function Icons() {
  return (
    <Layout>
      <Head>
        <title>Chameleon / Audiobook Player</title>
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
                <a href="/">
                  <div className={css.button}>Get App</div>
                </a>
                <div className={css.buttonShare}>
                  <a>Share</a>
                </div>
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
          </div>
        </div>
      </div>
    </Layout>
  );
}
