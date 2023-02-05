import { Summary } from "@/components/Summary";

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
          <Summary />
        </div>
      </div>
    </>
  );
}
