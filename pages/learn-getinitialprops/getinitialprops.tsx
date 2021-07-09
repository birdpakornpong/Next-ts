import Link from "next/link";
import React, { ReactElement } from "react";

interface Props {
  ownersList: Data[];
}

interface Data {
  v: string;
  name: string;
}

export default function List({ ownersList }: Props): ReactElement {
  return (
    <div>
      <h1>getInitialProps</h1>
      {ownersList &&
        ownersList.map((e) => (
          <h1 key={e.v}>
            <Link as={`/${e.v}/${e.name}`} href="/[verhicle]/[person]">
              <a>
                {e.v} and {e.name}
              </a>
            </Link>
          </h1>
        ))}
    </div>
  );
}
// getinitialprops ดึงข้อมูลแบบ Server-Side  ลองดูที่ Network => Preview อันแรกของหน้า
List.getInitialProps = async () => {
  const response = await fetch("http://localhost:5000/verhicle");
  const ownersList = await response.json();
  return { ownersList };
};
