import "@app/global.css"
import type { Metadata } from "next";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatPaw",
  description: "Tinder for cats",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div>
          <div className="w-5/12"></div>
          <div className="w-7/12"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
