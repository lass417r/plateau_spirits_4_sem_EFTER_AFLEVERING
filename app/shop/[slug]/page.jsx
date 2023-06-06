import { getProductBySlugOrId } from "@/lib/swell/products";
import Product from "@/components/product";
import Cocktail from "./Cocktail";
import ProductRecs from "./ProductRecs";

export default async function productPage({ params }) {
  const product = await getProductBySlugOrId(params.slug);
  const recs = [product.up_sells];
  return (
    <div>
      <section className=" md:mx-32">
        <Product product={product} />
      </section>
      <section className=" overflow-hidden bg-matte200">
        <Cocktail product={product} />
      </section>
      <section className=" overflow-hidden md:mx-32">
        <ProductRecs props={recs} />
      </section>
    </div>
  );
}
