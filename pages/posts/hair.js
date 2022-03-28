import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Hair() {
  return (
    <>
      <Head>
        <title>Hair</title>
      </Head>
      <div className="container">
        <h3 className={styles.title}>
          Hello{" "}
          <Link href="/">
            <a>Go to Home</a>
          </Link>
        </h3>
      </div>
    </>
  );
}
