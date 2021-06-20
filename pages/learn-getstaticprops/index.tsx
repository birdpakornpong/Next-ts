import React, { ReactElement } from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";

interface Props {
  countUnits: number[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const countUnits = [1, 2, 3, 4, 5];
  return { props: { countUnits } };
};

export default function index({ countUnits }: Props): ReactElement {
  return (
    <>
      <Layout>
        <Head>
          <title>Meow Activity</title>
        </Head>
        <h1>อี Meow ร้อง</h1>
        <ul>
          {countUnits.map((count) => (
            <li>เหมียวร้องครั้งที่ {count}</li>
          ))}
        </ul>
      </Layout>
    </>
  );
}
