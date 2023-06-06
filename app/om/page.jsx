"use client";
import Image from "next/image";
import Historie from "./Historie";
import { motion } from "framer-motion";
// import Slideshow from "./Slideshow";

import pic4 from "../../public/images/pic4.png";
import pic5 from "../../public/images/pic5.png";
import pic6 from "../../public/images/pic6.png";
import pic16 from "../../public/images/pic16.png";

import deksel from "../../public/assets/deksel_skrift.svg";
import buetekst from "../../public/assets/buetekst_2.svg";
import cirkel from "../../public/assets/ingredienser_cirkel.svg";

export default function Om() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-start justify-between md:mb-20 md:flex-row">
        <div className="top-3 z-20 basis-1/2 md:sticky">
          <Historie className=""></Historie>
        </div>
        <div className="mt-16 flex basis-1/2 flex-col items-start gap-10 overflow-x-hidden p-5 md:mr-20  md:gap-5">
          <motion.div className="relative inline-block md:mt-40" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview absolute -right-40 -top-40 z-10" src={deksel} width={376} height={364} alt="Billede af ejerne" />
            <Image className="fotoinview z-0" src={pic4} width={450} height={550} alt="Billede af ejerne" />
          </motion.div>

          <motion.div className="relative inline-block self-end md:-mt-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview absolute -left-32 top-48" src={buetekst} width={184} height={261} alt="Billede af ejerne" />
            <Image className="fotoinview" src={pic16} width={450} height={550} alt="Billede af ejerne"></Image>
          </motion.div>

          <motion.div className="z-10 md:-mt-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview" src={pic6} width={550} height={450} alt="Billede af ejerne"></Image>
          </motion.div>

          <motion.div className="relative z-20 inline-block self-end md:-mt-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview absolute -left-32 top-48" src={cirkel} width={250} height={250} alt="Billede af ejerne" />
            <Image className="fotoinview" src={pic5} width={450} height={550} alt="Billede af indgangen i kødbyen"></Image>
          </motion.div>
        </div>
      </section>
    </>
  );
}
