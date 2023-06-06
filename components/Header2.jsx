"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { getCart } from "@/lib/swell/cart";
import useSWR from "swr";
import { motion } from "framer-motion";

import logo from "../public/assets/navnelogo.svg";
import ikoner_kopi from "../public/assets/Ikoner-kopi.svg";
import luk from "../public/assets/sort.svg";
import oopen from "../public/assets/sort-kopi.svg";

export default function Navbar() {
  const { data: cart, isLoading } = useSWR("cart", getCart);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();
  const router = useRouter();
  const currentRoute = usePathname();

  const HamburgerIcon = () => (
    <div onClick={toggleCart}>
      <Image src={oopen} width={30} height={30} alt="Menu icon"></Image>
    </div>
  );
  const CloseIcon = () => (
    <div onClick={toggleCart}>
      <Image src={luk} width={30} height={30} alt="Menu icon"></Image>
    </div>
  );

  const toggleCart = () => {
    setMenuOpen(!menuOpen);
  };

  // set color on scroll
  const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    // Check if window is defined (we are on the client-side)
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);

      // Cleanup after component is unmounted
      return () => {
        window.removeEventListener("scroll", changeColor);
      };
    }
  }, []);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = menuOpen ? "hidden" : "auto";
    }
  }, [menuOpen]);

  const menu = [
    {
      label: "SHOP",
      href: "/shop",
    },
    {
      label: "OM",
      href: "/om",
    },
    {
      label: "VIRKSOMHED",
      href: "/virksomhed",
    },
    {
      label: "EVENTS",
      href: "/events",
    },
    {
      label: "KONTAKT",
      href: "/kontakt",
    },
  ];

  return (
    <header className="sticky inset-x-0 top-0 z-40  h-auto last:text-gray-600">
      <div className={`"sticky inset-0 h-auto w-screen ${color ? "delay-50  drop-shadow-sm transition ease-in-out md:bg-greybase " : "delay-50 bg-transparent transition ease-in-out"}`}>
        <div className="container z-50 mx-auto flex  w-screen flex-row items-center justify-between bg-greybase  p-7 ">
          {/*LOGO*/}
          <Link href="/" className="flex">
            <Image src={logo} alt="Logo" width={150} height={60} />
          </Link>
          <nav className="hidden items-center justify-center md:ml-auto md:flex ">
            {menu.map((item, index) => (
              <Link href={item.href} key={index} className={`mx-3 font-tyk text-blackbase hover:text-orangebase  ${currentRoute === item.href ? "text-orangebase" : "text-blackbase "}`}>
                {item.label}
              </Link>
            ))}
            <Link href="/kurv" className="flex items-center gap-x-2 pl-4">
              <Image src={ikoner_kopi} alt="Cart icon" width={30} height={30} />

              {cart?.item_quantity ? <span className="rounded text-xs flex h-5 w-5 items-center justify-center bg-orangebase font-medium text-white100">{cart?.item_quantity}</span> : null}
            </Link>
          </nav>
          {/*MOBILE ONLY*/}
          <div className="z-50  flex items-center justify-center space-x-4 overscroll-y-none  md:hidden ">
            <div>
              <Link href="/kurv" className="flex items-center gap-x-2 pl-4">
                <Image src={ikoner_kopi} alt="Cart icon" width={30} height={30} />
                {cart?.item_quantity ? <span className="rounded text-xs flex h-5 w-5 items-center justify-center bg-orangebase font-medium text-white100">{cart?.item_quantity}</span> : null}
              </Link>
            </div>
            <div className="text-2xl md:hidden">{menuOpen ? <CloseIcon onClick={toggleCart} /> : <HamburgerIcon onClick={toggleCart} />}</div>
          </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        className={`absolute h-screen w-full transform bg-greybase p-10  ease-in-out ${menuOpen ? "block translate-x-0 " : "hidden translate-x-full"}`}
        style={{ transition: "transform 5s ease-in-out" }}
      >
        {/*MOBILE NAV*/}
        <nav className="flex w-full flex-col items-start">
          {menu.map((item, index) => (
            <Link href={item.href} key={index} onClick={toggleCart} className={`my-3 font-tyk text-mobileH4 text-blackbase  ${currentRoute === item.href ? "text-orangebase" : "text-blackbase "}`}>
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
