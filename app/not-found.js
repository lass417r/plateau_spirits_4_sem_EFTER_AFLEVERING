import Button from "@/components/Button";
import Image from "next/image";
import fejl from "../public/assets/404.svg";
import logo from "../public/images/daeksel.svg";

export default function NotFound() {
  return (
    <div className="mx-10 mt-5 flex h-auto w-auto flex-col items-center justify-start gap-16 md:mx-40 md:min-h-screen ">
      <div className="relative h-1/3 w-1/3">
        <Image className="z-1 h-full w-full animate-spin-slow p-5" src={fejl} width={400} height={400} alt="404"></Image>
        <Image className="absolute left-1/2 top-1/2 z-10 h-[65%] w-auto -translate-x-1/2 -translate-y-1/2 transform md:h-[60%]" src={logo} width={400} height={400} alt="logo plateau"></Image>
      </div>
      <div className="my-10 flex flex-col md:my-3 ">
        <div className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-tyk text-mobileH1 text-orangebase  md:text-wh1">Not found – 404!</h1>

          <Button href={"/"} text={"Gå til forsiden"}></Button>
        </div>
      </div>
    </div>
  );
}
