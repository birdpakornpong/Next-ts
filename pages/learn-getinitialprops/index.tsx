import React, { ReactElement } from "react";
import Link from "next/link";

interface Props {}

export default function Index({}: Props): ReactElement {
  const verhicelPerson = [
    { v: "car", name: "bird" },
    { v: "bike", name: "pang" },
    { v: "airplane", name: "meow" },
  ];
  return (
    <div>
      <h1>getInitialProps</h1>
      {verhicelPerson.map((e) => (
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
