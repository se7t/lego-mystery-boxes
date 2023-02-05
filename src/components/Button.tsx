import { useRouter } from "next/router";
import { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  onClickAction: () => void;
}

function Button({ children, href, onClickAction }: ButtonProps) {
  const router = useRouter();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClickAction();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="active:px-25 font-sans rounded-full bg-blue-500 px-24 py-3 text-lg font-bold uppercase text-white drop-shadow-lg transition-all hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-700"
    >
      {children}
    </a>
  );
}

export default Button;
