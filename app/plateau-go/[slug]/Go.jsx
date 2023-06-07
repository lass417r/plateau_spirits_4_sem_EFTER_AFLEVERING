import Image from "next/image";
import minibg from "../../../public/images/go/minibg.png";
export default function Go() {
  return (
    <div className="mt-5 p-5 md:mx-16 md:mt-40">
      <div className="relative z-10 ">
        <h2 className=" font-ssort text-titlebxs text-orangebase md:text-titlexl">Plateau GO</h2>
        <h3 className=" font-ssort text-mobileH3 text-yellowbase md:hidden">Rosemary me up</h3>
      </div>
      <div className="flex  flex-col-reverse gap-10 md:flex-row  ">
        <div className=" flex flex-col gap-3 text-yellowbase md:mt-12">
          <p className="font-copy text-copy">
            Med hvert eneste slurk begiver du dig ud på en rejse gennem et sprødt og boblende landskab.
            <br />
            <br />
            Ginnens blødhed omfavner din smagsløg, og dens forfinede botanical-profil afslører lag af smag, der ubesværet fanger dine sanser.
            <br />
            <br />
            En eksplosion af tangy tonicvand følger med den perfekte antydning af bitterhed, og skaber en harmonisk forening, der efterlader dig tørstig efter mere.
            <br />
            <br />
            Ryst godt i ca. 10 sekunder og hæld forsigtigt cocktailen over i glasset.
          </p>
        </div>
        <div className="relative z-0 mt-8 aspect-[1/1]  h-auto w-full md:-right-24 md:-top-28 md:flex md:basis-2/3 md:flex-col md:gap-3  ">
          <Image src={minibg} alt="billede af cocktail" fill className="object-cover object-center"></Image>
        </div>
      </div>
    </div>
  );
}
