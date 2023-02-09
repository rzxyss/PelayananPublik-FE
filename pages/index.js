import Image from "next/image";
import Navbar from "../components/Navbar";
import hero from "../public/image/hero.png";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

import { MdHistory, MdPeople } from "react-icons/md";
import { BiLineChart, BiArrowToTop } from "react-icons/bi";
import { TbNotes } from "react-icons/tb";
import { useEffect, useState } from "react";
import { BsChatDotsFill } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";

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
  const [chat, setChat] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [logQuestion, setLogQuestion] = useState("");
  const [logAnswer, setLogAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);

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

  const handleSubmit = async (e) => {
    setLogQuestion(question);
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/chat`,
        {
          question: question,
        }
      );
      setAnswer(response.data.results);
      setQuestion("");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const closeChat = async (e) => {
    setChat(!chat);
    setQuestion("");
    setAnswer("");
    setLogQuestion("");
  };

  return (
    <>
      <Navbar />
      {showButton && (
        <button
          className={`fixed w-14 h-14 bg-indigo-500 text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <BiArrowToTop className="w-6 h-6 text-white" />
        </button>
      )}
      <div
        className={`w-14 h-14 bg-[#25D366] rounded-full justify-center items-center fixed bottom-2 right-2 cursor-pointer ${
          chat ? "hidden" : "flex"
        } ${showButton ? "hidden" : "flex"}`}
        onClick={() => setChat(!chat)}
      >
        <BsChatDotsFill className="w-7 h-7 text-white" />
      </div>
      <div
        className={`bottom-2 right-2 w-64 bg-white border ${
          !chat ? "hidden" : "fixed"
        }`}
      >
        <div className="flex justify-between items-center p-1 px-2 cursor-pointer">
          <h1 className="font-Poppins font-light">Tikomdiks BOTS</h1>
          <GrFormClose className="w-7 h-7" onClick={closeChat} />
        </div>
        <div className="px-6 py-2 space-y-2">
          <div
            className={`${
              logQuestion === ""
                ? "hidden"
                : "font-Poppins font-normal text-base bg-green-500/20 p-2 rounded-lg"
            }`}
          >
            <h1 className="flex justify-end">{logQuestion}</h1>
          </div>
          <div
            className={`${
              answer === "" && !loading
                ? "hidden"
                : "font-Poppins font-normal text-base bg-red-500/20 p-2 rounded-lg"
            }`}
          >
            {loading ? <h1>Loading.....</h1> : <h1>{answer}</h1>}
          </div>
          <form className="flex gap-2 items-end" onSubmit={handleSubmit}>
            <input
              className="w-full p-2 rounded border focus:outline-none"
              type="text"
              placeholder="Type your message..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              className="p-2 rounded bg-blue-500 text-white"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
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
            <p className="font-Poppins font-normal text-sm lg:w-10/12 text-center mt-10 text-black/50">
              TIKOMDIK tidak hanya berkaitan dengan teknologi tetapi bagaimana
              dapat berbagi pengetahuan dan informasi, meningkatkan komunikasi
              yang efisien dan efektif, dapat membangun komunitas belajar serta
              menciptakan budaya profesionalime di lingkungan Pendidikan.
            </p>
            <Link
              href={"/about"}
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
        <div className="grid lg:grid-cols-4 -mt-40 lg:-mt-60">
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div
              className={`bg-white w-full p-10 shadow-md rounded-lg duration-500 hover:bg-[#FBFBFB]`}
            >
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <MdHistory className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    sekilas sejarah
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center text-black/50">
                    Menampilkan sekilas sejarah tentang UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/about"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div
              className={`bg-white w-full p-10 shadow-md rounded-lg duration-500 hover:bg-[#FBFBFB]`}
            >
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <TbNotes className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    visi dan misi
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center text-black/50">
                    Memahi Visi dan Misi UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/about#visi-misi"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div
              className={`bg-white w-full p-10 shadow-md rounded-lg duration-500 hover:bg-[#FBFBFB]`}
            >
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <BiLineChart className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    tupoksi
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center text-black/50">
                    Menampilkan Tugas Pokok dan Fungsi UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/about#tugas-pokok-dan-fungsi"}
                  className="font-Poppins font-semibold text-base text-center"
                >
                  Baca Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex justify-center 2xl:p-20 p-10">
            <div
              className={`bg-white w-full p-10 shadow-md rounded-lg duration-500 hover:bg-[#FBFBFB]`}
            >
              <div className="grid grid-rows-1">
                <div className="flex justify-center mb-5">
                  <MdPeople className="w-20 h-20 text-white bg-[#112883] rounded-full p-2" />
                </div>
                <div className="flex flex-col items-center mb-5">
                  <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-[#112883]">
                    team project
                  </h1>
                  <h1 className="font-Poppins font-semibold text-[11px] lg:text-sm w-2/3 text-center text-black/50">
                    Menampilkan Bagian dan Tugas dalam UPTD TIKOMDIK
                  </h1>
                </div>
                <Link
                  href={"/about#tugas-pokok-dan-fungsi"}
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
                      className={`p-3 rounded-lg duration-500 ${
                        chat ? "" : "hover:bg-black/10"
                      }`}
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
              {program.map((program, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full aspect-[16/7] bg-black">
                      <div
                        className="h-full bg-contain bg-no-repeat bg-center"
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
