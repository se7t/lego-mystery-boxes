import Link from "next/link";

export default function Button(href: string, text: string) {
  return (
    <Link
      href={href}
      className="rounded-full bg-blue-500 px-24 py-4 text-lg font-bold uppercase text-white drop-shadow-lg"
    >
      {text}
    </Link>
  );
}
