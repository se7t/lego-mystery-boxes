import { Minifig } from "@/schemas/minifigs-schema";
import { MinifigPart } from "@/schemas/minifig-part-schema";

import Image from "next/image";

interface SummaryProps {
  minifig: Minifig;
  minifigParts: MinifigPart[];
}

const Summary = ({ minifig, minifigParts }: SummaryProps) => {
  return (
    <div className="mx-auto flex h-full w-[480px] max-w-full flex-col items-start overflow-y-auto rounded-2xl bg-white p-8 font-semibold text-black">
      <h1 className="font-display mb-8 text-3xl uppercase tracking-wide">
        Summary
      </h1>
      <div className="mb-8 flex w-full flex-col items-center gap-4">
        <Image
          src={minifig.set_img_url ?? ""}
          width={160}
          height={160}
          alt={minifig.name}
          className="mx-auto block h-40 w-auto"
        />
        <p className="text-center font-bold tracking-wide">{minifig.name}</p>
      </div>

      <p className="mb-6">
        There are {minifig.num_parts} parts in this minifig:
      </p>

      <div className="flex flex-col gap-6">
        {minifigParts.map((part) => (
          <div key={part.id} className="flex gap-4">
            {/* dry tears */}
            <Image
              src={part.part.part_img_url}
              width={64}
              height={64}
              alt={part.part.name}
              className="size-16 object-cover"
            />
            <p className="max-w-[20ch] overflow-hidden text-ellipsis whitespace-nowrap">
              {part.part.name}
              <br />
              <span className="text-violet-400">{part.part.part_num}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
