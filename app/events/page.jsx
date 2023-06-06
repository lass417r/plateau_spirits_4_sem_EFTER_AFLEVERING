"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TextBanner from "../../components/TextBanner";
import KontaktEvents from "../../components/KontaktEvents";

import pic8 from "../../public/images/pic8.png";
import pic9 from "../../public/images/pic9.png";
import pic10 from "../../public/images/pic10.png";
import pic11 from "../../public/images/pic11.png";

import gitter from "../../public/assets/gitter.svg";
import events from "../../public/assets/events.svg";

export default function Events() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-start justify-between md:mx-20 md:mb-20 md:flex-row">
        <div className="top-3 md:sticky md:basis-1/2">
          <div className="flex flex-col items-start gap-5 p-5">
            <h1 className="font-tyk text-wh1  lg:mt-24">Plateau Events</h1>
            <p className="font-copy text-copy lg:max-w-[80%]">Vi tilbyder muligheden for at afholde events og arrangementer i vores showroom i Kødbyen.</p>

            <ul
              className=" list-disc pl-6
               font-megettyk text-copy text-blackbase"
            >
              <li className="mb-4 mt-4">Virksomhedsarrangementer</li>
              <li className="mb-4">Private arrangementer</li>
              <li className="mb-4">Foredrag m.m.</li>
            </ul>
            <p className="font-copy text-copy lg:max-w-[80%]">
              Vores lokaler er velegnede til både private og erhvervsmæssige arrangementer, hvor I kan nyde vores unikke spiritus produkter under arrangementet. Vi tilpasser gerne arrangementet til
              jeres ønsker og behov og tilbyder også muligheden for at inkludere en rundvisning i vores destilleri og en præsentation af destillationsprocessen.
            </p>
            <a href="#KontaktEvents" className="voresKnap border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-black400 md:text-deskButtonPrimary md:tracking-wider">
              Book Event
            </a>
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-5 overflow-hidden p-5 pt-28 md:basis-1/2 md:overflow-visible">
          <Image className="absolute z-0 hidden md:mt-32 md:block " src={gitter} width={1500} height={3000} alt="Illustrativt element" />
          <motion.div className="relative inline-block md:mt-32" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className=" absolute -right-16 -top-28 z-10" src={events} width={318} height={456} alt="Illustrativt element" />
            <Image className=" z-0 md:mt-5" src={pic8} width={500} height={500} alt="Billede af lokation" />
          </motion.div>
          <motion.div className="z-10 md:-mt-20 md:ml-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="z-10" src={pic11} width={500} height={500} alt="Billede af lokation" />
          </motion.div>
          <motion.div className="z-10 md:-mt-20 md:mr-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview z-0" src={pic10} width={500} height={500} alt="Billede af lokation" />
          </motion.div>
        </div>
      </section>
      <section className="mb-10   flex flex-col items-start gap-20 p-5 md:mx-20 md:mb-20 md:flex-row">
        <motion.div className="flex justify-end" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
          <Image className="" src={pic9} width={1250} height={1250} alt="Billede af lokation" />
        </motion.div>
        <div className="top-36 md:sticky lg:max-w-[80%]">
          <h3 className="font-tyk text-wh3">Eksempel på et event</h3>
          <p className="font-copy lg:max-w-[70%]">
            <span className="font-copy"> Her ses et bud på hvordan et event kan struktureres i vores showroom.</span>
            <br />
            Arrangementet starter med velkomstdrinks og en introduktion til programmet. Derefter er der en rundvisning i vores showroom og en gennemgang af destillationsprocessen.
            <br />
            <br />
            Efterfølgende afholder vi en cocktailworkshop eller en gin-smagning, hvor vores produkter kan smages og udforskes af jer. Vi runder aftenen af med mad serveret fra en af restauranterne i
            Kødbyen.
          </p>
        </div>
      </section>
      <section className=" flex min-h-screen flex-col items-center justify-between  bg-matte200 pt-10">
        <div id="KontaktEvents" className="z w-full">
          <TextBanner text="BOOK DIT NÆSTE EVENT! &nbsp; - &nbsp; BOOK DIT NÆSTE EVENT!  &nbsp; - &nbsp; BOOK DIT NÆSTE EVENT!"></TextBanner>
        </div>
        <div className=" mb-10 ">
          <div className="kontaktformular  flex flex-col gap-5 md:mx-20 md:my-20 md:basis-2/3">
            <h3 className="font-tyk text-wh3 text-yellowbase ">Book her</h3>
            <KontaktEvents className="z-10"></KontaktEvents>
          </div>
        </div>
      </section>
    </>
  );
}
