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
          <a className={styles.headingHighlight}> side projects </a>especially
          on applications that solve someone elses problem perfectly and not
          trying to be flexible to fit everyone needs. Here’s the most notable
          things:
        </p>
        <div className={styles.container}>
          {Projects.map((Project, i) => (
            <SideProjects Project={Project} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
