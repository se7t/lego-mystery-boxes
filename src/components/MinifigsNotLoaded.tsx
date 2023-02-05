import Link from "next/link";

export const MinifigsNotLoaded = () => {
  return (
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
  );
};
