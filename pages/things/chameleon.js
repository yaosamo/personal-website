import Link from "next/link";
import Layout from "../../components/layout";
import css from "../../components/chameleon.module.css";

export default function Icons() {
  return (
    <Layout
      title="Chameleon: Audiobook Player"
      description="Chameleon is an audiobook player designed for long books: listen to your audiobooks from iCloud, with playlists and the last book remembered."
      image="https://design.yaosamo.com/images/chameleon/intro.png"
    >
      <Link href="/">
        <div className="arrowShape">
          <img src="../images/home/Arrow-right.svg" className="arrow" alt="Back" />
        </div>
      </Link>
      <div className={css.roundedFont}>
        <div className="content">
          <div className={css.container}>
            <div className={css.stickyHead}>
              <div className={css.logo}>
                <img src="../../images/chameleon/logo@2x.png" alt="Chameleon app icon" />
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
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdesign.yaosamo.com%2Fthings%2Fchameleon&via=yaosamo&text=I%27m%20listening%20my%20books%20on"
                >
                  <div className={css.buttonShare}>Share</div>
                </a>
              </div>
            </div>
            <div className={css.contentScroll}>
              <div className={css.contentItem}>
                <video autoPlay muted playsinline="" loop="true">
                  <source
                    src="../../images/chameleon/Design.mp4"
                    type="video/mp4"
                  />
                  <img
                    src="../../images/chameleon/design.png"
                    alt="Chameleon user interface design"
                    title="Image of User Interface Design"
                  />
                </video>
                <a>Design</a>
              </div>
              <div className={css.contentItem}>
                <img src="../../images/chameleon/2@2x.png" alt="Chameleon playlists" />
                <a>Playlists</a>
              </div>
              <div className={css.contentItem}>
                <img src="../../images/chameleon/3@2x.png" alt="Importing books into Chameleon" />
                <a>Import</a>
              </div>
              <div className={css.contentItem}>
                <img src="../../images/chameleon/4@2x.png" alt="Chameleon remembers the last book played" />
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
