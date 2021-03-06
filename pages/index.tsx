import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Website เหมียว</p>
        <p>
          This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial.</a>
        </p>
      </section>
      <h2>
        {" "}
        <Link href="/posts/first-post">
          <a>Click Meow!</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href="/learn-getstaticprops">
          <a>GetStaticProps!</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href="/learn-getinitialprops">
          <a>GetInitailProps!</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href="/fetching-swr">
          <a>data fetchingด้วยSWR!</a>
        </Link>
      </h2>
      <h2>
        {" "}
        <Link href="/javascript">
          <a>javascript</a>
        </Link>
      </h2>
    </Layout>
  );
}
