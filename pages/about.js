import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/about.module.css";
import Projects from "../components/data/side-projects.json";
import FriendlyDesigns from "../components/data/friendly-designs.json";
import MyTech from "../components/data/my-tech.json";

function SideProjects({ Project, i }) {
  return (
    <>
      {" "}
      <div className={styles.project}>
        <div className={styles.label}>
          <p className={styles.title}>{Project.name}</p>
          <p className={styles.desc}> {Project.desc}</p>
        </div>
        <img src="../images/home/Arrow-right.svg" className={styles.arrow} />
      </div>
    </>
  );
}

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hi, it's Yaric</title>
      </Head>
      <div className="content">
        <div className={styles.container}>
          <div>
            <Link href="/">
              <div className={styles.arrowback}>
                <img
                  src="../images/home/Arrow-right.svg"
                  className={styles.arrow}
                />
              </div>
            </Link>
            <p className={styles.headingL}>
              I love working on{" "}
              <a className={styles.headingHighlight}> side projects </a>
              especially on applications that solve someone elses problem
              perfectly and not trying to be flexible to fit everyone needs.
              Here’s the most notable things:
            </p>
            <div className={styles.projectscontainer}>
              {Projects.map((Project, i) => (
                <SideProjects Project={Project} key={i} />
              ))}
            </div>
          </div>
          <img className={styles.me} src="../images/about/me2@2x.webp" />

          <div>
            <div className={styles.timestamp}>
              <p>October 22, 2022 at 8:33 PM</p>
              <div className={styles.caret} />
            </div>
            <p className={styles.headingL}>
              Hello! I’m Yaroslav Samoylov a product designer and design
              engineer. Based in beautiful Oregon. I’m working on tools for
              dealerships at Gubagoo. At Gubagoo we collaborated with teams at
              Facebook, Apple, Google and many more. Our clients include BMW,
              Toyota, Mercedes, Volvo, Porsche and pretty much every automotive
              manufacturer.
              <br />
              <br />
              I’ve always been inspired by the tech industry, computers and
              software. In my spare time I explore adjacent areas to design such
              as 3D, development, art and game development and a bit of hardware
              (arduino).
              <br />
              <br />
              Also I play ultimate frisbee and support Arsenal Football Club.
              Random, but I recently discovered that my parents gave me a name
              that is well designed:
            </p>
            <div className={styles.namesvg}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="165"
                height="56"
                viewBox="0 0 165 56"
              >
                <path
                  className={styles.A_1}
                  d="M140.247 22.8785H143.136L135.914 0.46582H132.994L125.771 22.8785H128.552L130.509 16.4482H138.306L140.247 22.8785ZM134.376 3.7586H134.454L137.591 14.1029H131.223L134.376 3.7586Z"
                />
                <path
                  className={styles.S_1}
                  d="M84.9082 16.9143C85.1412 20.8905 88.1699 23.3446 92.7985 23.3446C97.4891 23.3446 100.518 20.7818 100.518 16.759C100.518 13.3886 98.6851 11.4937 94.3361 10.422L92.3791 9.92494C89.4591 9.19494 88.2165 8.07664 88.2165 6.13514C88.2165 3.85194 89.9406 2.48512 92.814 2.48512C95.4544 2.48512 97.1629 3.85193 97.4425 6.1662H100.114C99.9276 2.43852 97.0232 0 92.7985 0C88.3252 0 85.4518 2.46959 85.4518 6.29046C85.4518 9.53664 87.3312 11.5092 91.4938 12.5654L93.4197 13.0469C96.4485 13.7924 97.7532 14.9573 97.7532 16.8988C97.7532 19.3063 95.7961 20.8595 92.814 20.8595C89.8318 20.8595 87.8593 19.3684 87.5797 16.9143H84.9082Z"
                />
                <path
                  className={styles.R}
                  d="M51.5643 13.9476L55.7424 22.8785H58.8332L54.2668 13.3884C56.8141 12.5497 58.4449 10.1423 58.4449 7.20671C58.4449 3.04413 55.6647 0.46582 51.2226 0.46582H43.7051V22.8785H46.4076V13.9476H51.5643ZM46.4076 2.90434H50.974C53.9717 2.90434 55.6802 4.48861 55.6802 7.26883C55.6802 10.0646 53.9407 11.6333 50.8498 11.6333H46.4076V2.90434Z"
                />
                <path
                  className={styles.Y_1}
                  d="M10.2045 22.8785V13.637L17.6754 0.46582H14.6156L8.94643 10.7169H8.72898L3.0598 0.46582H0L7.47089 13.637V22.8785H10.2045Z"
                />
                <path
                  className={styles.V_2}
                  d="M155.467 51.5857H155.389L149.58 32.4658H146.707L153.929 54.8785H156.849L164.072 32.4658H161.307L155.467 51.5857Z"
                />
                <path
                  className={styles.V_1}
                  d="M155.467 19.5857H155.389L149.58 0.46582H146.707L153.929 22.8785H156.849L164.072 0.46582H161.307L155.467 19.5857Z"
                />
                <path
                  className={styles.O_3}
                  d="M142.669 45.4818V41.8628C142.669 35.6656 139.547 32 134.453 32C129.358 32 126.236 35.6656 126.236 41.8628V45.4818C126.236 51.679 129.358 55.3446 134.453 55.3446C139.547 55.3446 142.669 51.679 142.669 45.4818ZM134.453 52.7507C131.051 52.7507 129.001 50.1414 129.001 45.4662V41.8783C129.001 37.2032 131.051 34.5938 134.453 34.5938C137.854 34.5938 139.904 37.2032 139.904 41.8783V45.4662C139.904 50.1414 137.854 52.7507 134.453 52.7507Z"
                />
                <path
                  className={styles.L_2}
                  d="M121.112 52.3312H110.488V32.4658H107.77V54.8785H121.112V52.3312Z"
                />
                <path
                  className={styles.L_1}
                  d="M121.112 20.3312H110.488V0.46582H107.77V22.8785H121.112V20.3312Z"
                />
                <path
                  className={styles.Y_2}
                  d="M93.9467 54.8785V45.637L101.418 32.4658H98.3578L92.6886 42.7169H92.4712L86.802 32.4658H83.7422L91.2131 45.637V54.8785H93.9467Z"
                />
                <path
                  className={styles.O_2}
                  d="M79.8606 45.4818V41.8628C79.8606 35.6656 76.7386 32 71.6441 32C66.5497 32 63.4277 35.6656 63.4277 41.8628V45.4818C63.4277 51.679 66.5497 55.3446 71.6441 55.3446C76.7386 55.3446 79.8606 51.679 79.8606 45.4818ZM71.6441 52.7507C68.2426 52.7507 66.1924 50.1414 66.1924 45.4662V41.8783C66.1924 37.2032 68.2426 34.5938 71.6441 34.5938C75.0457 34.5938 77.0959 37.2032 77.0959 41.8783V45.4662C77.0959 50.1414 75.0457 52.7507 71.6441 52.7507Z"
                />
                <path
                  className={styles.O_1}
                  d="M79.8606 13.4818V9.86282C79.8606 3.66555 76.7386 0 71.6441 0C66.5497 0 63.4277 3.66555 63.4277 9.86282V13.4818C63.4277 19.679 66.5497 23.3446 71.6441 23.3446C76.7386 23.3446 79.8606 19.679 79.8606 13.4818ZM71.6441 20.7507C68.2426 20.7507 66.1924 18.1414 66.1924 13.4662V9.87835C66.1924 5.20322 68.2426 2.59384 71.6441 2.59384C75.0457 2.59384 77.0959 5.20322 77.0959 9.87835V13.4662C77.0959 18.1414 75.0457 20.7507 71.6441 20.7507Z"
                />
                <path
                  className={styles.M}
                  d="M45.0694 46.2738L44.9296 37.2031H45.1315L49.6358 49.6131H51.7792L56.2835 37.2031H56.4854L56.3456 46.2738V54.8785H58.7841V32.4658H55.7088L50.8162 46.3825H50.6143L45.6907 32.4658H42.6309V54.8785H45.0694V46.2738Z"
                />
                <path
                  className={styles.A_2}
                  d="M35.5657 54.8785H38.4546L31.2322 32.4658H28.3122L21.0898 54.8785H23.8701L25.8271 48.4482H33.6242L35.5657 54.8785ZM29.6946 35.7586H29.7722L32.9097 46.1029H26.5416L29.6946 35.7586Z"
                />
                <path
                  className={styles.A_3}
                  d="M35.5657 22.8785H38.4546L31.2322 0.46582H28.3122L21.0898 22.8785H23.8701L25.8271 16.4482H33.6242L35.5657 22.8785ZM29.6946 3.7586H29.7722L32.9097 14.1029H26.5416L29.6946 3.7586Z"
                />
                <path
                  className={styles.S_2}
                  d="M1.16406 48.9143C1.39704 52.8905 4.42578 55.3446 9.05432 55.3446C13.745 55.3446 16.7737 52.7818 16.7737 48.759C16.7737 45.3886 14.9409 43.4937 10.592 42.422L8.63495 41.9249C5.71494 41.1949 4.47238 40.0766 4.47238 38.1351C4.47238 35.8519 6.19643 34.4851 9.06985 34.4851C11.7103 34.4851 13.4188 35.8519 13.6984 38.1662H16.3699C16.1835 34.4385 13.279 32 9.05432 32C4.5811 32 1.70768 34.4696 1.70768 38.2905C1.70768 41.5366 3.58705 43.5092 7.74963 44.5654L9.6756 45.0469C12.7043 45.7924 14.009 46.9573 14.009 48.8988C14.009 51.3063 12.052 52.8595 9.06985 52.8595C6.0877 52.8595 4.11514 51.3684 3.83557 48.9143H1.16406Z"
                />
              </svg>
            </div>
          </div>
          <div className={styles.friends}>
            <p className={styles.headingL}>
              Sometimes I design things for my friends
            </p>
            <div className={styles.designs}>
              {FriendlyDesigns.map((design, i) => (
                <img className={styles.designimage} src={design.img} />
              ))}
            </div>
          </div>
          <div className={styles.tech}>
            <p className={styles.headingL}>Software I use and my setup</p>
            {MyTech.map((item, i) => (
              <p>{item.name}</p>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
