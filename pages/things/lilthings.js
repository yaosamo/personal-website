import Head from "next/head";
import Layout from "../../components/layout";
import projects from "../../components/data/side-projects.json";
import styles from "../../components/lilthings.module.css";

export default function LilThings() {
  return (
    <Layout hideFooter>
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

      <section className={styles.container}>
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
    </Layout>
  );
}
