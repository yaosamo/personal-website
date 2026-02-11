import Head from "next/head";
import Layout from "../../components/layout";
import projects from "../../components/data/side-projects.json";
import styles from "../../components/lilthings.module.css";

const months = [
  "Jan 2024",
  "Mar 2024",
  "Jun 2024",
  "Sep 2024",
  "Dec 2024",
  "Feb 2025",
  "Apr 2025",
];

const placeholderColors = [
  "#ded7ff",
  "#d9f7e5",
  "#ffe7d0",
  "#d8ecff",
  "#ffe0ef",
  "#ececec",
  "#fff4cc",
];

const cards = projects.map((project, index) => ({
  ...project,
  date: months[index % months.length],
  color: placeholderColors[index % placeholderColors.length],
  ratio: ["56%", "66%", "74%", "62%", "70%", "58%", "68%"][index % 7],
}));

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
            <h1 className={styles.title}>Project Masonry</h1>
            <p className={styles.subtitle}>
              Small projects presented as cards with placeholders for upcoming thumbnails.
            </p>
          </header>

          <div className={styles.masonry}>
            {cards.map((project) => (
              <article key={project.name} className={styles.card}>
                <div className={styles.topRow}>
                  <h2 className={styles.name}>{project.name}</h2>
                  <p className={styles.date}>{project.date}</p>
                </div>

                <div
                  className={styles.imagePlaceholder}
                  style={{ backgroundColor: project.color, paddingTop: project.ratio }}
                />

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.openBtn}
                >
                  Open
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
