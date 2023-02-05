import Form from "@/components/Form";
import { Summary } from "@/components/Summary";
import { MinifigContext } from "@/lib/MinifigContext";
import { useContext } from "react";
import Link from "next/link";

export default function Home() {
  const { chosenMinifigId } = useContext(MinifigContext);

  return (
    <>
      <div className="container mx-auto flex  items-center justify-center gap-8 px-8">
        {chosenMinifigId.length > 0 ? (
          <>
            <div className="flex flex-wrap gap-32">
              <Form />
              <Summary />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-8">
              <h2 className="text-bold text-center font-display text-3xl uppercase text-red-500 sm:text-4xl">
                Minifigs Not Loaded
              </h2>
              <Link
                href="/"
                className="active:px-25 font-sans rounded-full bg-blue-500 px-24 py-3 text-center text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700"
              >
                Go Back
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
