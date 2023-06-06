"use client";
import ProductShop from "./productShop";

const Products = ({ products }) => {
  // console.log(products[4].attributes.historie);

  return (
    <div className="w-full py-5 md:py-24">
      <div className="container p-5">
        <h1 className="font-tyk text-mobileH1 text-blackbase md:text-wh1">Plateau Shop</h1>
        <h5 className="font-tyk text-mobileH5 text-blackbase md:text-wh6">Alle produkter</h5>
        {/* Her laver vi et grid til vores produkter og mapper igennem produkt 
        arrayet for at få hver enkelt produkt som et card.  */}
        <div className=" flex flex-col items-center gap-5 md:mt-20 md:grid md:grid-cols-3 md:items-baseline">
          {products.map((product) => (
            <ProductShop key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
