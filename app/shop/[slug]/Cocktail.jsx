import Image from "next/image";
import cocktailpic from "../../../public/images/cocktailpic.png";
export default function Cocktail({ product }) {
  return (
    <div className="mt-5 p-5 md:mx-16 md:mt-40">
      <div className="relative z-10 ">
        <h2 className=" font-ssort text-titlebxs text-orangebase md:text-titlexl">Cocktail</h2>
        <h3 className=" font-ssort text-mobileH3 text-yellowbase md:hidden">Rosemary me up</h3>
      </div>
      <div className="flex  flex-col-reverse gap-10 md:flex-row  ">
        <div className="md:basis-2/3">
          <h3 className="hidden font-ssort text-wh3 text-yellowbase md:inline">Rosemary me up</h3>
          <div className=" flex flex-col gap-3 text-yellowbase md:mt-12">
            <h5 className="font-tyk text-mobileH5 md:text-wh5">Fremgangsmåde</h5>
            <p className="font-copy text-copy">
              Knus et par kviste frisk rosmarin i bunden af et cocktailglas. Tilsæt gin, rosmarinsirup og friskpresset citronsaft i en shaker sammen med isterninger.
              <br />
              <br />
              Ryst godt i ca. 10 sekunder og hæld forsigtigt cocktailen over i glasset.
              <br />
              <br />
              Valgfri: pynt med en kvist frisk rosmarin
            </p>
          </div>
          <div className=" mb-12 mt-12 flex flex-col gap-3 text-yellowbase md:mb-0">
            <h5 className="font-tyk text-mobileH5 md:text-wh5">Ingredienser</h5>
            <ul className="font-copy text-copy"></ul>
            <li>5 cl gin</li>
            <li>2 cl rosmarinsirup</li>
            <li>2 cl friskpresset citronsaft</li>
            <li>Et par kviste frisk rosmarin</li>
            <li>Isterninger</li>
          </div>
        </div>
        <div className="relative z-0 mt-8 aspect-[1/1]  h-auto w-full md:-right-24 md:-top-28 md:flex md:basis-2/3 md:flex-col md:gap-3  ">
          <Image src={cocktailpic} alt="billede af cocktail" fill className="object-cover object-center"></Image>
        </div>
      </div>
    </div>
  );
}
