import Link from "next/link";
import React, { ReactElement, useState, useEffect } from "react";

interface Props {
  verhicle: Data[];
}

interface Data {
  v: string;
  name: string;
}

export default function usefetch({ verhicle }: Props): ReactElement {
  // useState useEffect fetch
  const [verhicles, setVericle] = useState<Data[]>([]);
  useEffect(() => {
    // fetch ดึงข้อมูลแบบ Client-Side ลองดูที่ Network => Preview อันแรกของหน้า
    async function loadData() {
      const response = await fetch("http://localhost:5000/verhicle");
      verhicle = await response.json();
      setVericle(verhicle);
    }

    loadData();
  }, []);

  console.log("verhicles : ", verhicles);
  return (
    <div>
      <h1>useFetch</h1>
      {verhicles &&
        verhicles.map((e, index) => (
          <h1 key={index}>
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
