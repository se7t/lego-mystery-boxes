import Link from "next/link";

export const ViewSource = () => {
  return (
    <Link
      href="https://github.com/se7t/lego-mystery-boxes"
      target="_blank"
      rel="_noreferrer noopener nofollow"
      className="fixed bottom-4 right-4 text-sm font-bold text-white opacity-25 transition-opacity hover:opacity-75"
    >
      View Source Code
    </Link>
  );
};
