import React, { ReactElement } from "react";
import styles from "./index.module.css";
interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <h1>responsiveImg</h1>
      {/* <img
        srcSet="https://storage.googleapis.com/prod-dam-products/images/400w-8294caf5d0904bbcbd6b82a4e6a45d56.png 400w,
        https://storage.googleapis.com/prod-dam-products/images/400w-8294caf5d0904bbcbd6b82a4e6a45d56.png 800w,
        https://storage.googleapis.com/prod-dam-products/239ee5341d6a4b6abbb73b0864c625c0.jpg 1600w"
        className={styles.slide}
        role="presentation"
        sizes="(max-width: 600px) 800px,
        1600px"
        src="https://storage.googleapis.com/prod-dam-products/239ee5341d6a4b6abbb73b0864c625c0.jpg"
      /> */}
      <img
        srcSet="
        https://storage.googleapis.com/prod-dam-products/images/400w-8294caf5d0904bbcbd6b82a4e6a45d56.png 400w,
        https://storage.googleapis.com/prod-dam-products/images/800w-239ee5341d6a4b6abbb73b0864c625c0.png 800w"
        className={styles.slide}
        role="presentation"
        sizes="50vw"
        src="https://storage.googleapis.com/prod-dam-products/239ee5341d6a4b6abbb73b0864c625c0.jpg"
      />
      <img
        srcSet="
        https://storage.googleapis.com/prod-dam-products/images/400w-8294caf5d0904bbcbd6b82a4e6a45d56.png 400w,
        https://storage.googleapis.com/prod-dam-products/images/800w-239ee5341d6a4b6abbb73b0864c625c0.png 800w"
        className={styles.slide}
        role="presentation"
        sizes="47vw"
        // // src="https://storage.googleapis.com/prod-dam-products/239ee5341d6a4b6abbb73b0864c625c0.jpg"
      />
    </div>
  );
}
