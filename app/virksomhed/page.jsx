import Image from "next/image";
import Button from "../../components/Button";

import filler from "../../public/images/gorilla.png";
import pic13 from "../../public/images/pic13.png";
import personligt from "../../public/images/personligt.svg";
import uniksmag from "../../public/images/uniksmag.svg";
import kodby from "../../public/images/kodby.svg";

export default function Shop() {
  return (
    <>
      <section className="flex lg:flex-row xl:pl-40 lg:justify-center justify-center flex-col p-5 lg:mx-20 lg:-mt-32 -mt-42 ">
        <div className="md:pl-[120px]  -mt-[px] md:-mt-36 lg:-mt-2">
          <Image
            className="z-0 lg:max-w-[500px]"
            src={filler}
            width={500}
            height={500}
            alt="Billede af chartrøse"
          />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5 ">
          <h1 className="font-tyk text-mobileH3 md:text-wh4 lg:text-wh1 text-blackbase -pt-72 lg:pt-52 ">Designet til din <br /> virksomhed!</h1>
          <p className="font-copy text-copy text-blackbase lg:max-w-[60%] lg:w-96">
            Vi tilbyder private label, til din virksomhed. Få dit navn på flasken og server premium alkohol for dine gæster. Vi har lavet private label for flere restauranter, hoteller samt andre
            virksomhedstyper.
          </p>
          <div className="py-6">
            <Button href="/kontakt" text="Kontakt os"></Button>
          </div>
        </div>
      </section>
      <section className="lg:px-36 lg:py-24 p-12 bg-clay ">
    <h2 className="font-tyk text-center text-mobileH4 md:text-wh4  lg:text-wh2">Hvorfor Plateau Spirits?</h2>
    <div className="xl:flex  flex-col xl:flex-row justify-between ">
        <div className="flex justify-center flex-col">
          <div className="flex justify-center p-10">
          <Image
            className=""
            src={personligt}
            width={80}
            height={80}
            alt="Billede af chartrøse"
          />
          </div>
           <h3 className="  font-tyk text-mobileH4 md:text-wh4 text-center flex justify-center lg:mb-8 lg:justify-center">
          Personligt produkt
           </h3>
          <p className="font-copy flex justify-center xl:justify-center text-center text-copy xl:w-80">Med vores ekspertise og dedikation samarbejder vi tæt med kunder for at skabe skræddersyede produkter til jeres virksomhed.
          </p>
        </div>

        <div className="flex justify-center flex-col">
        <div className="flex justify-center p-[74px]">
          <Image
            className=""
            src={uniksmag}
            width={180}
            height={180}
            alt="Billede af chartrøse"
          />
          </div>
           <h3 className="font-tyk text-mobileH4 md:text-wh4 flex text-center justify-center lg:mb-8 lg:justify-center">
          Unik smagsoplevelse
           </h3>
          <p className="font-copy flex justify-center xl:justify-center text-center text-copy xl:w-80">Vi bruger traditionelle og utraditionelle ingredienser til at skabe den helt rigtige smag efter jeres ønske.
          </p>
        </div>
        <div className="flex justify-center flex-col">
        <div className="flex justify-center p-10">
          <Image
            className=""
            src={kodby}
            width={80}
            height={80}
            alt="Billede af chartrøse"
          />
          </div>
           <h3 className=" text-center font-tyk text-mobileH4 md:text-wh4 flex justify-center lg:mb-8 lg:justify-center">
          Destilleret i Kødbyen
           </h3>
          <p className="font-copy flex justify-center xl:justify-center text-center text-copy xl:w-80">Fra vores destilleri i Kødbyen udvikler og destillerer vi alle vores produkter, og du er altid velkommen til at kigge forbi.
          </p>
        </div>
        </div>
      </section>
      <section className="my-10 lg:items-center lg:justify-center gap-10 p-6 md:mx-20 xl:flex md:my-8 xl:flex-row md:gap-20">
        <div className=" lg:mt-36 flex flex-col justify-center">
          <h2 className="font-tyk lg:text-wh2 text-center lg:text-left text-mobileH4 md:text-wh4 text-blackbase -mt-8 lg:-mt-32 lg:max-w-[100%]">Hør om Gorilla’s oplevelse</h2>
          <p className="font-copy text-copy text-blackbase mt-4 lg:mt-8 lg:max-w-[80%]">
            Vi havde fornøjelsen af at arbejde sammen med Plateau Spirits, da vi ønskede at få en unik chartreuse udviklet til vores restaurant. Vi tog kontakt til Tonny Svensson og forklarede vores
            ønsker og idéer til vores chartreuse. Tonny gjorde hvad han gør bedst og skabte den perfekte chartreuse til vores restaurant Gorilla. Det er nu blevet fast inventar i vores restaurant og
            vores gæster elsker, når vi serverer den for dem.
            <br />
          </p>
          <p className="font-copy text-copy font-bold lg:mt-7 py-6 text-blackbase lg:max-w-[80%]">- Restaurantchef Gorilla, Hans Hansen</p>
        </div>
        <div className="h-full flex justify-center w-full">
          <iframe className="lg:w-[800px] md:w-[768px] md:h-[400px] lg:h-[450px]"
            width="450"
            height="250"
            src="https://www.youtube.com/embed/HEUMrGoBeUs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="my-10 lg:items-center lg:justify-center gap-10 p-6 md:mx-20 lg:flex md:my-8 lg:flex-row md:gap-20">
        <div className="md:basis-1/2">
          <Image className="" src={pic13} width={800} height={100} alt="Billede af lokation" />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h2 className="font-tyk text-mobileH4 pt-6 md:text-wh2 text-blackbase">
            Events til din virksomhed
          </h2>
          <p className="font-copy text-copy text-blackbase lg:max-w-[80%]">
            Vi afholder jævnligt gin-smagninger, foredrag og stiller anderledes mødelokaler til rådighed. Vi stræber efter at give jer en unik og mindeværdig oplevelse, der vil styrke jeres team og
            samarbejde. Kontakt os for at lære mere om vores skræddersyede events.
          </p>
          <div className="pt-6">
            <Button href="/events" text="Events"></Button>
          </div>
        </div>
      </section>
    </>
  );
}
