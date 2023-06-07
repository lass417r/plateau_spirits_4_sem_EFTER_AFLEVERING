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
      <div className="px-20 md:mt-20">
        <h1 className="font-tyk text-mobileH1 text-blackbase md:text-wh1">Plateau Shop</h1>
        <h5 className="font-tyk text-mobileH5 text-blackbase md:text-wh6">Alle produkter</h5>
      </div>
      <section className="md:mx-32 md:py-24">
        <Products products={products} />
      </section>
      <section className=" md:mx-32 md:mb-20">
        <h3 className="font-tyk text-mobileH3 md:text-wh3 ">PlateauGO produkter</h3>
        <div className=" flex flex-col items-center gap-10 md:mt-20 md:grid md:grid-cols-3 md:items-baseline">
          {productsGo.map((product) => (
            <PlateauGo key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
