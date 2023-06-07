"use client";
import ProductShop from "./productShop";

const Products = ({ products }) => {
  // console.log(products[4].attributes.historie);

  return (
    <div className="w-full py-5">
      <div className="container p-5">
        <h3 className="font-tyk text-mobileH3 text-blackbase md:text-wh3">Alle spirituser</h3>
        {/* Her laver vi et grid til vores produkter og mapper igennem produkt 
        arrayet for at få hver enkelt produkt som et card.  */}
        <div className=" flex flex-col items-center gap-5  md:grid md:grid-cols-3 md:items-baseline">
          {products.map((product) => (
            <ProductShop key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
