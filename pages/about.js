import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import styles from "../components/about.module.css";
import Projects from "../components/data/side-projects.json";

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
        </div>
        <div>
          <p>September 20, 2022 at 8:34 PM |</p>
          <p className={styles.headingL}>
            Hello! I’m Yaroslav Samoylov a product designer and design engineer.
            I’m working on tools for dealerships at Gubagoo. At Gubagoo I
            collaborated with teams at Facebook, Apple Business Messages, Google
            Business and many more. Our clients include BMW, Toyota, Mercedes,
            Volvo, Porsche and pretty much every automotive manufacturer. 
            Living in beautiful Oregon. Married to a beautiful woman and we have
            almost 4 years old son. I’ve always been inspired by the tech
            industry, computers and software. In my spare time I explore
            adjacent areas to design such as 3D, development, art and game
            development and a bit of hardware (arduino). Also I play ultimate
            frisbee and support Arsenal Football Club.  Random, but I recently
            discovered that my parents gave me a name that is well designed:
          </p>
          <div>Yaroslav Samoylov svg</div>
        </div>
        <div className={styles.friends}>
          <p>Sometimes I design things for my friends</p>
        </div>
      </div>
    </Layout>
  );
}
