import Image from "next/image";
import Link from "next/link";

interface MinifigCardType {
  imageUrl: string;
  name: string;
  setUrl: string;
}

function MinifigCard({ imageUrl, name, setUrl }: MinifigCardType) {
  return (
    <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-gray-50 p-8 shadow-2xl">
      <Image
        src={imageUrl}
        alt={name + " " + "Image"}
        width={256}
        height={256}
        className="block h-32 w-auto md:h-64"
      />

      <h2 className="text-center font-bold">{name}</h2>
      <Link
        href={setUrl}
        target="_blank"
        rel="noreferrer noopener nofollow"
        className="text-center font-bold text-amber-400"
      >
        Show Details
      </Link>
    </div>
  );
}

export default MinifigCard;
