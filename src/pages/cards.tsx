import { useContext } from "react";
import { MinifigContext } from "@/lib/MinifigContext";
import Link from "next/link";
import Head from "next/head";
import MinifigCard from "@/components/MinifigCard";

const Home = () => {
  const { minifigs, chosenMinifigId, randomMinifigs } =
    useContext(MinifigContext);

  return (
    <>
      <Head>
        <title>Select your Free Minifig | se7t.dev</title>
        <meta
          name="description"
          content="Grab your free LEGO Minifig from the Harry Potter Universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-8">
        {minifigs.length === 0 ? (
          <>
            <h2 className="text-bold text-center font-display text-3xl uppercase text-red-500 sm:text-4xl">
              Minifigs Not Loaded
            </h2>
            <Link
              href="/"
              className="active:px-25 font-sans rounded-full bg-blue-500 px-24 py-3 text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700"
            >
              Go Back
            </Link>
          </>
        ) : (
          <>
            <h1 className="text-bold text-center font-display text-5xl uppercase text-white sm:text-6xl">
              Choose Your Minifig
            </h1>
            {randomMinifigs.length > 0 && (
              <>
                <div className="grid w-full auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3">
                  {randomMinifigs.map((minifig, index) => (
                    <MinifigCard
                      key={index}
                      imageUrl={minifig.set_img_url}
                      name={minifig.name}
                      setUrl={minifig.set_url}
                      setId={minifig.set_num}
                      index={index + 1}
                    />
                  ))}
                </div>
                <Link
                  href="/shipment"
                  className={`active:px-25 font-sans rounded-full bg-blue-500 px-24 py-3 text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700 ${
                    !chosenMinifigId
                      ? "pointer-events-none opacity-75 saturate-0 "
                      : ""
                  }`}
                >
                  Proceed to Shipment
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Home;
