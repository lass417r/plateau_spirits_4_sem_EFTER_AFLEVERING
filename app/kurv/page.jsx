"use client";
import Kurv from "../../components/Kurv";
import Button from "../../components/Button";

export default function page() {
  return (
    <div>
      <section className="p-5 md:mx-40 md:mb-20 md:mt-16">
        <Button href={"/shop"} text={"←  Fortsæt med at handle"}></Button>
      </section>
      <section className="p-5 md:mx-40 md:mb-10">
        <h1 className="font-tyk text-titles text-orangebase md:text-titlem">Kurv</h1>
        <Kurv />
      </section>
      <section className="flex items-end justify-end p-5 md:mx-40 md:mb-20 ">
        <Button href={"/shop"} text={"Gå til betaling"}></Button>
      </section>
    </div>
  );
}
