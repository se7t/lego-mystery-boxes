import Form from "@/components/Form";
import { Summary } from "@/components/Summary";
import { MinifigContext } from "@/lib/MinifigContext";
import { useContext } from "react";
import Link from "next/link";
import { MinifigsNotLoaded } from "@/components/MinifigsNotLoaded";

export default function Home() {
  const { chosenMinifigId } = useContext(MinifigContext);

  return (
    <>
      <div className="container mx-auto flex  items-center justify-center gap-8 px-8">
        {chosenMinifigId.length === 0 ? (
          <MinifigsNotLoaded />
        ) : (
          <div className="flex flex-wrap gap-32">
            <Form />
            <Summary />
          </div>
        )}
      </div>
    </>
  );
}
