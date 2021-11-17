import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";
import ThingCss from "../components/things.module.css";
import LinkCss from "../components/links.module.css";
import ThingsData from "../components/things-data";
import PeopleData from "../components/people-data";
import StudiosData from "../components/studios-data";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>👨‍💻</title>
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
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="content">
        <div className={styles.header}>
          <p>
            Hello! I’m Yaroslav Samoylov — curious designer based in Hillsboro,
            Oregon 🌲. Interested in cars, hardware user interfaces, science &
            developer tools, human interactions, productivity, ethics. Currently
            Lead Product Designer & Interim Head of Design at{" "}
            <a
              className="url"
              alt="Gubagoo.com"
              href="https://www.gubagoo.com"
              target="_blank"
            >
              Gubagoo
            </a>
            , where we're building modern service to buy car online.
          </p>
          <div className={styles.buttons}>
            <Link href="/about/">
              <a className={styles.primaryButton}>About me</a>
            </Link>
            <a
              className={styles.button}
              href="https://twitter.com/yaosamo/"
              target="_blank"
            >
              Follow me on Twitter
            </a>
          </div>
        </div>
      </div>

      {/* VR */}
      <div className={styles.workItem}>
        <div className={styles.bgContainer}>
          <div className={styles.bgMask}>
            <div className={styles.beautifulCircle1}></div>
            <div className={styles.beautifulCircle2}></div>
            <div className={styles.bg}></div>
          </div>
        </div>
        <div className={styles.work}>
          <div className={styles.__wraper}>
            <div className={styles.__header}>
              <div className={styles.__title}>
                <p>2020 — Current</p>
                <h2>Gubagoo Virtual Retailing</h2>
              </div>
              <p className={styles.description}>
                I was in charge of design “Virtual Retailing” service for
                dealerships, we build several industry breaking features such as
                real-time payments from lenders and approval under 90 seconds,
                trade-in with conditions evaluated to the pennies, checkout
                payments with Stripe integration. You can see live product on
                one of our customer's website{" "}
                <a
                  className="url"
                  href="https://www.nalleybmw.com/new-inventory/index.htm"
                  alt="Nalley BMW"
                  target="_blank"
                >
                  Nalley BMW
                </a>
              </p>
            </div>
          </div>
          {/* Pics */}
          <div className={styles.pics}>
            <div className={styles.picsContainer}>
              <picture>
                <source srcset="../images/work/VR/Loader_mob.webp 4.3x" />
                <img src="../images/work/VR/Loader_mob.webp" alt="Loader" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Menu.webp 4.3x" />
                <img src="../images/work/VR/Menu.webp" alt="Menu" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Payments_mob.webp 4.3x" />
                <img src="../images/work/VR/Payments_mob.webp" alt="Payments" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Rebates_mob.webp 4.3x" />
                <img src="../images/work/VR/Rebates_mob.webp" alt="Rebates" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/FI_mob.webp 4.3x" />
                <img src="../images/work/VR/FI_mob.webp" alt="Rebates" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Review_mob.webp 4.3x" />
                <img src="../images/work/VR/Review_mob.webp" alt="Review" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Checkout_mob.webp 4.3x" />
                <img src="../images/work/VR/Checkout_mob.webp" alt="Checkout" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Loader_desk.webp 3x" />
                <img src="../images/work/VR/Loader_desk.webp" alt="Loader" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/FI_desk.webp 3x" />
                <img src="../images/work/VR/FI_desk.webp" alt="F&I" />
              </picture>

              <picture>
                <source srcset="../images/work/VR/Review_desk.webp 3x" />
                <img src="../images/work/VR/Review_desk.webp" alt="F&I" />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* Showroom */}
      <div className={styles.workItem}>
        <div className={styles.bgContainer}>
          <div className={styles.bgMask}>
            <div className={styles.beautifulElipsis1}></div>
            <div className={styles.beautifulElipsis2}></div>
            <div className={styles.bg}></div>
          </div>
        </div>
        <div className={styles.work}>
          <div className={styles.__wraper}>
            <div className={styles.__header}>
              <div className={styles.__title}>
                <p>2020</p>
                <h2>Gubagoo Showroom</h2>
              </div>
              <p className={styles.description}>
                I was responsible for design of a crucial part of online
                purchase experience — online showroom. That dealerships would
                use on their website and in-store with shoppers side-by-side.
                Design strategy here was to make it a little bit different from
                what's out there while keeping all requirements in place. And
                another challenge was to make it scalable to work with dealer
                speficic tools.
              </p>
            </div>
          </div>
          {/* Pics */}
          <div className={styles.pics}>
            <div className={styles.picsContainer}>
              <picture>
                <source srcset="../images/work/showroom/Mobile.webp 4.3x" />
                <img
                  src="../images/work/showroom/Mobile.webp"
                  alt="Main screen mobile"
                />
              </picture>

              <picture>
                <source srcset="../images/work/showroom/Desktop-models.webp 3x" />
                <img
                  src="../images/work/showroom/Desktop-models.webp"
                  alt="Vehicles screen desktop"
                />
              </picture>

              <picture>
                <source srcset="../images/work/showroom/Desktop-vin.webp 3x" />
                <img
                  src="../images/work/showroom/Desktop-vin.webp"
                  alt="Vehicles screen desktop"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>

      {/* Things */}
      <div className="content">
        <div className={ThingCss.things}>
          <h2>Things I create</h2>
          {ThingsData.map(function (Thing) {
            return (
              <a href={Thing.link} alt={Thing.name}>
                <Link href={Thing.link}>
                  <div className={ThingCss.thing}>
                    <div className={ThingCss.__title}>
                      <h4>{Thing.name}</h4>
                      <div className={ThingCss.arrow_shape}>
                        <img
                          src="../images/home/Arrow-right.svg"
                          className={ThingCss.arrow}
                        />
                      </div>
                    </div>
                    <p>{Thing.description}</p>
                  </div>
                </Link>
              </a>
            );
          })}
        </div>
      </div>

      {/* People */}
      <div className="content">
        <h4>Some great people & friends (A → Z):</h4>
        <div className={LinkCss.link}>
          {PeopleData.map(function (Person) {
            return (
              <a href={Person.url} alt={Person.name} target="_blank">
                <div className={LinkCss.item}>
                  <p>{Person.name}</p>
                  {Person.new != null && <a className={LinkCss.__new}>New</a>}
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Studios */}
      <div className="content">
        <h4>Cool studios (A → Z):</h4>
        <div className={LinkCss.link}>
          {StudiosData.map(function (Studio) {
            return (
              <a href={Studio.url} alt={Studio.name} target="_blank">
                <div className={LinkCss.item}>
                  <p>{Studio.name}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
