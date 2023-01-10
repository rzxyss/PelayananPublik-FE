import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/image/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* {console.log(open)} */}
      <div className="w-full shadow-md sticky top-0 z-30 bg-white">
        <div className="flex flex-wrap justify-between items-center p-3 lg:px-14 px-5">
          <Link href={'/'}><Image src={'/image/logo.png'} responsive="true" alt="Logo TikomDik" width={150} height={0}/></Link>
          <button className="flex lg:hidden" onClick={() => setOpen(!open)}>
            <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul className={`${!open ? 'hidden lg:mt-0 lg:space-y-0 lg:flex lg:w-auto lg:gap-10' : 'text-center mt-5 w-full space-y-3'}`}>
            <li className="uppercase font-BebasNeue text-2xl"><Link href='/'>home</Link></li>
            <li className="uppercase font-BebasNeue text-2xl"><Link href='/berita'>berita</Link></li>
            <li className="uppercase font-BebasNeue text-2xl">faq</li>
          </ul>
        </div>
      </div>
    </>
  );
}
