import Link from "next/link";

function Button({ href, text, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="voresKnap border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-black400 md:text-deskButtonPrimary md:tracking-wider">
      {text}
    </Link>
  );
}

export default Button;
