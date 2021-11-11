import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import IconsData from "../../components/icons-data";
import IconsModule from "../../components/icons-module";
import IconsCSS from "../../components/icons.module.css";

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
            return <IconsModule icon={Icon} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
