"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import asset from "@/public/images/go/asset.png";

function PlateauGo({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className=" flex w-[100%] flex-col items-center border border-solid border-orangebase outline-2 md:basis-1/3">
      <div className="relative flex aspect-[1/1] h-auto w-full ">
        <Link href={`/plateau-go/${product.slug}`}>
          <Image className="z-10 hover:cursor-mincursor" src={product.images[0].file.url} fill alt={product.name}></Image>
          <Image className="z-0 hover:cursor-mincursor" src={asset} fill alt="Grid"></Image>
        </Link>
      </div>
      <div className="my-2 flex  flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
        <h5 className="text-mobileH5 font-normal md:text-wh5">{product.name}</h5>
        <p className="mx-10 mb-5 font-copy text-copy">{product.price} DKK</p>
        <div className="">
          <Button href={`/plateau-go/${product.slug}`} text={"SE PRODUKT"}></Button>
        </div>
      </div>
    </div>
  );
}

export default PlateauGo;
