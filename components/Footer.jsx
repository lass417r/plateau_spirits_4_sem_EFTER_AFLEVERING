import Image from "next/image";
import Link from "next/link";
import logohvid from "../public/assets/logohvid.svg";
import footerpic from "../public/images/pic3.jpg";

function Footer() {
  return (
    <div>
      <div className="">
        <Image alt="Billede af lokation i Kødbyen" src={footerpic} width={1512} height={765} className="w-full object-cover"></Image>
      </div>
      <div className="flex pb-10 pt-10">
        <div className="flex basis-2/5 justify-evenly">
          <Image src={logohvid} width={217} height={271} alt="Logo"></Image>
        </div>
        <div className="links flex basis-1/5 flex-col items-start gap-2">
          <h6 className="font-megettyk text-wh6 text-yellowbase">Sider</h6>
          <Link className="font-copy text-copy text-yellowbase" href="/shop">
            &rarr; Shop
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/om">
            &rarr; Om
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/events">
            &rarr; Events
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/virksomhed">
            &rarr; Virksomhed
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/kontakt">
            &rarr; Kontakt
          </Link>
        </div>

        <div className="flex basis-1/5 flex-row items-start gap-2 md:flex-col">
          <h6 className="font-megettyk text-wh6 text-yellowbase">Find os</h6>
          <p className="font-copy text-copy text-yellowbase">
            Flæsketorvet 6 <br /> 1711 Copenhagen
          </p>
          <div>
            <p className="font-tyk text-copy text-yellowbase">Mail</p>
            <Link className="font-copy text-copy text-yellowbase" target="_blank" href="mailto:info@plateauspirits.com">
              Info@plateauspirits.com
            </Link>
          </div>
          <div>
            <p className="font-tyk text-copy text-yellowbase">Telefon</p>
            <Link className="font-copy text-copy text-yellowbase" href="tel:+4522422020">
              +45 22 42 20 20
            </Link>
          </div>
          <div className="soMe font-copy text-copy text-yellowbase"></div>
        </div>
        <div className="flex basis-1/5 flex-col justify-start gap-2">
          <h6 className="font-megettyk text-wh6 text-yellowbase">Legal</h6>
          <p className="font-copy text-copy text-yellowbase">CVR 1234678</p>
          <Link className="font-copy text-copy text-yellowbase" href="/kontakt">
            E-Smiley
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/kontakt">
            Vilkår & betingelser
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/kontakt">
            Privatlivspolitik
          </Link>
          <Link className="font-copy text-copy text-yellowbase" href="/kontakt">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
