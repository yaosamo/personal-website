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
        <section className={styles.page}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>yaosamo · lil things</p>
            <h1 className={styles.title}>Crafted side projects</h1>
            <p className={styles.subtitle}>
              A hand-picked list of experiments, products, and tiny ideas I keep refining.
            </p>
          </header>

          <ul className={styles.list}>
            {projects.map((project, index) => (
              <li key={project.name} className={styles.item}>
                <a href={project.url} target="_blank" rel="noreferrer" className={styles.link}>
                  <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.copy}>
                    <span className={styles.name}>{project.name}</span>
                    <span className={styles.desc}>{project.desc}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
