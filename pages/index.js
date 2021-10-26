import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
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
        <div className="header">
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
          <div className="buttons">
            <Link href="/about/">
              <a className="primary-button">About me</a>
            </Link>
            <a
              className="button"
              href="https://twitter.com/yaosamo/"
              target="_blank"
            >
              Follow me on Twitter
            </a>
          </div>
        </div>
      </div>

      {/* VR */}
      <div className="work_item">
        <div className="bg-container">
          <div className="bg-mask">
            <div className="beautiful-circle-1"></div>
            <div className="beautiful-circle-2"></div>
            <div className="bg"></div>
          </div>
        </div>
        <div className="work">
          <div className="__wraper">
            <div className="__header">
              <div className="__title">
                <p>2020 — Current</p>
                <h2>Gubagoo Virtual Retailing</h2>
              </div>
              <p className="description">
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
          <div className="pics">
            <div className="pics-container">
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
      <div className="work_item">
        <div className="bg-container">
          <div className="bg-mask">
            <div className="beautiful-elipsis-1"></div>
            <div className="beautiful-elipsis-2"></div>
            <div className="bg"></div>
          </div>
        </div>
        <div className="work">
          <div className="__wraper">
            <div className="__header">
              <div className="__title">
                <p>2020</p>
                <h2>Gubagoo Showroom</h2>
              </div>
              <p className="description">
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
          <div className="pics">
            <div className="pics-container">
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
              <div className={LinkCss.url}>
                <a href={Studio.link} alt={Studio.name} target="_blank">
                  <div className={LinkCss.item}>
                    <p>{Studio.name}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}

      <style jsx>{`
        .work_item {
          padding-block-end: 6.5rem;
          padding-block-start: 5rem;
        }

        .__wraper {
          margin: 4rem 1.5rem;
        }

        .pics {
          overflow: scroll;
        }

        .pics::-webkit-scrollbar {
          display: none;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }

        .bg-mask {
          position: relative;
          overflow: hidden;
          transform: translateZ(0);
          border-radius: 1rem;
        }

        .bg {
          background: var(--blur-bg);
          backdrop-filter: saturate(180%) blur(3rem);
          height: 63rem;
          z-index: 1;
        }

        .bg-container {
          z-index: 0;
          position: absolute;
          width: 100%;
          max-width: 1200px;
          padding: 0 calc((100% - 1200px) / 2);
          overflow: hidden;
        }

        .pics-container {
          z-index: 1;
          display: grid;
          gap: 4rem;
          padding-left: calc((100% - 1120px) / 2);
          padding-right: calc((100% - 1120px) / 2);
          grid-auto-flow: column;
          width: fit-content;
          overflow: visible;
        }

        .pics-container picture:first-child {
          padding-left: 1.5rem;
        }

        .pics-container picture:last-child {
          padding-right: 1.5rem;
        }

        .pics-container img {
          border-radius: 1rem;
        }

        .pics-container picture {
          margin: auto;
        }

        .header {
          padding-block-start: 8rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .beautiful-elipsis-1 {
          position: absolute;
          transform-origin: center;
          animation: elipsis-1 8s ease-in-out infinite alternate-reverse;
          background-color: red;
          width: 500px;
          height: 600px;
          border-radius: 40rem;
          transform: translateY(300px) translateX(300px);
          z-index: -1;
        }

        @keyframes elipsis-1 {
          0% {
            background-color: #fb461e;
          }
          100% {
            background-color: #fb461e;
            transform: translateY(0px) translateX(450px) rotate(180deg);
          }
        }

        .beautiful-elipsis-2 {
          position: absolute;
          transform-origin: center;
          animation: elipsis-2 5s ease-in-out infinite alternate-reverse;
          background-color: red;
          width: 700px;
          height: 600px;
          border-radius: 40rem;
          transform: translateY(300px) translateX(300px);
          z-index: -1;
        }

        @keyframes elipsis-2 {
          0% {
            background-color: #fb461e;
          }
          100% {
            background-color: #fb461e;
            transform: translateY(750px) translateX(-50px) rotate(180deg);
          }
        }

        .beautiful-circle-1 {
          position: absolute;
          transform-origin: center;
          animation: circle-1 8s ease-in-out infinite alternate;
          background-color: #ff6645;
          width: 500px;
          height: 600px;
          border-radius: 40rem;
          transform: translateY(300px) translateX(300px);
          z-index: -1;
        }

        @keyframes circle-1 {
          0% {
            background-color: #5f45ff;
          }

          100% {
            background-color: #5f45ff;
            transform: translateY(0px) translateX(-100px) rotate(180deg);
          }
        }

        .beautiful-circle-2 {
          position: absolute;
          transform-origin: center;
          animation: circle-2 10s ease-in-out infinite alternate;
          background-color: #ff6645;
          width: 500px;
          height: 600px;
          border-radius: 40rem;
          transform: translateY(500px) translateX(200px) rotate(180deg);
          z-index: -1;
        }

        @keyframes circle-2 {
          0% {
            background-color: #5f45ff;
          }

          100% {
            background-color: #5f45ff;
            transform: translateY(300px) translateX(300px) rotate(180deg);
          }
        }

        .work {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .work h2 {
          margin-block-start: 0.5rem;
        }

        .work p {
          margin-block-start: 0;
          margin-block-end: 0;
        }

        .work .__header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 0 auto;
          max-width: 67rem;
          width: 100%;
        }

        .work .__header .__title {
          width: 16rem;
        }

        @media (max-width: 414px) {
          .work .__header .__title {
            width: 100%; // to make header one line
          }
          .buttons {
            width: 100%;
          }
        }

        .work .__header p {
          max-width: 48rem;
        }

        .header p {
          font-style: normal;
          font-weight: normal;
          font-size: 24px;
          line-height: 160%;
          width: 40rem;
        }

        .arrow {
          filter: var(--icon);
        }

        .link-preview {
          opacity: 0.5;
        }

        .description {
          line-height: 160%;
          font-size: 1.25rem;
        }

        .things {
          max-width: 30rem;
          padding-top: 10rem;
        }

        .things h2 {
          margin-block-end: 4rem;
        }

        .things a {
          color: inherit;
          text-decoration: none;
        }

        .thing {
          margin-block-end: 4rem;
        }

        .arrow-shape {
          transition: all 0.3s;
          opacity: 0;
        }

        .thing:hover .arrow-shape {
          opacity: 1;
          transform: translateX(8px);
        }

        .thing p {
          margin-block-start: 0rem;
          margin-block-end: 0rem;
          color: var(--gray-40);
        }

        .thing .__title {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-block-end: 0.5rem;
        }

        .thing .arrow {
          width: 1.5rem;
          height: 1.5rem;
        }

        h4 {
          margin-right: 0.5rem;
          margin-block-end: 0rem;
        }

        .buttons {
          margin-block-start: 2rem;
          display: flex;
          flex-direction: column;
          min-width: 20rem;
        }

        .primary-button {
          font-weight: 600;
          color: var(--button-text);
          background: var(--primary-button);
          text-decoration: none;
          box-sizing: border-box;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.1s;
          height: 4rem;
        }

        .primary-button:hover {
          background: var(--primary-button-hover);
        }

        .button {
          margin: 24px 0px;
          font-weight: 600;
          color: var(--button-text);
          text-decoration: none;
          border: 1px solid;
          border-color: var(--secondary-button);
          box-sizing: border-box;
          border-radius: 0.5rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          cursor: pointer;
          transition: all 0.1s;
          height: 4rem;
        }

        .button:active,
        .primary-button:active,
        .card:active,
        .person:active {
          transform: scale(0.98);
        }

        .button:hover {
          cursor: pointer;
          border: 1px solid var(--secondary-button-hover);
        }

        @media (max-width: 1024px) {
          // ipad

          .bg {
            height: 71rem;
          }
        }

        @media (max-width: 414px) {
          // plus size work bg height.

          .button {
            width: 100%;
          }

          .bg {
            height: 82rem;
          }
        }

        @media (max-width: 375px) {
          // standard work bg height

          .bg {
            height: 84rem;
          }
        }

        @media (max-width: 320px) {
          // why am I doing this

          .bg {
            height: 90rem;
          }
        }
      `}</style>
    </Layout>
  );
}
