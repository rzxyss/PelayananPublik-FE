import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function Breadcrumb() {
  const router = useRouter()

  return (
    <nav className="flex mx-auto px-5 md:px-16 lg:container" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="font-Poppins font-semibold text-xl text-second"
          >
            Beranda
          </Link>
        </li>
        <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-white" />
        <li
          className={`${
            router.pathname === "/about" ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <span className="font-Poppins font-semibold text-xl text-white">
              Tentang UPTD Tikomdik
            </span>
          </div>
        </li>
        <li
          className={`${
            router.pathname === "/berita" ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <span className="font-Poppins font-semibold text-xl text-white">
              Berita UPTD Tikomdik
            </span>
          </div>
        </li>
        <li
          className={`${
            router.pathname === "/laporan" ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <span className="font-Poppins font-semibold text-xl text-white">
              Laporan UPTD Tikomdik
            </span>
          </div>
        </li>
        <li
          className={`${
            router.pathname === "/kegiatan" ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center">
            <span className="font-Poppins font-semibold text-xl text-white">
              Kegiatan UPTD Tikomdik
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
}
