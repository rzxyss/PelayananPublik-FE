import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const mouseEnter = async () => {
    setShow(true);
  };

  const mouseLeave = async () => {
    setTimeout(function () {
      setShow(false);
    }, 1500);
  };
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
                router.pathname === "/about" ? "text-primary" : "text-black/50"
              }`}
            >
              <Link href="/about">Profile</Link>
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
              onMouseEnter={mouseEnter}
              onMouseLeave={mouseLeave}
            >
              <div className="flex items-center gap-1">
                <h1>Layanan</h1>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="w-5 h-5 text-black/50"
                  onClick={() => setShow(!show)}
                />
              </div>
              <ul
                className={`bg-white border-t-4 border-t-primary p-3 gap-3 flex flex-col ${
                  !show ? "hidden" : "lg:absolute "
                }`}
              >
                <li>
                  <Link
                    href="https://www.phiradio.net/"
                    className="font-Poppins font-semibold text-xl hover:ml-4 hover:text-second"
                    passHref
                    target={"_blank"}
                  >
                    Phi Radio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kerja-industri"
                    className={`font-Poppins font-semibold text-xl hover:ml-4 hover:text-second ${
                      router.pathname === "/kerja-industri"
                        ? "text-primary"
                        : "text-black/50"
                    }`}
                  >
                    Kerja Industri
                  </Link>
                </li>
              </ul>
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
                router.pathname === "/laporan"
                  ? "text-primary"
                  : "text-black/50"
              }`}
            >
              <Link href={"/laporan"}>Laporan</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
