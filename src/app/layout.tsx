import type { Metadata } from "next";
import { Inter, Changa_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const changa_one = Changa_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-changa-one",
});

export const metadata: Metadata = {
  title: "LEGO Minifigs Mystery Box",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`dark bg-slate-900 ${inter.className} ${changa_one.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
