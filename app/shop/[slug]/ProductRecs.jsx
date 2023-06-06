"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../components/Button";

import gluna from "../../../public/images/gluna.png";
import gtouche from "../../../public/images/gtouche.png";
import gtranq from "../../../public/images/gtranq.png";

function ProductRecs(props) {
  return (
    <div className="my-16 ">
      <div className="p-5 md:mb-6">
        <h2 className="udvalgteProdukter font-tyk text-mobileH2 md:text-wh2">Vi anbefaler også</h2>
      </div>
      <div className="flex w-auto flex-row gap-5 overflow-scroll p-5 md:gap-14 md:overflow-hidden md:pb-28">
        <div className=" flex w-[100%]  flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
          <Link href={"/shop/la-luna-absint"}>
            <Image className="hover:cursor-mincursor" src={gluna} width={400} height={463} alt="Flot billede af Gin flaske"></Image>
          </Link>
          <div className="my-2 flex  flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">La Luna Absint</h5>
            <p className="mx-10 mb-5 font-copy text-copy">445 DKK</p>
            <div className="hidden md:block">
              <Button href={"/shop/la-luna-absint"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex w-[100%]  flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
          <Link href={"/shop/touche"}>
            <Image className=" hover:cursor-mincursor" src={gtranq} width={400} height={463} alt="Flot billede af Gin flaske"></Image>
          </Link>
          <div className="my-2 flex  flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Touché Aquavit</h5>
            <p className="mx-10 mb-5 font-copy text-copy">295 DKK</p>
            <div className="hidden md:block">
              <Button href={"/shop/touche"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex  w-[100%] flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
          <Link href={"/shop/tranquillite-gin"}>
            <Image className=" hover:cursor-mincursor" src={gtouche} width={400} height={463} alt="Flot billede af Gin flaske"></Image>
          </Link>
          <div className="my-2 flex flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Tranquillité Gin</h5>
            <p className="mx-10 mb-5 font-copy text-copy">395 DKK</p>
            <div className="hidden md:block">
              <Button href={"/shop/tranquillite-gin"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRecs;
