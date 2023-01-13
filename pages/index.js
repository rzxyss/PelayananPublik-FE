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
import { FaTasks } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import BeritaPopular from "../components/BeritaPopular";
import BeritaBaru from "../components/BeritaBaru";

import axios from "axios";

export default function Home() {
  const [berita, setBerita] = useState([]);
  // const [program, setProgram] = useState([]);

  // const getBerita = async () => {
  //   const resBerita = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}/berita`
  //   );
  //   setBerita(resBerita.data);
  // };

  // const getProgram = async () => {
  //   const resProgram = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}/program`
  //   );
  //   setProgram(resProgram.data);
  // };

  const faq = [
    {
      id: 1,
      tanya: "Apa Itu Tikomdik?",
      jawab: "Tikomdik Adalah perusahaan yang bekerja di bidang IT",
    },
    {
      id: 2,
      tanya: "Tikomdik Berada Dimana?",
      jawab:
        "Tikomdik Berada di jalan Radjiman di sebelah Gedung Dinas Pendidikan Provinsi Jawa Barat",
    },
    {
      id: 3,
      tanya: "Jam Berapa Tikomdik Melayani Tamu?",
      jawab: "Senin Hingga Kamis Dari Pukul 07.30 hingga 12.00",
    },
  ];

  const [question, setQuestion] = useState();
  const [datas, setDatas] = useState([]);
  const [idFaq, setIdFaq] = useState();
  const [tabBerita, setTabBerita] = useState("popular");
  const [chat, setChat] = useState(true);

  useEffect(() => {
    setDatas(faq);
    // getBerita();
    // getProgram();
  }, []);

  function handleSubmit() {
    setIdFaq(id);
  }

  // console.log(program);

  function showChat() {
    setChat(!chat);
    setIdFaq("");
    setQuestion(0);
  }

  const id = faq.find((val) => {
    return val.id === parseInt(question);
  });
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
            <h1 className="uppercase text-[#112883] font-BebasNeue text-3xl lg:text-6xl">
              uptd tikomdik <span className="text-black">jawa barat</span>
            </h1>
            <p className="font-Poppins font-normal text-sm lg:text-xl lg:w-7/12 text-center mt-10 opacity-50">
              TIKOMDIK tidak hanya berkaitan dengan teknologi tetapi bagaimana
              dapat berbagi pengetahuan dan informasi, meningkatkan komunikasi
              yang efisien dan efektif, dapat membangun komunitas belajar serta
              menciptakan budaya profesionalime di lingkungan Pendidikan.
            </p>
            <Link
              href={"/profile"}
              className="bg-[#112883] text-white p-2 px-7 rounded-lg font-BebasNeue text-xl tracking-wider mt-5"
            >
              Read More
            </Link>
          </div>
        </div>

        <div className="bg-transparent lg:bg-[#112883] h-[350px] mb-[1500px] lg:mb-72">
          <h1 className="font-BebasNeue text-3xl lg:text-4xl text-center pt-20 text-black lg:text-white underline underline-offset-8">
            tentang uptd tikomdik jawa barat
          </h1>
          <div className="grid lg:grid-cols-4 mt-16">
            {/* Card */}
            <div className="flex justify-center p-10">
              <div className="bg-white aspect-[3/1] w-full p-10 shadow-lg rounded-lg text-[#112883] hover:bg-[#112883] lg:hover:bg-[#112883] hover:text-white hover:scale-105 duration-500 hover:shadow-[0_0_10px]">
                <div className="flex flex-col items-center">
                  <MdHistory className="w-16 h-16" />
                  <h1 className="mt-8 font-BebasNeue text-xl lg:text-2xl">
                    sekilas sejarah
                  </h1>
                  <h1 className="mt-4 font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Menampilkan sekilas sejarah tentang UPTD TIKOMDIK
                  </h1>
                  <Link
                    href={"/profile"}
                    className="mt-8 font-Poppins font-semibold text-base text-center"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center p-10">
              <div className="bg-white aspect-[3/1] w-full p-10 shadow-lg rounded-lg text-[#112883] hover:bg-[#112883] lg:hover:bg-[#112883] hover:text-white hover:scale-105 duration-500 hover:shadow-[0_0_10px]">
                <div className="flex flex-col items-center">
                  <BiLineChart className="w-16 h-16" />
                  <h1 className="mt-8 font-BebasNeue text-xl lg:text-2xl">
                    visi dan misi
                  </h1>
                  <h1 className="mt-4 font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Memahi Visi dan Misi UPTD TIKOMDIK
                  </h1>
                  <Link
                    href={"/profile#visi-misi"}
                    className="mt-8 font-Poppins font-semibold text-base text-center"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center p-10">
              <div className="bg-white aspect-[3/1] w-full p-10 shadow-lg rounded-lg text-[#112883] hover:bg-[#112883] lg:hover:bg-[#112883] hover:text-white hover:scale-105 duration-500 hover:shadow-[0_0_10px]">
                <div className="flex flex-col items-center">
                  <FaTasks className="w-16 h-16" />
                  <h1 className="mt-8 font-BebasNeue text-xl lg:text-2xl">
                    tupoksi
                  </h1>
                  <h1 className="mt-4 font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Menampilkan Tugas Pokok dan Fungsi UPTD TIKOMDIK
                  </h1>
                  <Link
                    href={"/profile#tugas-pokok-dan-fungsi"}
                    className="mt-8 font-Poppins font-semibold text-base text-center"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center p-10">
              <div className="bg-white aspect-[3/1] w-full p-10 shadow-lg rounded-lg text-[#112883] hover:bg-[#112883] lg:hover:bg-[#112883] hover:text-white hover:scale-105 duration-500 hover:shadow-[0_0_10px]">
                <div className="flex flex-col items-center">
                  <MdPeople className="w-16 h-16" />
                  <h1 className="mt-8 font-BebasNeue text-xl lg:text-2xl">
                    team project
                  </h1>
                  <h1 className="mt-4 font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center opacity-50">
                    Menampilkan Bagian Dan Tugas Pada Project Ini
                  </h1>
                  <Link
                    href={"/profile#team-project"}
                    className="mt-8 font-Poppins font-semibold text-base text-center"
                  >
                    Baca Selengkapnya
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-8/12">
            <div className="w-full flex flex-col justify-center items-center p-5">
              <h1 className="font-BebasNeue text-3xl underline underline-offset-8 mb-10">
                berita terkini
              </h1>
              <div className="grid lg:grid-cols-3 gap-5">
                <div className="hover:scale-105 hover:bg-black/10 p-3 rounded-lg duration-500">
                  <Image
                    src={"/image/berita.jpg"}
                    width={100}
                    height={80}
                    layout="responsive"
                    alt="Berita"
                    className="rounded-lg"
                  />
                  <div className="px-3 py-2 flex-wrap">
                    <h1 className="font-Poppins font-semibold text-lg">
                      judul
                    </h1>
                    <h1 className="font-DMSans text-lg text-black/50 font-medium">
                      deskripsi
                    </h1>
                  </div>
                  <div className="flex flex-row items-center text-black/60 mt-2">
                    <MdHistory className="w-5 h-5" />
                    <h1 className="font-Poppins font-light text-sm">create</h1>
                  </div>
                </div>
                {/* {berita.map((data, index) => {
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
                })} */}
              </div>
              <button className="mt-10 bg-[#112883] text-white font-BebasNeue text-lg py-3 px-10 rounded-2xl">
                Muat Lebih Banyak
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
          <h1 className="font-BebasNeue text-4xl text-center underline underline-offset-8">
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
              <SwiperSlide>
                <div className="w-full aspect-[16/7]">
                  <div
                    className="bg-[url('/image/berita2.jpg')] h-full bg-cover bg-center"
                  >
                    <div className="bg-black/50 w-full h-full p-2 flex flex-col justify-end items-center">
                      <h1 className="font-bold text-3xl text-white mb-5">
                        judul
                      </h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              {/* {program.map((program, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full aspect-[16/7]">
                      <div
                        className="h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${program.url})` }}
                      >
                        <div className="bg-black/50 w-full h-full p-2 flex flex-col justify-end items-center">
                          <h1 className="font-bold text-3xl text-white mb-5">
                            {program.judul_program}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })} */}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="fixed bottom-2 right-2 lg:bottom-5 lg:right-5 bg-[#112883] p-3 rounded-full">
        <BsChatDotsFill className="w-7 h-7 text-white" onClick={showChat} />
      </div>
      <div
        className={`${
          chat
            ? "hidden"
            : "bg-white fixed bottom-16 lg:bottom-20 right-2 lg:right-5 p-5 w-10/12 lg:w-2/12 h-auto"
        } shadow-[0px_0px_10px] rounded-lg `}
      >
        <div className="flex flex-col gap-5">
          <div className="flex justify-end">
            {!idFaq ? null : (
              <h1 className="outline outline-1 rounded-md p-1 w-9/12">
                {idFaq.tanya}
              </h1>
            )}
          </div>
          <div className="flex justify-start">
            {!idFaq ? null : (
              <h1 className="outline outline-1 rounded-md p-1 w-9/12">
                {idFaq.jawab}
              </h1>
            )}
          </div>
          <div className="flex flex-row w-full gap-1">
            <select
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none block w-full p-2.5"
            >
              <option selected disabled>
                Pilih Pertanyaan
              </option>
              {datas.map((quest, index) => {
                return (
                  <option key={index} value={quest.id}>
                    {quest.tanya}
                  </option>
                );
              })}
            </select>
            <button
              className="bg-[#112883] text-white p-2 rounded-md"
              onClick={handleSubmit}
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
