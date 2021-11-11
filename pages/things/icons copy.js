import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import IconsCSS from "../../components/icons.module.css";
import IconsData from "../../components/icons-data";

export default function Icons() {
  return (
    <Layout>
      <Head>
        <title>Love making icons</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="content">
        <h1>My new icons page</h1>
        <div className={IconsCSS.container}>
          {IconsData.map(function (Icon) {
            return (
              <div className={IconsCSS.icon}>
                <img src={Icon.url} />
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
