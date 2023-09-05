import "@app/global.css"
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import { Header } from "@components/layouts";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CatPaw",
  description: "Tinder for cats",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {/* Header is being removed from layout for lg and higer res devices and added to pages*/}
        <div className="xl:flex xl:justify-between" >
          <div>
            <Header isDesktop />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
