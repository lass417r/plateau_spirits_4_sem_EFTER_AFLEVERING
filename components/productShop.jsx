"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ProductShop = ({ product }) => {
  {
    /* Her opretter vi et state der bliver opdateret hvis brugeren hover over produktbilledet */
  }
  const [isHovered, setIsHovered] = useState(false);
  {
    /* Herinde tjekker vi om prisen er præcis 500 (fordi så er det en pakke)
     Hvis det er en pakke, fylder produktet 2 coloner i gridet og 
     hvis det er en flaske  fylder den kun 1.*/
  }
  return product.price === 500 ? (
    <div className=" grid basis-2/3 gap-2 p-5 md:col-span-2" key={product.id}>
      <Link key={product.id} href={`/shop/${product.slug}`}>
        <div className="relative flex aspect-[2/1] ">
          <motion.div
            className="  absolute h-full w-full"
            initial={{ opacity: 1 }}
            style={{ zIndex: 0 }}
            whileHover={{ opacity: 0, scale: 1.005 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Image src={product.images[0].file.url} alt={product.name} fill />
          </motion.div>
          <motion.div
            className="absolute h-full w-full "
            initial={{ opacity: 0 }}
            style={{ zIndex: 10 }}
            whileHover={{ opacity: 1, scale: 1.005 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Image src={product.images[1].file.url} alt={product.name} fill />
          </motion.div>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-1 text-center text-blackbase">
        <h5 className="font-tyk text-wh5">{product.name}</h5>
        <p className="font-copy text-copy">{product.price} DKK</p>
        <div className="mt-5">
          <Button href={`/shop/${product.slug}`} text={"SE PRODUKT"}></Button>
        </div>
      </div>
    </div>
  ) : (
    <div className=" grid  gap-2 p-5 md:col-span-1" key={product.id}>
      <Link key={product.id} href={`/shop/${product.slug}`}>
        <div className="relative flex aspect-[1/1]  ">
          {/* Hvis brugeren hover over det første billede forsvinder det og billede 2 kommer frem */}
          <motion.div className="absolute  h-full w-full" initial={{ opacity: 1 }} style={{ zIndex: 1 }} whileHover={{ opacity: 0 }} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}>
            <Image src={product.images[0].file.url} alt={product.name} fill />
          </motion.div>
          <motion.div
            className="absolute h-full w-full "
            initial={{ opacity: 0 }}
            style={{ zIndex: 10 }}
            whileHover={{ opacity: 1, scale: 1.005 }}
            transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <Image src={product.images[1].file.url} alt={product.name} fill />
          </motion.div>
        </div>
      </Link>
      <div className="flex flex-col items-center gap-1 text-blackbase ">
        {/* Her udskriver vi produktets navn, pris og en knap til singleview */}
        <h5 className="font-tyk text-wh5">{product.name}</h5>
        <p className="font-copy text-copy">{product.price} DKK</p>
        <div className="mt-5">
          <Button href={`/shop/${product.slug}`} text={"SE PRODUKT"}></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
