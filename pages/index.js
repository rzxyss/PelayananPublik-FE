import Image from "next/image";
import Navbar from "../components/Navbar";
import hero from "../public/image/hero.png";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import { MdHistory, MdPeople } from "react-icons/md";
import { BiLineChart } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";

import BeritaPopular from "../components/BeritaPopular";
import BeritaBaru from "../components/BeritaBaru";

import axios from "axios";
import Footer from "../components/Footer";

export default function Home() {
  const [berita, setBerita] = useState([]);
  const [program, setProgram] = useState([]);
  const [tabBerita, setTabBerita] = useState("popular");
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(0);

  const getBerita = async () => {
    const berita = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/berita?limit=${limit}&page=${page}`
    );
    setBerita(berita.data.results);
  };

  const getProgram = async () => {
    const program = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/program`
    );
    setProgram(program.data.results);
  };

  useEffect(() => {
    getBerita();
    getProgram();
  }, []);

  return (
    <>
      <Navbar />
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
            <h1 className="uppercase text-[#112883] font-Lato font-extrabold text-4xl text-center">
              uptd tikomdik <span className="text-black">jawa barat</span>
            </h1>
            <p className="font-Poppins font-normal text-sm lg:w-10/12 text-center mt-10 opacity-50">
              TIKOMDIK tidak hanya berkaitan dengan teknologi tetapi bagaimana
              dapat berbagi pengetahuan dan informasi, meningkatkan komunikasi
              yang efisien dan efektif, dapat membangun komunitas belajar serta
              menciptakan budaya profesionalime di lingkungan Pendidikan.
            </p>
            <Link
              href={"/profile"}
              className="bg-[#112883] text-white p-2 px-7 rounded-lg font-Poppins text-xl font-semibold mt-5"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="bg-transparent lg:bg-[#112883] h-[350px]">
          <h1 className="uppercase font-Lato font-extrabold text-3xl lg:text-4xl text-center pt-20 text-black lg:text-white lg:underline underline-offset-8">
            tentang uptd tikomdik jawa barat
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 -mt-60">
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div className="bg-white w-full p-10 shadow-md rounded-lg hover:bg-[#FBFBFB] hover:scale-105 duration-500">
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <MdHistory className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    sekilas sejarah
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Menampilkan sekilas sejarah tentang UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/profile"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div className="bg-white w-full p-10 shadow-md rounded-lg hover:bg-[#FBFBFB] hover:scale-105 duration-500">
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <TbNotes className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    visi dan misi
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Memahi Visi dan Misi UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/profile#visi-misi"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div className="bg-white w-full p-10 shadow-md rounded-lg hover:bg-[#FBFBFB] hover:scale-105 duration-500">
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <BiLineChart className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    tupoksi
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Menampilkan Tugas Pokok dan Fungsi UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/profile#tugas-pokok-dan-fungsi"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div className="bg-white w-full p-10 shadow-md rounded-lg hover:bg-[#FBFBFB] hover:scale-105 duration-500">
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <MdPeople className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    team project
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Menampilkan Bagian dan Tugas dalam UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/profile#tugas-pokok-dan-fungsi"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-8/12">
            <div className="w-full flex flex-col justify-center items-center p-5">
              <h1 className="font-Lato font-extrabold uppercase text-3xl lg:underline underline-offset-8 mb-10">
                berita terkini
              </h1>
              <div className="grid lg:grid-cols-3 gap-5">
                {berita.map((data, index) => {
                  return (
                    <div
                      className="hover:scale-105 hover:bg-black/10 p-3 rounded-lg duration-500"
                      key={index}
                    >
                      <Image
                        src={data.url}
                        width={100}
                        height={80}
                        layout="responsive"
                        alt="Berita"
                        className="rounded-lg"
                      />
                      <div className="px-3 py-2 flex-wrap">
                        <h1 className="font-Poppins font-semibold text-lg">
                          {data.judul_berita}
                        </h1>
                        <h1 className="font-DMSans text-lg text-black/50 font-medium">
                          {data.deskripsi_berita}
                        </h1>
                      </div>
                      <div className="flex flex-row items-center text-black/60 mt-2">
                        <MdHistory className="w-5 h-5" />
                        <h1 className="font-Poppins font-light text-sm">
                          {data.createdAt}
                        </h1>
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                className={`${
                  limit == 50
                    ? "hidden"
                    : "mt-10 bg-[#112883] text-white font-Poppins font-semibold text-lg py-3 px-10 rounded-2xl "
                }`}
                onClick={() => setLimit(50)}
              >
                Muat Lebih Banyak
              </button>
              <button
                className={`${
                  limit == 6
                    ? "hidden"
                    : "mt-10 bg-[#112883] text-white font-Poppins font-semibold text-lg py-3 px-10 rounded-2xl "
                }`}
                onClick={() => setLimit(6)}
              >
                Perkecil
              </button>
            </div>
          </div>

          <div className="w-full lg:w-4/12 mt-20">
            <div className="w-full flex flex-col justify-center items-center gap-4 p-5">
              <div className="inline-flex">
                <button
                  type="button"
                  className={`py-2 px-4 text-sm font-medium bg-transparent ${
                    tabBerita == "popular" ? "border-b-4 border-[#112883]" : ""
                  }`}
                  onClick={() => setTabBerita("popular")}
                >
                  Terpopuler
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 text-sm font-medium bg-transparent ${
                    tabBerita == "baru" ? "border-b-4 border-[#112883]" : ""
                  }`}
                  onClick={() => setTabBerita("baru")}
                >
                  Terbaru
                </button>
              </div>
              {tabBerita === "popular" && <BeritaPopular />}
              {tabBerita === "baru" && <BeritaBaru />}
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-5 pt-20" id="program">
          <h1 className="font-Lato font-extrabold uppercase mb-5 text-4xl text-center lg:underline underline-offset-8">
            program tikomdik
          </h1>
          <div className="w-full px-5 lg:px-40 pb-20">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
            >
              {/* <SwiperSlide>
                <div className="w-full aspect-[16/7]">
                  <div className="bg-[url('/image/berita2.jpg')] h-full bg-cover bg-center">
                    <div className="bg-black/50 w-full h-full p-2 flex flex-col justify-end items-center">
                      <h1 className="font-bold text-3xl text-white mb-5">
                        judul
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide> */}
              {program.map((program, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full aspect-[16/7]">
                      <div
                        className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${program.url})` }}
                      >
                        <div className="bg-black/50 w-full h-full p-2 flex flex-col justify-end items-center">
                          <h1 className="font-bold lg:text-3xl text-white lg:mb-5">
                            {program.judul_program}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
