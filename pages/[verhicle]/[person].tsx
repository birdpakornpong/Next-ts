import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import Test from "../../components/test";

interface Props {}

export default function person({}: Props): ReactElement {
  const router = useRouter();
  console.log("Router Query = ", router.query);

  // http://localhost:3000/car/bird?area=100
  // ตัวอย่าง url ส่งค่าผ่าน query string

  const { area } = router.query;
  console.log("Area = ", area);

  return (
    <>
      <h4>text from router.qury</h4>
      <h2>
        {router.query.verhicle} have {router.query.person} is owner
      </h2>
      {router.query.area && <h3>{router.query.area || ""}</h3>}
      <Test />
    </>
  );
}
