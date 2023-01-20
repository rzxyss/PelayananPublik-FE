import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BsGridFill, BsNewspaper } from "react-icons/bs";

import { HiOutlineSpeakerphone, HiViewBoards} from "react-icons/hi";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="w-2/12 min-h-screen border-l-2 border">
      <div className="flex flex-col">
        <div className="flex justify-center py-2">
          <Image
            alt="Logo Tikomdik"
            src="/image/logo.png"
            width={150}
            height={0}
            className="hidden lg:block"
          />
          <Image
            alt="Logo Tikomdik"
            src="/image/logo2.png"
            width={500}
            height={0}
            className="block lg:hidden"
          />
        </div>
        <ul className="space-y-2 text-[#112883]">
          <li
            className={`${
              router.pathname == "/admin" ? "bg-[#112883] text-white" : ""
            } w-10/12 h-auto hover:bg-[#112883] hover:text-white p-3 rounded-r-xl`}
          >
            <Link
              href={"/admin"}
              className="flex gap-1 justify-center lg:justify-start space-x-1 items-center"
            >
              <BsGridFill className="w-6 h-6" />
              <h1 className="hidden lg:block font-Poppins font-extrabold text-xl">
                Dashboard
              </h1>
            </Link>
          </li>
          <li
            className={`${
              router.pathname == "/admin/berita"
                ? "bg-[#112883] text-white"
                : ""
            } ${
              router.pathname == "/admin/berita/tambah-berita"
                ? "bg-[#112883] text-white"
                : ""
            } ${
              router.pathname == "/admin/berita/edit-berita"
                ? "bg-[#112883] text-white"
                : ""
            } w-10/12 h-auto hover:bg-[#112883] hover:text-white p-3 rounded-r-xl`}
          >
            <Link
              href={"/admin/berita"}
              className="flex gap-1 justify-center lg:justify-start space-x-1 items-center"
            >
              <BsNewspaper className="w-6 h-6" />
              <h1 className="hidden lg:block font-Poppins font-extrabold text-xl">Berita</h1>
            </Link>
          </li>
          <li
            className={`${
              router.pathname == "/admin/pengaduan"
                ? "bg-[#112883] text-white"
                : ""
            } ${
              router.pathname == "/admin/pengaduan/pengaduan-detail"
                ? "bg-[#112883] text-white"
                : ""
            } w-10/12 h-auto hover:bg-[#112883] hover:text-white p-3 rounded-r-xl`}
          >
            <Link
              href={"/admin/pengaduan"}
              className="flex gap-1 justify-center lg:justify-start space-x-1 items-center"
            >
              <HiOutlineSpeakerphone className="w-6 h-6" />
              <h1 className="hidden lg:block font-Poppins font-extrabold text-xl">
                Pengaduan
              </h1>
            </Link>
          </li>
          <li
            className={`${
              router.pathname == "/admin/program"
                ? "bg-[#112883] text-white"
                : ""
            } ${
              router.pathname == "/admin/program/tambah-program"
                ? "bg-[#112883] text-white"
                : ""
            } ${
              router.pathname == "/admin/program/edit-program"
                ? "bg-[#112883] text-white"
                : ""
            } w-10/12 h-auto hover:bg-[#112883] hover:text-white p-3 rounded-r-xl`}
          >
            <Link
              href={"/admin/program"}
              className="flex gap-1 justify-center lg:justify-start space-x-1 items-center"
            >
              <HiViewBoards className="w-6 h-6" />
              <h1 className="hidden lg:block font-Poppins font-extrabold text-xl">
                Program
              </h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
