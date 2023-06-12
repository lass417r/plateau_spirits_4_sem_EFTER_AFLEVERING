"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSWRConfig } from "swr";
import { addToCart } from "@/lib/swell/cart";
import styles from "@/styles/Go.module.css";

import bauhaus from "@/public/images/go/bauhaus.png";
import spacey from "@/public/images/go/spacey.png";
import rhu from "@/public/images/go/rhu.png";

import g1 from "@/public/images/go/g1.png";
import g2 from "@/public/images/go/g2.png";
import g3 from "@/public/images/go/g3.png";

const ProductGo = ({ product }) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(1);

  const [selectedPrice, setSelectedPrice] = useState(product.price);
  const [showMe, setShowMe] = useState(true);

  const toggleTrue = (price) => {
    setSelectedPrice(price);
    setShowMe(true);
  };

  function toggleFalse() {
    setShowMe(false);
  }

  // AddToCart
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addToCart({
      product_id: product.id,
      quantity: quantity,
    });
    mutate("cart");
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="container">
      <div className=" flex flex-col gap-10 p-5 md:grid md:grid-cols-2 md:items-start md:gap-x-8">
        <div className="relative flex aspect-[1/1] md:sticky  md:top-36  md:mb-16">
          <Image src={product.images[0].file.url} alt={product.name} fill className="  object-cover object-center"></Image>
        </div>
        <div className="block sm:px-0 md:sticky md:px-4">
          <h1 className="font-tyk text-mobileH1 text-blackbase md:text-wh1">{product.name}</h1>
          <div>
            <div className="mt-3">
              <div className="font-copy text-copy text-blackbase" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            <div className="mt-10">
              <h6 className="text-mobileH6 py-3 font-normal text-blackbase md:text-wh6">Valgmuligheder</h6>
              <div>
                <form action="" className="flex flex-row flex-wrap gap-2 md:gap-3">
                  <label
                    for="rad1"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input onClick={() => toggleTrue(product.price)} id="rad1" type="radio" name="valgmuligheder" value="1 stk" className="accent-orangebase" /> &nbsp; 1 stk
                  </label>
                  <label
                    for="rad2"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input onClick={() => toggleTrue(95)} id="rad2" type="radio" name="valgmuligheder" value="Smagskasse" className="accent-orangebase" />
                    &nbsp; Smagskasse
                  </label>
                  <label
                    for="rad3"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input onClick={() => toggleTrue(350)} id="rad3" type="radio" name="valgmuligheder" value="12 stk" className="accent-orangebase" />
                    &nbsp; 12 stk
                  </label>
                  <label
                    for="rad4"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input onClick={() => toggleTrue(700)} id="rad4" type="radio" name="valgmuligheder" value="24 stk" className="accent-orangebase" />
                    &nbsp; 24 stk
                  </label>
                  <label
                    for="rad5"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input onClick={toggleFalse} id="rad5" type="radio" name="valgmuligheder" value="Drink what you can" className="accent-orangebase" />
                    &nbsp; Drink what you can
                  </label>
                </form>
              </div>
            </div>

            {showMe ? (
              // true
              <div>
                <div className="mt-10">
                  <h6 className="text-mobileH6 font-normal text-blackbase md:text-wh6">Pris {selectedPrice} DKK</h6>
                </div>

                <form className="" onSubmit={handleSubmit}>
                  <div className=" start-0 mt-10 flex items-stretch gap-10">
                    <input
                      className="h-auto border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                      onChange={(e) => setQuantity(e.target.value)}
                      value={quantity}
                      type="number"
                      id="quantity"
                      name="quantity"
                      min="1"
                      max="10"
                    ></input>
                    <button
                      type="submit"
                      className="voresKnap h-auto border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50  sm:w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // false
              <div className="mt-5 flex flex-col gap-5 bg-yellowbase p-5 md:mt-10 md:p-10">
                <div>
                  <h5 className="py-1 font-tyk text-mobileH5 text-blackbase md:py-3 md:text-wh5">Spring bartenderen over med vores koncept</h5>
                  <p>
                    Vores koncept “drink what you can” egner sig perfekt til events som bryllup, konfirmation, fødselsdage mv.
                    <br />
                    <br />
                    Vi kender alle at stå i situationen <b> “hvor meget skal jeg købe ind til festen?”. </b>
                    <br />
                    <br />
                    Med vores koncept “Drink what you can” bestiller du efter antal personer, hvor der bliver leveret rigeligt med drikkelse. Når festen er færdig, har du fri mulighed for at levere
                    resten tilbage, uden yderligere omkostninger for dig. Du vil derfor få det fulde beløb tilbage for alle dåser returneret.
                  </p>
                </div>
                <div className="my-5 grid grid-cols-3 gap-5 text-center md:my-10">
                  <div className="flex flex-col content-center items-center p-3">
                    <Image src={g1} alt=""></Image>
                    <p className="text-copy font-normal text-black">Fri levering & retur</p>
                  </div>
                  <div className="flex flex-col content-center items-center p-3">
                    <Image src={g3} alt=""></Image>
                    <p className="text-copy font-normal text-black">Leveret i kølebokse</p>
                  </div>
                  <div className="flex flex-col content-center items-center p-3">
                    <Image src={g2} alt=""></Image>
                    <p className="text-copy font-normal text-black">Pengene tilbage</p>
                  </div>
                </div>
                <div>
                  <h3 className="pt-3 font-tyk text-mobileH3 text-blackbase md:text-wh3">Bestil</h3>
                  <form action="" className="flex flex-col">
                    <label className="mt-2 pl-0 text-copy font-normal text-black" for="event">
                      Type event <br />
                      <select id="event" className="my-2 w-full border border-black p-5 focus:outline-orangebase" name="event">
                        <option value="general"> Fødselsdag</option>
                        <option value="tickets"> Bryllup</option>
                        <option value="tickets"> Konfirmation</option>
                        <option value="tickets"> Firmafest</option>
                        <option value="tickets"> Blabla</option>
                      </select>
                    </label>
                    <label className="mt-2 pb-5 pl-0 text-copy font-normal text-black" for="event">
                      Antal personer* <br />
                      <input type="text" className="my-2 w-full border border-black p-5 focus:outline-orangebase" placeholder="Eks. 45 pers." />
                    </label>
                  </form>
                  <div>
                    <h5 className="py-3 pt-7 font-tyk text-copy text-blackbase ">Hvilke varianter vil du have i pakken?</h5>
                    <div>
                      <ul className={`${styles["go-ul"]} grid grid-cols-3`}>
                        <li className={`${styles["go-li"]} col-span-1`}>
                          <input type="checkbox" id="cb1" className={styles["go-cb"]} />
                          <label for="cb1" className={`${styles["go-label"]} pb-14 md:pb-12`}>
                            <div className="relative">
                              <Image className=" z-0" src={rhu} alt="Dåse"></Image>
                              <p className="absolute z-10 w-full break-words pb-5 text-center font-copy text-scopy text-blackbase md:-mt-4 md:font-tyk md:text-copy">Rhubarbarian</p>
                            </div>
                          </label>
                        </li>
                        <li className={`${styles["go-li"]} col-span-1`}>
                          <input type="checkbox" id="cb2" className={styles["go-cb"]} />
                          <label for="cb2" className={`${styles["go-label"]} pb-14 md:pb-12`}>
                            <div className="relative">
                              <Image className=" z-0" src={spacey} alt="Dåse"></Image>
                              <p className="absolute z-10 w-full break-words pb-5 text-center font-copy text-scopy text-blackbase md:-mt-4 md:font-tyk md:text-copy">Spacey G&T</p>
                            </div>
                          </label>
                        </li>
                        <li className={`${styles["go-li"]} col-span-1 `}>
                          <input type="checkbox" id="cb3" className={styles["go-cb"]} />
                          <label for="cb3" className={`${styles["go-label"]} pb-14 md:pb-12`}>
                            <div className="relative">
                              <Image className=" z-0" src={bauhaus} alt="Dåse"></Image>
                              <p className="absolute z-10 w-full break-words pb-5 text-center font-copy text-scopy text-blackbase md:-mt-4 md:font-tyk md:text-copy">Bauhaus Fizz</p>
                            </div>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start md:mt-5">
                      <form action="" className="flex flex-col gap-3">
                        <label htmlFor="e2" className="m-0 mt-10 pl-0 text-copy font-normal text-black">
                          <input className="accent-orangebase focus:outline-orangebase" type="checkbox" name="" id="e2" />
                          &nbsp; Jeg acceptere handelsbetingelser
                        </label>
                        <label htmlFor="e1" className="m-0 mb-5 pl-0 text-copy font-normal text-black">
                          <input className="accent-orangebase focus:outline-orangebase" type="checkbox" name="" id="e1" />
                          &nbsp; Tilmeld nyhedsbrevet og få 10% på første køb
                        </label>
                      </form>
                      <div className="voresKnap h-auto border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50  ">
                        Check ud
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGo;
