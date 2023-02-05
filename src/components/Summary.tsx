import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { MinifigContext } from "@/lib/MinifigContext";
import axios from "axios";

interface MinifigPart {
  part: {
    part_img_url: string;
    name: string;
    part_num: string;
  };
}

interface ChosenMinifigParts {
  results: MinifigPart[];
  count: number;
}

export const Summary = () => {
  const { chosenMinifig } = useContext(MinifigContext);

  const [chosenMinifigParts, setChosenMinifigParts] =
    useState<ChosenMinifigParts>({
      results: [
        {
          part: {
            part_img_url: "",
            name: "",
            part_num: "",
          },
        },
      ],
      count: 0,
    });

  const rebrickableEndpoint = `https://rebrickable.com/api/v3/lego/minifigs/${chosenMinifig.set_num}/parts?key=${process.env.NEXT_PUBLIC_REBRICKABLE_API_KEY}`;

  useEffect(() => {
    axios
      .get(`${rebrickableEndpoint}`)
      .then((res) => {
        console.log(res.data);
        setChosenMinifigParts(res.data);
      })
      .catch((res) => {
        console.error(res.data);
      });
  }, [rebrickableEndpoint]);

  return (
    <div className="flex flex-shrink flex-grow-0 basis-96 flex-col  gap-8 rounded-xl bg-white p-8">
      <h2 className="text-bold font-display text-3xl uppercase text-black sm:text-4xl">
        Summary
      </h2>
      <Image
        src={chosenMinifig.set_img_url}
        width={200}
        height={200}
        alt={`${chosenMinifig.name} Image`}
        className="self-center"
      />
      <h3 className="text-center font-bold">{chosenMinifig.name}</h3>
      <p className="font-bold">
        There are {chosenMinifigParts.count} parts in this minifig:
      </p>
      {chosenMinifigParts.results && chosenMinifigParts.results.length > 0
        ? chosenMinifigParts.results.map((minifigPart, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image
                src={minifigPart.part.part_img_url}
                width={64}
                height={64}
                alt={minifigPart.part.name}
                className="h-auto w-16"
              />
              <div>
                <p className="font-bold">{minifigPart.part.name}</p>
                <p className="font-bold text-amber-400">
                  {minifigPart.part.part_num}
                </p>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
