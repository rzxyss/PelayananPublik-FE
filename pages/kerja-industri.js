import Image from "next/image";
import Navbar from "../components/Navbar";
import hero from "../public/image/hero.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faChartLine,
  faChevronRight,
  faCircleNodes,
  faClipboardList,
  faClockRotateLeft,
  faCode,
  faCommentDots,
  faComputer,
  faPhotoFilm,
  faPodcast,
  faRadio,
  faTv,
  faWifi,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollTop = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-full scrollbar-hide md:scrollbar-default">
      <Navbar />
      {showButton && (
        <button
          className={`fixed w-14 h-14 bg-primary text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6 text-white" />
        </button>
      )}

      <div className="w-full h-auto">
        <div className="flex flex-col items-center lg:grid lg:grid-cols-2">
          <div className="mx-auto py-10 lg:py-20">
            <Image
              src={hero}
              responsive="true"
              alt="Hero Image"
              loading="eager"
              priority={true}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="uppercase text-black font-Lora font-bold text-4xl md:text-5xl text-center">
              Praktek Kerja Industri
            </h1>
            <p className="font-Poppins font-medium lg:w-11/12 xl:w-9/12 2xl:w-9/12 text-base md:text-lg lg:text-xl text-center mt-10 text-black/50">
              UPTD Tikomdik menyediakan lapangan bagi Siswa / Mahasiswa yang ingin melaksanakan Prakerin(Praktek Kerja Industri) di UPTD Tikomdik dengan syarat dan ketentuan yang berlaku
            </p>
            <Link
              href={"/about"}
              className="bg-primary text-white p-2 px-7 rounded-lg font-Poppins text-base md:text-lg lg:text-xl font-semibold mt-5 flex justify-center items-center"
            >
              Selengkapnya
              <FontAwesomeIcon icon={faChevronRight} className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center mt-20">
          <h1 className="uppercase font-Lora font-bold text-2xl md:text-3xl lg:text-4xl text-center text-black">
            Informasi Praktek Kerja Lapangan
          </h1>
          <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg w-11/12 lg:w-10/12 xl:w-9/12 text-center mt-5 text-black/50">
            Berikut ini beberapa Bidang yang tersedia di Tikomdik untuk Praktek Kerja Lapangan
          </h1>
          <div className="grid lg:grid-cols-4">
            {/* Card */}
            <div className="flex justify-center p-10">
              <div
                className={`bg-primary w-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-center mb-5">
                    <FontAwesomeIcon
                      icon={faCode}
                      className="w-20 h-20 text-white"
                    />
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      rpl
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white 2xl:px-16">
                      Rekayasa Perangkat Lunak
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base md:text-sm text-center text-[#f7a76c] flex items-center justify-center"
                  >
                    Baca Selengkapnya
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-6 h-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center p-10">
              <div
                className={`bg-primary w-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-center mb-5">
                    <FontAwesomeIcon
                      icon={faCircleNodes}
                      className="w-20 h-20 text-white"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-between mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      tkj
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white 2xl:px-16">
                      Teknik Komputer Jaringan
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base md:text-sm text-center text-[#f7a76c] flex items-center justify-center"
                  >
                    Baca Selengkapnya
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-6 h-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center p-10">
              <div
                className={`bg-primary w-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-center mb-5">
                    <FontAwesomeIcon
                      icon={faPhotoFilm}
                      className="w-20 h-20 text-white"
                    />
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      dkv
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white 2xl:px-16">
                      Desain Komunikasi Visual
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base md:text-sm text-center text-[#f7a76c] flex items-center justify-center"
                  >
                    Baca Selengkapnya
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-6 h-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center p-10">
              <div
                className={`bg-primary w-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-center mb-5">
                    <FontAwesomeIcon
                      icon={faWifi}
                      className="w-20 h-20 text-white"
                    />
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      iot
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white 2xl:px-16">
                      Internet Of Things
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base md:text-sm text-center text-[#f7a76c] flex items-center justify-center"
                  >
                    Baca Selengkapnya
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="w-6 h-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
