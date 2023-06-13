import { getProductsGo } from "@/lib/swell/products";
import PlateauGo from "@/components/PlateauGo";
import Image from "next/image";
import minibg from "../../public/images/go/daasen.gif";
import pic1 from "../../public/images/go/pic1.png";

export default async function productsPageGo({}) {
  const { results: products } = await getProductsGo({ page: 1 });

  return (
    <div className="">
      {/* Her videresender vi vores products array til 
      vores komponent der mapper over dataen */}
      <section className="flex flex-col items-center gap-20 p-5 md:mx-32">
        <div className="flex flex-col items-start gap-20 p-5 md:mb-20 md:flex-row">
          <div className="basis-1/2 overflow-hidden">
            <Image className="scale-150" src={minibg} width={2000} height={1500} alt="Billede af lokation" />
          </div>
          <div className="top-36 basis-1/2 md:sticky lg:max-w-[80%]">
            <h1 className="font-tyk text-mobileH1 md:text-wh1 ">PlateauGO</h1>
            <h2 className=" pt-6 text-mobileH5 font-normal md:text-wh5 ">Øjeblikkelig nydelse</h2>
            <p className="max-w-[95%] font-copy lg:max-w-[85%]">
              <br />
              <span className="text-copy">
                Med vores &quot;Ready to Drink&quot;-produkter behøver du ikke at bekymre dig om at finde ingredienser, blande dem eller vente på, at din drink er klar.
              </span>
            </p>
            <p className="lg:max-w-[85% max-w-[95%] pt-6 font-copy text-copy">
              Vores produkter er blevet omhyggeligt udviklet for at bevare den samme friskhed, du ville forvente fra en nylavet drink. Vi bruger kun de bedste ingredienser for at sikre, at hver eneste
              slurk er fyldt med den perfekte smagsbalance.
            </p>
            <p className="lg:max-w-[85% max-w-[95%] pt-6 font-copy text-copy">
              Uanset om du blot vil have en forfriskning når du er ude, eller vil slippe for at købe stort ind og selv lege bartender for dit selskab, er vores &quot;ready to drink&quot;-produkter den
              ideelle løsning.
            </p>
            <p className="lg:max-w-[85% max-w-[95%] pt-6 font-copy text-copy">
              Derfor tilbyder vi vores &quot;all you can drink&quot; løsning. Her bestiller du blot så meget du tror I kommer til at drikke &#40;eller lidt mere for at være på den sikre side&#41;.{" "}
              <br /> <br />{" "}
              <a className="text-decoration-line: underline" href="#aycd">
                Læs mere om &quot;All you can drink&quot; her
              </a>
            </p>

            <br />
            <br />
            <br />
            <a href="#udvalg" className="voresKnap border-2  border-black400 bg-white100 px-5  py-3 font-ssort text-black400 md:text-deskButtonPrimary md:tracking-wider">
              Se udvalg
            </a>
          </div>
        </div>
      </section>

      <section id="aycd" className="bg-clay">
        <div className="py-5 md:mx-32">
          <div className="flex flex-col items-center p-10 text-center ">
            <h2 className="mt-5 font-tyk text-mobileH2 md:mb-5 md:mt-20 md:text-wh2 ">Hvorfor Drink what you can?</h2>
          </div>
          <div className="flex flex-col gap-10  md:grid md:grid-cols-3 md:pb-20">
            <div className="flex flex-col items-center gap-10 p-5">
              <h6 className="font-tyk text-titlem text-orangebase md:text-titlem">1</h6>
              <h3 className="-mt-16 font-tyk text-mobileH3 md:text-wh3">Bestil</h3>
              <p className="max-w-[70%] font-copy md:max-w-[90%]">
                Du har besluttet ikke at stresse over rollen som bartender, det er jo trods alt din fødselsdag. Derfor er det naturlige valg, at lade Plateau Spirits stå for dagens forplejning. Du
                finder frem til de produkter du vil have og bestiller dem til enten afhentning eller levering.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 p-5">
              <h6 className="font-tyk text-titlem text-orangebase md:text-titlem">2</h6>
              <h3 className="-mt-16 font-tyk text-mobileH3 md:text-wh3">Nyd</h3>
              <p className="max-w-[70%] font-copy md:max-w-[90%]">
                Dagen er nu kommet og du kan, med ro i sindet og et stressniveau på 0, åbne døren og byde din gæster velkommen. Vores &quot;ready to drink&quot; produkter leveres i kølebokse og du
                skal derfor ikke engang tænke på at tømme køleskabet for at få plads til vores drinks.
              </p>
            </div>
            <div className="flex flex-col items-center gap-10 p-5">
              <h6 className=" font-tyk text-titlem text-orangebase md:text-titlem">3</h6>
              <h3 className="-mt-16 font-tyk text-mobileH3 md:text-wh3">Returner</h3>
              <p className="max-w-[70%] font-copy md:max-w-[90%]">
                Det er dagen derpå og du har svært ved at se hvad du skal stille op med både din egen og lejlighedens tilstand. Alt i mens det hele virker mest op ad bakke, kommer du i tanke om at der
                stadig er halvanden køleboks med drinks tilovers. I det mindste kan du så starte dagen ud med at tjene lidt penge.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-center ">
          <h4 className="text-mobileH6 max-w-[70%] pb-6 font-tyk md:mb-5 md:max-w-[75%] md:text-wh6 ">
            Har du brug for lidt tungere skyts og er du indehaver af et CVR-nummer, leverer vi selvfølgelig også større partier til enten firmafester, teamarrangemetner eller andet sjov i måtte skulle
            afholde
          </h4>
        </div>
      </section>

      <section className=" my-8 flex flex-col items-center gap-20 p-5 md:mx-32 md:my-20">
        <div className="flex flex-col items-start gap-20 p-5  md:flex-row">
          <div className="top-36 basis-1/2 md:sticky lg:max-w-[80%]">
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

      <section id="udvalg" className="flex flex-col gap-5 p-5 md:mx-32 md:mb-20 md:pt-28">
        <div>
          <h2 className="font-tyk text-mobileH2 md:text-wh2 ">Se vores PlateauGO produkter</h2>
        </div>
        <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-3 md:items-baseline">
          {products.map((product) => (
            <PlateauGo key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
