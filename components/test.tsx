import React, { useState, ReactElement } from "react";
import { useRouter } from "next/router";
interface Props {}

export default function test({}: Props): ReactElement {
  // check สามารถใช้ ที่ component ได้
  const router = useRouter();
  console.log("Router QueryTest = ", router.query);

  return (
    <div>
      <h1>Hi Test</h1>
    </div>
  );
}
