import "../styles/globals.css";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import Header2 from "../components/Header2";
import FooterMobil from "../components/FooterMobil";
import Footer from "../components/Footer";
import TopBanner from "@/components/TopBanner";
import OverAtten from "@/components/OverAtten";
import Cookiebox from "@/components/Cookiebox";

const ebGaramond = EB_Garamond({
  weight: "400",
  style: "normal",
  variable: "--eb-regular",
  subsets: ["latin-ext"],
});
const rocaOneBlack = localFont({
  src: "../public/fonts/RocaOne-Bl.woff2",
  weight: "900",
  style: "normal",
  variable: "--rocaBl-black",
});
const rocaOneHeavy = localFont({
  src: "../public/fonts/RocaOne-Hv.woff2",
  weight: "900",
  style: "normal",
  variable: "--rocaHv-heavy",
});
const rocaOneBold = localFont({
  src: "../public/fonts/RocaOne-Bold.woff2",
  weight: "bold",
  style: "normal",
  variable: "--roca-bold",
});
const rocaOneRegular = localFont({
  src: "../public/fonts/RocaOne-Rg.woff2",
  weight: "normal",
  style: "normal",
  variable: "--roca-regular",
});
const rocaOneLight = localFont({
  src: "../public/fonts/RocaOne-Lt.woff2",
  weight: "300",
  style: "normal",
  variable: "--roca-light",
});
const rocaOneThin = localFont({
  src: "../public/fonts/RocaOne-Th.woff2",
  weight: "100",
  style: "normal",
  variable: "--roca-thin",
});

export const metadata = {
  title: "Plateau Spirits",
  description: "Created by BCL",
  icon: { url: "/icon.png", type: "image/png" },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="da"
      className={`${rocaOneBlack.variable} ${rocaOneRegular.variable} ${rocaOneBold.variable} ${rocaOneHeavy.variable} ${rocaOneThin.variable} ${rocaOneLight.variable} ${ebGaramond.variable}`}
    >
      <body className="bg-greybase">
        <TopBanner className="z-0"></TopBanner>

        <Header2></Header2>

        <main className="z-0">
          {children}
          <OverAtten></OverAtten>
          <Cookiebox />
        </main>

        <footer className="z-0 overflow-hidden bg-matte200">
          <div className="hidden md:block">
            <Footer></Footer>
          </div>
          <div className="block md:hidden">
            <FooterMobil></FooterMobil>
          </div>
        </footer>
      </body>
    </html>
  );
}
