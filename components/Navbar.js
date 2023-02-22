import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiFillCaretDown } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();
  return (
    <>
      <div className="w-full shadow-md sticky top-0 z-30 bg-white">
        <div className="flex flex-wrap justify-between items-center p-3 lg:px-14 px-5">
          <Link href={"/"}>
            <Image
              src={"/image/logo.png"}
              responsive="true"
              alt="Logo TikomDik"
              width={150}
              height={0}
            />
          </Link>
          <button className="flex lg:hidden" onClick={() => setOpen(!open)}>
            <svg
              className="h-8 w-8 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            className={`${
              !open
                ? "hidden lg:mt-0 lg:space-y-0 lg:flex lg:w-auto lg:gap-10"
                : "lg:text-center mt-5 w-full space-y-3"
            }`}
          >
            <li
              className={`font-Poppins font-semibold text-xl ${
                router.pathname === "/" ? "text-primary" : "text-black/50"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`font-Poppins font-semibold text-xl ${
                router.pathname === "/berita" ? "text-primary" : "text-black/50"
              }`}
            >
              <Link href="/berita">Berita</Link>
            </li>
            <li
              className={`font-Poppins font-semibold text-xl text-black/50 lg:cursor-pointer`}
            >
              <div className="flex items-center">
                <h1
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                >
                  Profile
                </h1>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-5 h-5 text-black/50"
                  onClick={() => setShow(!show)}
                  onMouseEnter={() => setShow(true)}
                  onMouseLeave={() => setShow(false)}
                />
              </div>
              <ul
                className={`bg-white lg:border p-2 ${
                  !show ? "hidden" : "lg:absolute "
                }`}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                <li>
                  <Link href="/about" className="text-lg font-medium">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-lg font-medium">
                    Portofolio
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`font-Poppins font-semibold text-xl ${
                router.pathname === "/laporan"
                  ? "text-primary"
                  : "text-black/50"
              }`}
            >
              <Link href={"/laporan"}>Laporan</Link>
            </li>
            <li
              className={`font-Poppins font-semibold text-xl ${
                router.pathname === "/kegiatan"
                  ? "text-primary"
                  : "text-black/50"
              }`}
            >
              <Link href={"/kegiatan"}>Kegiatan</Link>
            </li>
            <li
              className={`font-Poppins font-semibold text-xl ${
                router.pathname === "/faq" ? "text-primary" : "text-black/50"
              }`}
            >
              <Link href={"/faq"}>FAQ</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
