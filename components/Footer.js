import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsGlobe } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="w-full bg-primary">
      <div className="py-10 font-Poppins container mx-auto px-10">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href={"https://tikomdik.jabarprov.go.id/"}
              className="flex items-center"
            >
              <Image
                src="/image/logo.png"
                className="mr-3"
                alt="FlowBite Logo"
                width={200}
                height={0}
              />
            </Link>
            <h1 className="lg:w-2/5 font-Poppins font-normal text-white/50 p-3 lg:p-7">
              TIKomDik UPTD TIKOMDIK (Teknologi Informasi dan Komunikasi
              Pendidikan) Dinas Pendidikan Provinsi Jawa Barat.
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-white/50 font-semibold">
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
            <div>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">
                Legal
              </h2>
              <ul className="text-white/50 font-semibold">
                <li className="mb-4">
                  <Link href={"/privacy-policy"} className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-white/70 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between lg:px-16">
          <span className="text-sm text-white/60 font-normal sm:text-center">
            &copy; 2023{" "}
            <Link
              href={"https://www.instagram.com/smkn13bandung/"}
              className="hover:underline"
            >
              Prakerin SMKN 13 Bandung
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 items-center">
            <Link
              href={"https://www.facebook.com/Tikomdik"}
              className="text-white/50 hover:text-white/80"
            >
              <BsFacebook />
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href={"https://www.instagram.com/tikomdik_disdikjabar/"}
              className="text-white/50 hover:text-white/80"
            >
              <BsInstagram />
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link
              href={"https://twitter.com/tikomdik"}
              className="text-white/50 hover:text-white/80"
            >
              <BsTwitter />
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href={"https://tikomdik.jabarprov.go.id/"}
              className="text-white/50 hover:text-white/80"
            >
              <BsGlobe />
              <span className="sr-only">Offical website</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
