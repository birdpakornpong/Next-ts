import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

interface Props {}

export default function firstPost({}: Props): ReactElement {
  return (
    <>
      <Layout>
        <Head>
          <title>Meow Zone</title>
        </Head>
        {/* <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2> */}
        <Image
          src="/images/meow.jpg"
          height={400}
          width={300}
          alt="Your เหมียว"
        />
      </Layout>
    </>
  );
}
