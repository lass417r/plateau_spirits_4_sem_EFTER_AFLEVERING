"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function Cookiebox() {
  const url = "/";

  const [cookieClosed, setCookieClosed] = useState(true);

  useEffect(() => {
    const state = localStorage.getItem("cookieClicked");
    setCookieClosed(state || false);
  }, []);

  function btnClick() {
    localStorage.setItem("cookieClicked", "true");
    setCookieClosed(true);
  }

  return (
    <>
      {!cookieClosed && (
        <div className={`fixed inset-x-0 bottom-0 z-[300] mx-auto flex h-auto flex-col items-center justify-center bg-clay md:w-[100%]  md:flex-row md:px-20 `}>
          <div className="flex basis-2/3 flex-col self-start">
            <p className="px-6 pt-6  font-tyk text-mobileH5 text-black md:px-6  md:pt-6  md:text-mobileH2 ">Cookies og velsmagende dråber</p>
            <p className="px-6 pt-1 text-mobileP font-normal text-black  md:px-6  ">Dette site benytter cookies.</p>
            <Link href={url} className="px-6 pt-2 text-mobilexs underline">
              Se mere om hvordan vi bruger cookies.
            </Link>
          </div>
          <div className="flex w-full basis-1/3 flex-col gap-2 px-6 pt-6 text-center font-tyk text-mobileH3 ">
            <div onClick={btnClick} className="voresKnap border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-black400 md:text-deskButtonPrimary md:tracking-wider">
              Accepter cookies
            </div>
            <div onClick={btnClick} className="voresKnap border-2 border-black400  bg-gray-200 px-5  py-3 font-ssort text-black400 md:text-deskButtonPrimary md:tracking-wider">
              Afvis cookies
            </div>
            <form>
              <label className=" flex  gap-4 pt-1 text-right text-mobilexs" htmlFor="marketing">
                <input type="checkbox" />
                Marketing & analytics
              </label>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Cookiebox;
