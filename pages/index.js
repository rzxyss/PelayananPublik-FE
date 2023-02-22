import Image from "next/image";
import Navbar from "../components/Navbar";
import hero from "../public/image/hero.png";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper";
import { useEffect, useState } from "react";
import BeritaPopular from "../components/tab/berita/BeritaPopular";
import BeritaBaru from "../components/tab/berita/BeritaBaru";
import axios from "axios";
import Footer from "../components/Footer";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faChartLine,
  faChevronRight,
  faClipboardList,
  faClockRotateLeft,
  faCommentDots,
  faComputer,
  faPodcast,
  faRadio,
  faTv,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faCalendarXmark,
} from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

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
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [agenda, setAgenda] = useState([]);

  const selectInfo = selectedDate ? (
    <h1 className="font-Poppins font-semibold text-second text-base lg:text-lg xl:text-xl px-5 py-2">
      {format(selectedDate, "MMMM d, yyyy")}
    </h1>
  ) : (
    setSelectedDate(new Date())
  );

  const getAgenda = async () => {
    const tglAcara = format(selectedDate || new Date(), "yyyy-M-d");
    const agenda = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/acara`,
      {
        tgl_acara: tglAcara,
      }
    );
    setAgenda(agenda.data);
  };

  const getBerita = async () => {
    const berita = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/berita?limit=${limit}&page=${page}`
    );
    setBerita(berita.data.results);
  };

  const getProgram = async () => {
    try {
      const program = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/program`
      );
      setProgram(program.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAgenda();
    getBerita();
    getProgram();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [selectedDate]);

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
          className={`fixed w-14 h-14 bg-primary text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6 text-white" />
        </button>
      )}
      <div
        className={`w-14 h-14 bg-[#25D366] rounded-full justify-center items-center fixed bottom-2 right-2 cursor-pointer ${
          chat ? "hidden" : "flex"
        } ${showButton ? "hidden" : "flex"}`}
        onClick={() => setChat(!chat)}
      >
        <FontAwesomeIcon icon={faCommentDots} className="w-7 h-7 text-white" />
      </div>
      <div
        className={`bottom-2 right-2 w-64 bg-white border ${
          !chat ? "hidden" : "fixed"
        }`}
      >
        <div className="flex justify-between items-center p-1 px-2 cursor-pointer">
          <h1 className="font-Poppins font-light">Tikomdiks BOTS</h1>
          <FontAwesomeIcon
            icon={faXmark}
            className="w-7 h-7"
            onClick={closeChat}
          />
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
            <h1 className="uppercase text-black font-Lora font-bold text-4xl md:text-5xl text-center">
              uptd tikomdik <span className="text-primary">jawa barat</span>
            </h1>
            <p className="font-Poppins font-medium lg:w-11/12 xl:w-9/12 2xl:w-9/12 text-base md:text-lg lg:text-xl text-center mt-10 text-black/50">
              TIKomDik UPTD TIKOMDIK (Teknologi Informasi dan Komunikasi
              Pendidikan) Dinas Pendidikan Provinsi Jawa Barat.
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
            tentang uptd tikomdik{" "}
            <span className="text-primary">jawa barat</span>
          </h1>
          <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg w-11/12 lg:w-10/12 xl:w-9/12 text-center mt-5 text-black/50">
            TIKOMDIK tidak hanya berkaitan dengan teknologi tetapi bagaimana
            dapat berbagi pengetahuan dan informasi, meningkatkan komunikasi
            yang efisien dan efektif, dapat membangun komunitas belajar serta
            menciptakan budaya profesionalime di lingkungan Pendidikan.
          </h1>
          <div className="grid lg:grid-cols-4">
            {/* Card */}
            <div className="flex justify-center p-10">
              <div
                className={`bg-primary w-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex flex-col justify-between">
                  <div className="flex justify-center mb-5">
                    <div className="bg-white rounded-full p-2 w-24 h-24 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faClockRotateLeft}
                        className="w-16 h-16 text-primary"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      sekilas sejarah
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white px-16">
                      Menampilkan sekilas sejarah tentang UPTD TIKOMDIK
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base text-center text-[#f7a76c] flex items-center justify-center"
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
                    <div className="bg-white rounded-full p-2 w-24 h-24 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faClipboardList}
                        className="w-16 h-16 text-primary"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-between mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      visi dan misi
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white px-16">
                      Memahi Visi dan Misi UPTD TIKOMDIK
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base text-center text-[#f7a76c] flex items-center justify-center"
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
                    <div className="bg-white rounded-full p-2 w-24 h-24 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faChartLine}
                        className="w-16 h-16 text-primary"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      kegiatan
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white px-16">
                      Menampilkan kegiatan tentang UPTD TIKOMDIK
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base text-center text-[#f7a76c] flex items-center justify-center"
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
                    <div className="bg-white rounded-full p-2 w-24 h-24 flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        className="w-16 h-16 text-primary"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center mb-5">
                    <h1 className="font-Poppins font-semibold uppercase text-xl lg:text-2xl text-center text-white">
                      team project
                    </h1>
                    <h1 className="font-Poppins font-medium text-xs md:text-sm lg:text-base text-center text-white px-16">
                      Menampilkan Bagian dan Tugas dalam UPTD TIKOMDIK
                    </h1>
                  </div>
                  <Link
                    href={"/about"}
                    className="font-Poppins font-semibold text-base text-center text-[#f7a76c] flex items-center justify-center"
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

        <div
          className="flex flex-col items-center space-y-5 pt-20"
          id="program"
        >
          <h1 className="uppercase font-Lora font-bold text-2xl md:text-3xl lg:text-4xl text-center text-black">
            program tikomdik
          </h1>
          <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg w-11/12 lg:w-10/12 xl:w-9/12 text-center mt-5 text-black/50">
            Seksi Pengembangan dan produksi mempunyai tugas pokok melaksanakan
            pengem-bangan dan produksi bahan pembelajaran meliputi mata
            pelajaran SMA, SMK, dan SLB berbasis Teknologi Informasi dan
            Komunikasi serta fasilitasi Teknologi Informasi Pendidikan lainnya.
          </h1>
          <div className="w-full px-5 lg:px-40 pb-20">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              loop={true}
              navigation={true}
              effect={"fade"}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[EffectFade, Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {program.map((program, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full aspect-video">
                      <Image src={program.url} layout="fill" />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>

        <div className="w-full p-10 flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-3/12 flex flex-col rounded-xl">
            <div className="flex flex-col bg-primary p-8 rounded-t-2xl">
              <h1 className="font-Poppins font-semibold text-white text-lg lg:text-xl xl:text-2xl">
                AGENDA UPTD TIKOMDIK
              </h1>
              <h1 className="font-Poppins font-semibold text-white/50 text-base lg:text-lg xl:text-xl">
                Dapatkan informasi terkait semua kegiatan yang dilakukan di UPTD
                TIKOMDIK.
              </h1>
            </div>
            <div className="flex flex-col">
              {selectInfo}
              <div className="flex justify-center">
                <DayPicker
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  modifiersStyles={{
                    selected: {
                      background: "#16A75C",
                      color: "#FFFFFF",
                      fontWeight: "bold",
                    },
                  }}
                  styles={{
                    caption: { color: "#1E88E5" },
                    head: { color: "GrayText", fontSize: "19px" },
                    day: { color: "#1E88E5", fontSize: "20px" },
                  }}
                />
              </div>
              <ol
                className={`relative ${
                  agenda.length < 1 ? "border-none" : "border-l border-primary"
                }`}
              >
                {agenda.length < 1 ? (
                  <div className="w-full flex flex-col justify-center items-center space-y-5">
                    <FontAwesomeIcon
                      icon={faCalendarXmark}
                      className="w-20 h-20 text-primary"
                    />
                    <h1 className="font-Poppins font-semibold text-second text-lg lg:text-xl xl:text-2xl text-center">
                      Tidak ada kegiatan / event di hari ini
                    </h1>
                  </div>
                ) : (
                  agenda.map((agenda, index) => {
                    return (
                      <li className="mb-10 ml-4" key={index}>
                        <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary" />
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                          {agenda.tgl_acara}
                        </time>
                        <div className="flex flex-col border-2 border-primary p-2 rounded-xl">
                          <h3 className="font-semibold text-primary text-sm md:text-base lg:text-lg xl:text-xl">
                            {agenda.nama_acara}
                          </h3>
                          <h3 className="font-medium text-black/50 text-xs md:text-xm lg:text-base xl:text-lg">
                            {agenda.peserta}
                          </h3>
                          <h3 className="font-normal text-black/60 text-xs md:text-xm lg:text-base xl:text-lg mt-5">
                            {agenda.jam_mulai} - {agenda.jam_selesai} WIB
                          </h3>
                        </div>
                      </li>
                    );
                  })
                )}
              </ol>
            </div>
          </div>
          <div className="w-full lg:w-9/12 flex flex-col rounded-xl">
            <div className="flex-col flex space-y-8">
              <h1 className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                UTILITAS DIVISI TIKOMDIK
              </h1>
            </div>
            <div className="grid lg:grid-cols-2">
              {/* Card */}
              <div className="flex justify-center p-5">
                <div className={`w-full rounded-lg duration-500`}>
                  <div className="w-full h-full flex gap-7 items-stretch">
                    <div>
                      <FontAwesomeIcon
                        icon={faComputer}
                        className="w-20 h-20 text-primary"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50">
                        Divisi
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-primary">
                        RND (Research & Development)
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50 py-5">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar viverra
                        dictumst eleifend sed suspendisse quis. Habitasse sit
                        ornare sed neque.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex justify-center p-5">
                <div className={`w-full rounded-lg duration-500`}>
                  <div className="w-full h-full flex gap-7 items-stretch">
                    <div>
                      <FontAwesomeIcon
                        icon={faPodcast}
                        className="w-20 h-20 text-primary"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50">
                        Divisi
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-primary">
                        TIKOMPEDIA (Tikomdik Media)
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50 py-5">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar viverra
                        dictumst eleifend sed suspendisse quis. Habitasse sit
                        ornare sed neque.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex justify-center p-5">
                <div className={`w-full rounded-lg duration-500`}>
                  <div className="w-full h-full flex gap-7 items-stretch">
                    <div>
                      <FontAwesomeIcon
                        icon={faTv}
                        className="w-20 h-20 text-primary"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50">
                        Divisi
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-primary">
                        TV Streaming
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50 py-5">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar viverra
                        dictumst eleifend sed suspendisse quis. Habitasse sit
                        ornare sed neque.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card */}
              <div className="flex justify-center p-5">
                <div className={`w-full rounded-lg duration-500`}>
                  <div className="w-full h-full flex gap-7 items-stretch">
                    <div>
                      <FontAwesomeIcon
                        icon={faRadio}
                        className="w-20 h-20 text-primary"
                      />
                    </div>
                    <div className="flex flex-col">
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-black/50">
                        Divisi
                      </h1>
                      <h1 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl text-primary">
                        Phi Radio Streaming
                      </h1>
                      <h1 className="font-Poppins font-medium text-base md:text-lg lg:text-xl xl:text-2xl text-black/50 py-5">
                        Lorem ipsum dolor sit amet consectetur. Pulvinar viverra
                        dictumst eleifend sed suspendisse quis. Habitasse sit
                        ornare sed neque.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <h1 className="uppercase font-Lora font-bold text-2xl md:text-3xl lg:text-4xl text-center text-black">
            STATISTIK KUNJUNGAN
          </h1>
          <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg w-11/12 lg:w-10/12 xl:w-9/12 text-center mt-5 text-black/50">
            Perhitungan jumlah kunjungan website
          </h1>
          <div className="grid lg:grid-cols-3">
            {/* Card */}
            <div className="flex justify-center items-center p-10">
              <div
                className={`bg-primary w-full h-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex justify-center items-center gap-5">
                  <div className="flex flex-col items-center gap-3">
                    <FontAwesomeIcon
                      icon={faAddressBook}
                      className="w-32 h-20 bg-white text-primary p-5 rounded-2xl"
                    />
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white/50 text-center">
                      Total Kunjungan Hari ini
                    </h1>
                  </div>
                  <h1 className="font-Poppins font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                    12
                  </h1>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center items-center p-10">
              <div
                className={`bg-primary w-full h-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex justify-center items-center gap-5">
                  <div className="flex flex-col items-center gap-3">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="w-32 h-20 bg-white text-primary p-5 rounded-2xl"
                    />
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white/50 text-center">
                      Total Visitors
                    </h1>
                  </div>
                  <h1 className="font-Poppins font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                    3.500
                  </h1>
                </div>
              </div>
            </div>
            {/* Card */}
            <div className="flex justify-center items-center p-10">
              <div
                className={`bg-primary w-full h-full p-10 shadow-md rounded-lg duration-500`}
              >
                <div className="w-full h-full flex justify-center items-center gap-5">
                  <div className="flex flex-col items-center gap-3">
                    <FontAwesomeIcon
                      icon={faUserGroup}
                      className="w-32 h-20 bg-white text-primary p-5 rounded-2xl"
                    />
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white/50 text-center">
                      Total Visitors
                    </h1>
                  </div>
                  <h1 className="font-Poppins font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-white">
                    3.500
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col lg:flex-row">
          <div className="w-full lg:w-8/12 p-5">
            <div className="w-full flex flex-col justify-center items-center p-5">
              <h1 className="uppercase font-Lora font-bold text-2xl md:text-3xl lg:text-4xl text-center text-black">
                BERITA TERKINI
              </h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {berita.map((data, index) => {
                return (
                  <div
                    className={`rounded-2xl duration-500 shadow-md ${
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
                      className="rounded-t-2xl"
                    />
                    <div className="px-3 py-2 flex-wrap">
                      <h1 className="font-Poppins font-semibold text-lg">
                        {data.judul_berita}
                      </h1>
                      <h1 className="font-DMSans text-lg text-black/50 font-medium">
                        {data.deskripsi_berita}
                      </h1>
                    </div>
                    <div className="px-3 py-2 flex flex-row items-center text-black/60 mt-2">
                      <FontAwesomeIcon
                        icon={faClockRotateLeft}
                        className="w-6 h-6"
                      />
                      <h1 className="font-Poppins font-light text-sm">
                        {data.createdAt}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full lg:w-4/12 mt-20">
            <div className="w-full flex flex-col justify-center items-center gap-4 p-5">
              <div className="inline-flex">
                <button
                  type="button"
                  className={`py-2 px-4 text-sm font-medium bg-transparent ${
                    tabBerita == "popular" ? "border-b-4 border-primary" : ""
                  }`}
                  onClick={() => setTabBerita("popular")}
                >
                  Terpopuler
                </button>
                <button
                  type="button"
                  className={`py-2 px-4 text-sm font-medium bg-transparent ${
                    tabBerita == "baru" ? "border-b-4 border-primary" : ""
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
      </div>
      <Footer />
    </>
  );
}
