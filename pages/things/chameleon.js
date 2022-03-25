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
              <video
                width="414"
                autoPlay
                muted
                playsinline=""
                loop="true"
                src="../../images/chameleon/Design.mp4"
              ></video>
              <video
                width="414"
                autoPlay
                muted
                playsinline=""
                loop="true"
                src="../../images/chameleon/Design.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
