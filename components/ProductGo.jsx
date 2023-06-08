"use client";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSWRConfig } from "swr";
import { addToCart } from "@/lib/swell/cart";

const ProductGo = ({ product }) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(1);

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
        {/* Product info */}
        <div className="block sm:px-0 md:sticky md:px-4">
          <h1 className="font-tyk text-mobileH1 text-blackbase md:text-wh1">{product.name}</h1>
          <div>
            <div className="mt-3">
              <div className="font-copy text-copy text-blackbase" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            <div className="mt-10">
              <h6 className="text-mobileH6 py-3 font-normal text-blackbase md:text-wh6">Valgmuligheder</h6>
              <div>
                <form action="" className="flex flex-row flex-wrap gap-3">
                  <label
                    for="rad1"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input id="rad1" type="radio" name="valgmuligheder" value="1 stk" className="accent-orangebase" /> &nbsp; 1 stk
                  </label>
                  <label
                    for="rad2"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input id="rad2" type="radio" name="valgmuligheder" value="Smagskasse" className="accent-orangebase" />
                    &nbsp; Smagskasse
                  </label>
                  <label
                    for="rad3"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input id="rad3" type="radio" name="valgmuligheder" value="12 stk" className="accent-orangebase" />
                    &nbsp; 12 stk
                  </label>
                  <label
                    for="rad4"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input id="rad4" type="radio" name="valgmuligheder" value="24 stk" className="accent-orangebase" />
                    &nbsp; 24 stk
                  </label>
                  <label
                    for="rad5"
                    className="h-auto border-2 border-black400 bg-white100 px-5  py-3 text-deskButtonSecondary font-normal  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <input id="rad5" type="radio" name="valgmuligheder" value="Drink what you can" className="accent-orangebase" />
                    &nbsp; Drink what you can
                  </label>
                </form>
              </div>
            </div>
            <div className="mt-10">
              <h6 className="text-mobileH6 font-normal text-blackbase md:text-wh6">Pris {product.price} DKK</h6>
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
        </div>
      </div>
    </div>
  );
};

export default ProductGo;
