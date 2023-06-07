"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/Button";

import spacey from "@/public/images/go/spacey.png";
import rhu from "@/public/images/go/rhu.png";
import bauhaus from "@/public/images/go/bauhaus.png";
import asset from "@/public/images/go/asset.png";

function ProductRecsGo(props) {
  return (
    <div className="my-16 ">
      <div className="p-5 md:mb-6">
        <h2 className="udvalgteProdukter font-tyk text-mobileH2 md:text-wh2">Se vores PlateauGO produkter</h2>
      </div>
      <div className="flex w-auto flex-row gap-5 overflow-scroll p-5 md:gap-14 md:overflow-hidden md:pb-28">
        <div className=" flex w-[100%]  flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
          <div className="relative flex aspect-[1/1] h-auto w-full">
            <Link href={"/plateau-go/spacey-gt"}>
              <Image className="z-10 hover:cursor-mincursor " src={spacey} fill alt="Flot billede af Gin flaske"></Image>
              <Image src={asset} className="z-0" alt="asset" fill></Image>
            </Link>
          </div>
          <div className="my-2 flex  flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Spacey G&T</h5>
            <p className="mx-10 mb-5 font-copy text-copy">35 DKK</p>
            <div className="hidden md:block">
              <Button href={"/plateau-go/spacey-gt"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex w-[100%]  flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
          <div className="relative flex aspect-[1/1] h-auto w-full">
            <Link href={"/plateau-go/rhubarbian"}>
              <Image className="z-10 hover:cursor-mincursor " src={rhu} fill alt="Flot billede af Gin flaske"></Image>
              <Image src={asset} className="z-0" alt="asset" fill></Image>
            </Link>
          </div>
          <div className="my-2 flex  flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Rhubarbian</h5>
            <p className="mx-10 mb-5 font-copy text-copy">35 DKK</p>
            <div className="hidden md:block">
              <Button href={"/plateau-go/rhubarbian"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex  w-[100%] flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
          <div className="relative flex aspect-[1/1] h-auto w-full">
            <Link href={"/plateau-go/bauhaus"}>
              <Image className="z-10 hover:cursor-mincursor " src={bauhaus} fill alt="Flot billede af Gin flaske"></Image>
              <Image src={asset} className="z-0" alt="asset" fill></Image>
            </Link>
          </div>
          <div className="my-2 flex flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Bauhaus Fizz</h5>
            <p className="mx-10 mb-5 font-copy text-copy">35 DKK</p>
            <div className="hidden md:block">
              <Button href={"/plateau-go/bauhaus"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRecsGo;
