import { getProductBySlugOrId } from "@/lib/swell/products";
import ProductGo from "@/components/ProductGo";
import Go from "./Go";
import ProductRecsGo from "./ProductRecsGo";

export default async function productPageGo({ params }) {
  const product = await getProductBySlugOrId(params.slug);
  return (
    <div>
      <section className=" md:mx-32">
        <ProductGo product={product} />
      </section>
      <section className=" overflow-hidden bg-matte200">
        <Go />
      </section>
      <section className=" overflow-hidden md:mx-32">
        <ProductRecsGo />
      </section>
    </div>
  );
}
