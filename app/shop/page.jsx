import { getProducts, getProductsGo } from "@/lib/swell/products";
import Products from "@/components/products";
import PlateauGo from "@/components/PlateauGo";

export default async function productPage({}) {
  {
    /* Her fetcher vi vores productdata og modtager det som et array */
  }
  const { results: products } = await getProducts({ page: 1 });
  const { results: productsGo } = await getProductsGo({ page: 1 });
  return (
    <div className="md:mx-5">
      {/* Her videresender vi vores products array til 
      vores komponent der mapper over dataen */}
      <div className="px-28 md:mt-10">
        <h1 className="font-tyk text-mobileH1 text-blackbase md:text-wh1">Plateau Shop</h1>
      </div>
      <section className="md:mx-32 md:py-12">
        <Products products={products} />
      </section>
      <section className="mx-5 my-10 md:mx-32 md:my-20">
        <h3 className="font-tyk text-mobileH3 md:text-wh3 ">PlateauGO produkter</h3>
        <div className=" mt-5 flex flex-col items-center gap-10  md:grid md:grid-cols-3 md:items-baseline">
          {productsGo.map((product) => (
            <PlateauGo key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
