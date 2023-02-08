import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGlobe } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="p-4 bg-[#111827]">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href={"https://tikomdik.jabarprov.go.id/"} className="flex items-center">
            <Image
              src="/image/logo.png"
              className="mr-3"
              alt="FlowBite Logo"
              width={200}
              height={0}
            />
          </Link>
          <h1 className="lg:w-2/5 font-Poppins font-normal text-white/50 p-7">TIKomDik UPTD TIKOMDIK (Teknologi Informasi dan Komunikasi Pendidikan) Dinas Pendidikan Provinsi Jawa Barat.</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li>
                <Link href={"https://tailwindcss.com/"} className="hover:underline">
                  Tailwind CSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <Link
                  href={"https://twitter.com/tikomdik"}
                  className="hover:underline "
                >
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={"https://www.instagram.com/tikomdik_disdikjabar/"}
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href={"https://www.facebook.com/Tikomdik"}
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
          {/* <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Legal
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between px-16">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023
          <Link href={"https://www.instagram.com/smkn13bandung/"} className="hover:underline">
            Prakerin SMKN 13 Bandung
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 items-center">
          <Link
            href={"https://www.facebook.com/Tikomdik"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsFacebook />
            <span className="sr-only">Facebook page</span>
          </Link>
          <Link
            href={"https://www.instagram.com/tikomdik_disdikjabar/"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsInstagram />
            <span className="sr-only">Instagram page</span>
          </Link>
          <Link
            href={"https://twitter.com/tikomdik"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsTwitter />
            <span className="sr-only">Twitter page</span>
          </Link>
          <Link
            href={"https://tikomdik.jabarprov.go.id/"}
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <BsGlobe />
            <span className="sr-only">Offical website</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
