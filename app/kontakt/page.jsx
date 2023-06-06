"use client";
import Link from "next/link";
import Image from "next/image";
import kodby from "../../public/assets/kodby.svg";
import tel from "../../public/assets/tel.svg";
import mail from "../../public/assets/mail.svg";

import Kontakt from "../../components/Kontakt";
import GoogleMap from "../../components/GoogleMaps";
import TextBanner from "../../components/TextBanner";

export default function Shop() {
  return (
    <>
      <section className=" mt-5 flex flex-col-reverse gap-5 p-5 py-16 md:mx-20 md:mt-16 md:flex-row md:gap-20">
        <div className="h-[400px] md:basis-2/3">
          <GoogleMap />
        </div>
        <div className="md:basis-1/3">
          <h1 className="font-tyk text-mobileH1 text-orangebase md:text-wh1">Find vej</h1>
          <h5 className="text-wh font-tyk text-blackbase"> Adresse: </h5>
          <p className="font-copy text-copy  text-blackbase">
            Flæsketorvet 6<br />
            1711 Copenhagen
          </p>
        </div>
      </section>
      <section className=" bg-clay px-24 py-16 ">
        <h2 className="text-center font-tyk text-mobileH2 md:text-wh2">Kontakt information</h2>
        <div className="flex-col  justify-between lg:flex lg:flex-row ">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center p-10">
              <Image className="" src={mail} width={80} height={80} alt="Billede af chartrøse" />
            </div>
            <h3 className="  flex justify-center font-tyk text-mobileH4 md:text-wh4 lg:mb-8 lg:justify-center">Mail</h3>
            <Link className="text-center font-copy text-copy lg:w-80 lg:justify-center" target="_blank" href="mailto:info@plateauspirits.com">
              Info@plateauspirits.com
            </Link>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-center p-10">
              <Image className="" src={tel} width={80} height={80} alt="Billede af chartrøse" />
            </div>
            <h3 className="flex justify-center text-center font-tyk text-mobileH4 md:text-wh4 lg:mb-8 lg:justify-center">Telefon</h3>
            <Link className="text-center font-copy text-copy lg:w-80 " href="tel:+4522422020">
              +45 22 42 20 20
            </Link>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-center p-10">
              <Image className="" src={kodby} width={70} height={80} alt="Billede af chartrøse" />
            </div>
            <h3 className="  flex justify-center font-tyk text-mobileH4 md:mt-2 md:text-wh4 lg:mb-8 lg:justify-center">Adresse</h3>
            <Link className="text-center font-copy text-copy lg:w-80" href="https://goo.gl/maps/xszBcxDPS4WS8N72A">
              Flæsketorvet 6, 1711 København
            </Link>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex justify-center p-7">
          <div className="flex-col justify-center">
            <h2 className="font-tyk text-mobileH1 text-blackbase md:text-wh1">Kontaktformular</h2>
            <Kontakt></Kontakt>
          </div>
        </div>
      </section>
      <section className=" bg-clay py-10 ">
        <TextBanner text="BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN &nbsp; - &nbsp; BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN"></TextBanner>
      </section>
    </>
  );
}
