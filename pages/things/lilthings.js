import Head from "next/head";
import Layout from "../../components/layout";
import projects from "../../components/data/side-projects.json";
import styles from "../../components/lilthings.module.css";

export default function LilThings() {
  return (
    <Layout>
      <Head>
        <title>Lil Things by Yaroslav Samoylov</title>
        <meta property="og:url" content="https://lilthings.yaosamo.com" />
        <meta property="og:title" content="Lil Things" />
        <meta
          property="og:description"
          content="A small collection of side projects by Yaroslav Samoylov."
        />
        <meta
          name="description"
          content="A small collection of side projects by Yaroslav Samoylov."
        />
      </Head>

      <div className="content">
        <section className={styles.container}>
          <p className={styles.eyebrow}>lilthings.yaosamo.com</p>
          <h1 className={styles.title}>My Projects</h1>
          <p className={styles.subtitle}>Simple things I made for fun and learning.</p>

          <ul className={styles.list}>
            {projects.map((project) => (
              <li className={styles.item} key={project.name}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <h2>{project.name}</h2>
                  <p>{project.desc}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
