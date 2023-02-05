import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-8">
        <div className="flex flex-wrap gap-32">
          <div className="flex-shrink flex-grow">
            <h1 className="text-bold font-display text-5xl uppercase text-white sm:text-6xl">
              Order
            </h1>
          </div>
          <div className="flex flex-shrink flex-grow-0 basis-96 flex-col gap-8 rounded-xl bg-white p-8">
            <h2 className="text-bold font-display text-3xl uppercase text-black sm:text-4xl">
              Summary
            </h2>
            <Image
              src={
                "https://cdn.rebrickable.com/media/sets/fig-000029/60572.jpg"
              }
              width={200}
              height={200}
              alt={
                "Harry Potter, Open Dark Blue Jacket over White Shirt, Dark Bluish Gray Legs"
              }
              className="self-center"
            />
            <h3 className="text-center font-bold">
              Harry Potter, Open Dark Blue Jacket over White Shirt, Dark Bluish
              Gray Legs
            </h3>
            <p className="font-bold">There are {4} parts in this minifig:</p>
            <div className="flex gap-2">
              <Image
                src="https://cdn.rebrickable.com/media/parts/elements/4157659.jpg"
                width={64}
                height={64}
                alt={"Hair Short Tousled"}
                className="h-auto w-16"
              />
              <div>
                <p className="font-bold">Hair Short Tousled</p>
                <p className="font-bold text-amber-400">40233</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}