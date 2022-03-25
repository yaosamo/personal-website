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
              <p className={css.subTitle}>Audiobook player</p>
              <h1 className={css.title}>Chameleon</h1>
              <button>Get App</button>
              <button>Share</button>
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
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
