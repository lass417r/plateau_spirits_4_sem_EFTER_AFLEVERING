"use client";
import Image from "next/image";
import textcirkel from "../public/images/roundlogo.svg";
import lgo from "../public/images/daeksel.svg";
import Button from "../components/Button";
import Buttonw from "../components/Buttonw";
import { useState, useEffect } from "react";

export default function OverAtten() {
  const [popupClosed, setPopupClosed] = useState(true);

  useEffect(() => {
    const state = localStorage.getItem("overattenClicked");
    setPopupClosed(state || false);
  }, []);

  function btnClick() {
    localStorage.setItem("overattenClicked", "true");
    setPopupClosed(true);
  }

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = popupClosed ? "auto" : "hidden";
    }
  }, [popupClosed]);

  return (
    <>
      {!popupClosed && (
        <div className="fixed inset-0 z-[500] h-screen w-screen  bg-greybase opacity-100">
          <section className="w-160px h-160px relative mt-10 flex flex-col items-center gap-5 ">
            <div className="relative">
              <Image className="z-1 h-full w-full animate-spin-slow p-5" src={textcirkel} width={400} height={400} alt="er du over atten?"></Image>
              <Image className="absolute left-1/2 top-1/2 z-10 h-[65%] w-auto -translate-x-1/2 -translate-y-1/2 transform md:h-[60%]" src={lgo} width={400} height={400} alt="logo plateau"></Image>
            </div>
            <div className=" flex flex-col items-center">
              <h1 className=" text-center font-ssort text-mobileH1 text-black500 md:text-wh1">Er du over 18?</h1>
              <div className="mx-auto flex gap-10 pt-10">
                <Button onClick={btnClick} href={"/"} text={"   JA   "}></Button>
                <Buttonw href={"https://www.dr.dk/drtv/ramasjang"} text={"   NEJ   "}></Buttonw>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

// acceptAtten.addEventListener("click", fjernAttenboks);
// denyAtten.addEventListener("click", fjernAttenboks);

// function fjernAttenboks() {
//   Attenboks.classList.add("hidden");
//   sessionStorage.setItem("fjernAttenboks", true.toString());
// }

// // udkommenter herfra hvis den skal komme hele tiden
// if (sessionStorage.getItem("fjernAttenboks")) {
//   Attenboks.classList.add("hidden");
// }
