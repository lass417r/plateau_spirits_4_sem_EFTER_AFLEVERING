import { getProductsGo } from "@/lib/swell/products";
import PlateauGo from "@/components/PlateauGo";
import Image from "next/image";
import minibg from "../../public/images/go/minibg.png";
import pic1 from "../../public/images/go/pic1.png";

export default async function productsPageGo({}) {
  {
    /* Her fetcher vi vores productdata og modtager det som et array */
  }
  const { results: products } = await getProductsGo({ page: 1 });

  return (
    <div className="">
      {/* Her videresender vi vores products array til 
      vores komponent der mapper over dataen */}
      <section className=" flex flex-col items-center gap-20 p-5 md:mx-32">
        <div className="flex flex-col items-start gap-20 p-5 md:mb-20 md:flex-row">
          <div className="basis-1/2">
            <Image className="h-full w-full" src={minibg} width={1250} height={1250} alt="Billede af lokation" />
          </div>
          <div className="top-36 basis-1/2 lg:max-w-[80%]">
            <h1 className="font-tyk text-mobileH1 md:text-wh1 ">PlateauGO</h1>
            <p className="font-copy  lg:max-w-[85%]">
              <br />
              <span className="text-copy">
                Præsenterer Plateau Spirits&lsquo; eksklusive færdigblandede Gin og Tonic, en harmonisk kombination fremstillet med lidenskab i hjertet af det pulserende København. Hver flaske er et
                vidnesbyrd om mestrenes håndværk og dedikation hos Plateau Spirits, der har perfektioneret den delikate balance mellem forfriskende botanicals og sprudlende citrusnoter.
              </span>
              <br />
              <br />
              <br />
            </p>

            <a href="#KontaktEvents" className="voresKnap border-2  border-black400 bg-white100 px-5  py-3 font-ssort text-black400 md:text-deskButtonPrimary md:tracking-wider">
              Se udvalg
            </a>
          </div>
        </div>
        <div>
          <h2 className="font-tyk text-mobileH2 md:mb-5 md:mt-20 md:text-wh2 ">Hvorfor vælge PlateauGO?</h2>
        </div>
      </section>

      <section className="bg-clay">
        <div className="md:mx-32">
          <div className="flex flex-col gap-10  py-20 md:grid md:grid-cols-3 md:pb-32">
            <div className="flex flex-col items-center gap-10 p-5">
              <h6 className="font-tyk text-titlem text-orangebase md:text-titlexl">1</h6>
              <h3 className="-mt-16 font-tyk text-mobileH3 md:text-wh3">Bestil</h3>
              <p className="max-w-[70%] font-copy md:max-w-[90%]">
                Præsenterer Plateau Spirits&lsquo; eksklusive færdigblandede Gin og Tonic, en harmonisk kombination fremstillet med lidenskab i hjertet af det pulserende
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 p-5">
              <h6 className="font-tyk text-titlem text-orangebase md:text-titlexl">2</h6>
              <h3 className="-mt-16 font-tyk text-mobileH3 md:text-wh3">Nyd</h3>
              <p className="max-w-[70%] font-copy md:max-w-[90%]">
                Præsenterer Plateau Spirits&lsquo; eksklusive færdigblandede Gin og Tonic, en harmonisk kombination fremstillet med lidenskab i hjertet af det pulserende
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 p-5">
              <h6 className=" font-tyk text-titlem text-orangebase md:text-titlexl">3</h6>
              <h3 className="-mt-16 font-tyk text-mobileH3 md:text-wh3">Returner</h3>
              <p className="max-w-[70%] font-copy md:max-w-[90%]">
                Præsenterer Plateau Spirits&lsquo; eksklusive færdigblandede Gin og Tonic, en harmonisk kombination fremstillet med lidenskab i hjertet af det pulserende
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" my-8 flex flex-col items-center gap-20 p-5 md:mx-32 md:my-24">
        <div className="flex flex-col items-start gap-20 p-5 md:mb-20 md:flex-row">
          <div className="top-36 basis-1/2 lg:max-w-[80%]">
            <h2 className="font-tyk text-mobileH2 md:text-wh2 ">Vores proces</h2>
            <p className="font-copy  lg:max-w-[85%]">
              <br />
              <span className="text-copy">
                Præsenterer Plateau Spirits&lsquo; eksklusive færdigblandede Gin og Tonic, en harmonisk kombination fremstillet med lidenskab i hjertet af det pulserende København. Hver flaske er et
                vidnesbyrd om mestrenes håndværk og dedikation hos Plateau Spirits, der har perfektioneret den delikate balance mellem forfriskende botanicals og sprudlende citrusnoter.
              </span>
              <br />
              <br />
            </p>
          </div>
          <div className="basis-1/2">
            <Image className="h-full w-full" src={pic1} width={624} height={441} alt="Billede af dåser" />
          </div>
        </div>
      </section>

      <section className="md:mx-32 md:mb-20">
        <h2 className="font-tyk text-mobileH2 md:text-wh2 ">Se vores PlateauGO produkter</h2>
        <div className=" flex flex-col items-center gap-10 md:mt-20 md:grid md:grid-cols-3 md:items-baseline">
          {products.map((product) => (
            <PlateauGo key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
