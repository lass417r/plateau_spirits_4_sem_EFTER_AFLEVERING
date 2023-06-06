import { getProducts } from "@/lib/swell/products";
import Products from "@/components/products";

export default async function productPage({}) {
  {
    /* Her fetcher vi vores productdata og modtager det som et array */
  }
  const { results: products } = await getProducts({ page: 1 });

  return (
    <div className="md:mx-32">
      {/* Her videresender vi vores products array til 
      vores komponent der mapper over dataen */}
      <Products products={products} />{" "}
    </div>
  );
}
