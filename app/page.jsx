import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import TextBanner from "../components/TextBanner";

import herocircle from "../public/assets/Layer_1-2.svg";
import arrow from "../public/assets/ArrowUp.svg";
import buetekst from "../public/assets/buetekst.svg";
import tilgang from "../public/assets/vores_tilgang.svg";

import splash from "../public/images/splash.png";
import gtranq from "../public/images/gtranq.png";
import gluna from "../public/images/gluna.png";
import pic1 from "../public/images/pic1.png";
import pic2 from "../public/images/pic2.png";

export default function Home() {
  return (
    <>
      <div className=" flex flex-col items-center justify-between">
        <section className="z-10 flex w-full max-w-6xl flex-col-reverse items-center justify-between overflow-hidden p-6 md:mx-10 md:flex-row md:pt-10">
          <div className="flex flex-col  items-start gap-y-3">
            <h1 className="font-ssort text-mobileH1 text-black500 md:text-wh1">
              Small batch spiritus
            </h1>
            <h2 className="pb-4 font-ssort text-mobileH4 text-black500 md:text-wh4">
              Håndlavet i kødbyen København
            </h2>
            <Button className="" href={"/shop"} text={"Se produkter"}></Button>
          </div>
          <Image
            src={splash}
            width={500}
            height={500}
            alt="Flot billede af Gin flaske"
          ></Image>
        </section>

        <section className=" w-160px h-160px relative hidden md:mt-10 md:block">
          {/* Virker ikke korrekt */}
          <Image
            className="z-1 h-full w-full animate-spin-slow"
            src={herocircle}
            width={300}
            height={300}
            alt="Flot tekst illustration"
          ></Image>
          <Image
            className="absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform"
            src={arrow}
            width={100}
            height={100}
            alt="Pil"
          ></Image>
        </section>

        <section className="flex flex-col gap-5 p-6 pt-20 md:mx-20 md:flex-row lg:gap-40">
          <div className="  flex  flex-initial basis-1/2 flex-col gap-3">
            <h2 className=" font-ssort text-mobileH2 md:text-wh2">
              Udvalgte produkter
            </h2>
            <p className="  max-w-[500px] font-copy text-copy">
              Vores produkter er skabt med en passion for æstetik og håndværk,
              og vi tror på at give vores kunder en autentisk og inspirerende
              oplevelse. Hver eneste genstand er nøje fremstillet af vores
              master distiller, der lægger sjæl og passion i hvert eneste trin
              af processen.
            </p>
            <div className="hidden pt-10 md:block">
              <Button href={"/shop"} text={"Se produkter"}></Button>
            </div>
          </div>
          <div className="flex basis-1/2 flex-row items-baseline gap-5">
            <div className="flex flex-col gap-2">
              <Link href={"/shop/la-luna-absint"}>
                <Image
                  className="hover:cursor-mincursor"
                  src={gluna}
                  width={315}
                  height={463}
                  alt="Flot billede af Gin flaske"
                ></Image>
                <h5 className="pt-4 text-mobileH5 font-normal md:text-wh5">
                  La Luna Absint
                </h5>
              </Link>
              <p className="font-copy text-copy  font-semibold">445 DKK</p>
            </div>
            <div className="flex flex-col gap-2">
              <Link href={"/shop/tranquillite-gin"}>
                <Image
                  className="hover:cursor-mincursor"
                  src={gtranq}
                  width={315}
                  height={463}
                  alt="Flot billede af Gin flaske"
                ></Image>
                <h5 className="pt-4 text-mobileH5 font-normal md:text-wh5">
                  Tranquillité Gin
                </h5>
              </Link>
              <p className="font-copy text-copy font-semibold">395 DKK</p>
            </div>
          </div>
        </section>

        <section className="relative w-full">
          <Image
            className="absolute -top-32 left-0  hidden md:block"
            src={buetekst}
            alt=""
            width={274}
            height={297}
          ></Image>
        </section>

        <section className="mt-5 flex  flex-col items-center justify-center gap-5 gap-y-3 p-6 md:mx-10  md:flex-row md:py-20">
          <div className=" flex basis-1/2 flex-col items-start gap-y-3">
            <h2 className="font-ssort text-mobileH2 md:text-wh2">
              &quot;Chartrøse&quot; til Gorilla
            </h2>
            <p className="font-copy text-copy lg:max-w-[80%]">
              Vi har samarbejdet med restaurant Gorilla om at udvikle en unik
              fransk inspireret likør de kan servere til deres gæster. Vi blev
              kontaktet af restaurant chefen og blev sat på en opgave, at skabe
              en likør, inspireret af den velkendte chartreuse.
            </p>
            <div className="pt-10">
              <Button href={"/virksomhed"} text={"Se partnere"}></Button>
            </div>
          </div>
          <Image
            src={pic2}
            width={500}
            height={500}
            alt="Flot billede af Gin flaske"
          ></Image>
        </section>

        <section className="z-10 my-5 flex flex-col gap-10 p-6 md:mx-10 md:flex-row">
          <div className="relative flex basis-1/2 justify-end">
            <Image
              className=""
              src={pic1}
              width={500}
              height={500}
              alt="Flot billede af Gin flaske"
            ></Image>
            <Image
              className="absolute md:left-[70%] md:top-[60%]"
              src={tilgang}
              width={400}
              height={400}
              alt="Illutrativt element"
            ></Image>
          </div>
          <div className="basis-1/2">
            <h2 className="pb-2 font-ssort text-mobileH2 md:text-wh2">
              Vores tilgang{" "}
            </h2>
            <p className="font-copy text-copy lg:max-w-[80%]">
              Plateau Spirits mission er at skabe spiritus med kant ved at
              blande usædvanlige ingredienser og samarbejde med de bedste mulige
              destillatører for at opnå det perfekte resultat. Derfor vil du
              finde usædvanlige ingredienser som dragefrugt, columbiansk kaffe
              og mørk lakridssirup blandet med klassiske ingredienser som
              orrisrod, angelikarod, enebær, frisk lime og appelsin.
            </p>
          </div>
        </section>

        <section className="bg-matte200  md:-mt-20">
          <div className=" my-10 p-6 md:mx-16 md:mb-20 md:mt-40">
            <h2 className="font-ssort text-titlebxs text-orangebase md:text-titlexl">
              Awards
            </h2>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className=" flex basis-1/3 flex-col gap-3 text-yellowbase">
                <h4 className="text-mobileH3 font-normal">
                  Great evaluation of 94 out of 100.
                </h4>
                <p className="font-copy text-copy">
                  La luna - Light green with intense wormwood and anise notes in
                  the scent. Very elegant in expression with beautiful spicy
                  notes. Full-bodied and at the end you feel the high alcohol
                  that actually clothes it and highlights the spices. Long, warm
                  finish. Impressive absinthe.
                </p>
              </div>
              <div className=" flex basis-1/3 flex-col gap-3 text-yellowbase">
                <h4 className="text-mobileH3 font-normal">
                  Silver Award at Las Vegas Global Spirits Awards
                </h4>
                <p className="font-copy text-copy">
                  Plateau Spirits Akvavit “Touche” & “Tranquillité Gin awarded
                  SILVER in first competition in Las Vegas. We are very proud of
                  the resultat in our first competetion and it shows the quality
                  of our spirits.
                </p>
              </div>
              <div className="flex basis-1/3 flex-col gap-3 text-yellowbase">
                <h4 className="text-mobileH3 font-normal">
                  Double Gold in New York at 50 Best.
                </h4>
                <p className="font-copy text-copy">
                  Touché Akvavit – The Fifty Best is very pleased to announce
                  that Touchè Aquavit was awarded a Double Gold medal. Using
                  professional criteria, the pre-qualified panel of judges
                  blind-tasted the aquavits and rated them individually on a
                  1-5.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="z w-full bg-matte200 ">
        <TextBanner text="BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN &nbsp; - &nbsp; BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN"></TextBanner>
      </div>
    </>
  );
}
