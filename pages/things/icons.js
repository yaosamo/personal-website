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
        <title>Chameleon / Audiobook Player</title>
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
