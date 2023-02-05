import Form from "@/components/Form";
import { Summary } from "@/components/Summary";
import { MinifigContext } from "@/lib/MinifigContext";
import { useContext } from "react";
import Head from "next/head";
import { MinifigsNotLoaded } from "@/components/MinifigsNotLoaded";

export default function Home() {
  const { chosenMinifig } = useContext(MinifigContext);

  return (
    <>
      <Head>
        <title>Free Minifig Shipment Details | se7t.dev</title>
        <meta
          name="description"
          content="Grab your free LEGO Minifig from the Harry Potter Universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex items-center justify-center gap-8 px-8 ">
        {chosenMinifig.set_num ? (
          <div className="flex flex-col-reverse flex-wrap gap-32 xl:flex-row">
            <Form />
            <Summary />
          </div>
        ) : (
          <MinifigsNotLoaded />
        )}
      </div>
    </>
  );
}
