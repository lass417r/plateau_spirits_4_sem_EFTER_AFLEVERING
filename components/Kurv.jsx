"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import useSWR from "swr";

import { getCart } from "@/lib/swell/cart";
import { removeFromCart } from "@/lib/swell/cart";
import { useSWRConfig } from "swr";

const CartSlider = ({}) => {
  const { data: cart } = useSWR("cart", getCart);
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();

  const removeItem = async (itemId) => {
    await removeFromCart(itemId);
    mutate("cart");
    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="">
      <hr class=" border border-orangebase" />
      <div className="mt-8 flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cart?.items?.length > 0 &&
            cart.items.map((item) => (
              <li key={item.id} className="flex py-6 sm:px-6">
                <div className="rounded-md relative h-24 w-24 flex-shrink-0 overflow-hidden border border-gray-200">
                  <Image src={item.product.images[0].file.url} alt={item.product.name} className="h-full w-full object-cover object-center" fill="true" />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="text-base flex justify-between font-medium text-gray-900">
                      <h3>
                        <a href={`/shop/${item.product.slug}`}> {item.product.name} </a>
                      </h3>
                      <p className="ml-4">{item.price_total} DKK</p>
                    </div>
                    <p className="text-sm mt-1 text-gray-500">{item.product.name}</p>
                  </div>
                  <div className="text-sm flex flex-1 items-end justify-between">
                    <p className="text-gray-500">Antal: {item.quantity}</p>

                    <div className="flex">
                      <button onClick={() => removeItem(item.id)} className="font-tyk text-orangebase hover:text-red-950 disabled:cursor-not-allowed disabled:opacity-50">
                        Fjern produkt
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <hr class=" mt-8 border border-orangebase" />
      </div>
      <div>
        <div className="border-t border-gray-200  py-6 sm:px-6">
          <div className="text-base flex justify-end gap-5 font-medium text-gray-900">
            <p>TOTAL:</p>
            <p>{cart?.sub_total || 0} DKK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSlider;

{
}
