import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
interface Props {}

export default function person({}: Props): ReactElement {
  const router = useRouter();
  console.log("Router Query = ", router.query);
  return (
    <Layout>
      <h4>text from router.qury</h4>
      <h2>
        {router.query.verhicle} have {router.query.person} is owner
      </h2>
    </Layout>
  );
}
