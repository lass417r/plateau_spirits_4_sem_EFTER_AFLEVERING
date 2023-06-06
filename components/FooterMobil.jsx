import Image from "next/image";
import Link from "next/link";
import navnelogo_hvid from "../public/assets/navnelogo_hvid.svg";
import Nyhedsbrev from "./Nyhedsbrev";
function FooterMobil() {
  return (
    <div>
      <div className=" flex flex-col items-center gap-2 p-5  pb-0 pt-10">
        <div className="flex justify-evenly">
          <Image
            src={navnelogo_hvid}
            width={300}
            height={90}
            alt="Logo"
          ></Image>
        </div>
        <div className="my-5">
          <Nyhedsbrev />
        </div>
        <div className="my-5 grid grid-flow-col gap-16">
          <div className="flex flex-col items-start gap-2">
            <h6 className="text-mobileH6 font-megettyk text-yellowbase md:text-wh6">
              Sider
            </h6>
            <Link className="font-copy text-copy text-yellowbase" href="/shop">
              Shop
            </Link>
            <Link className="font-copy text-copy text-yellowbase" href="/om">
              Om
            </Link>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/events"
            >
              Events
            </Link>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/virksomhed"
            >
              Virksomhed
            </Link>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/kontakt"
            >
              Kontakt
            </Link>
          </div>

          <div className="flex flex-col items-start gap-2">
            <h6 className="text-mobileH6 font-megettyk text-yellowbase md:text-wh6">
              Legal
            </h6>
            <p className="font-copy text-copy text-yellowbase">CVR: 1234678</p>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/kontakt"
            >
              E-Smiley
            </Link>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/kontakt"
            >
              Vilkår & betingelser
            </Link>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/kontakt"
            >
              Privatlivspolitik
            </Link>
            <Link
              className="font-copy text-copy text-yellowbase"
              href="/kontakt"
            >
              FAQ
            </Link>
          </div>
        </div>
        <hr className="my-5 w-[90%] border border-brownbase" />
        <div className="flex flex-col items-center gap-2 pt-14">
          <h6 className="text-mobileH6 font-megettyk text-yellowbase">
            Plateau Spirits
          </h6>
          <Link
            className="font-copy text-copy text-yellowbase"
            target="_blank"
            href="mailto:info@plateauspirits.com"
          >
            Info@plateauspirits.com
          </Link>
          <Link
            className="font-copy text-copy text-yellowbase"
            href="tel:+4522422020"
          >
            +45 22 42 20 20
          </Link>
          <p className="pt-4 text-center font-copy text-copy text-yellowbase">
            Flæsketorvet 6 <br /> 1711 Copenhagen
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center py-10">
          {/* <hr className="my-3 w-screen border  border-brownbase" /> */}
          <p className="font-copy text-copy  text-orangebase">
            © PLATEAU SPIRITS 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterMobil;
