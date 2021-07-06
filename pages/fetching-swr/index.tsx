import React, { ReactElement } from "react";
import Layout from "../../components/layout";
import { useSWRInfinite } from "swr";
interface Props {}
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function index({}: Props): ReactElement {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      `http://localhost:8001/apis/productcategory/electric/subcategories?page=${
        index + 2
      }`,
    fetcher
  );
  console.log("data: ", data ? data[0] : "");
  console.log("size: ", size);

  const response = data ? data[0] : "";
  const issues = response ? [].concat(...response.items) : [];
  console.log("issues: ", issues);

  const isLoadingInittialData = !data && !error;
  const isLoadingMore = isLoadingInittialData || size > 0;

  // if (data) {
  //   if (data[0].page < data[0].pageCount) {
  //     setSize(data[0].page + 1);
  //   }
  // }
  return (
    <Layout>
      <h3>Web Pang</h3>
      <div style={{ fontFamily: "sans-serif" }}>
        <input placeholder="reactjs/react-ally" />
        <button>load issues</button>
        <p>
          showing page(s) of
          <button>text test</button>
          <button>tet test2</button>
          <button>clear</button>
        </p>
      </div>
    </Layout>
  );
}
