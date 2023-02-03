import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lego Minifig Mystery Boxes | se7t.dev</title>
        <meta
          name="description"
          content="Grab your free LEGO Minifig from the Harry Potter Universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-bold text-3xl">Lego Mystery Boxes</h1>
    </>
  );
}
