import React, { ReactElement } from "react";
import styles from "./layout.module.css";
import Head from "next/head";
import cx from "classnames";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

interface Props {
  children: React.ReactElement[];
  home?: any;
}

const nameDay = "แมวสายฟ้า";
const nameNight = "แมวสีทอง";
export const siteTitle = "Website ของ Pang";

export default function Layout({ children, home }: Props): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <div className={cx({ [styles.success]: home, [styles.error]: !home })}>
          Meow!
        </div>
        {home ? (
          <>
            <Image
              priority
              src="/images/meow.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={nameDay}
            />
            <h1 className={utilStyles.heading2Xl}>{nameDay}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/meow.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={nameNight}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{nameNight}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
