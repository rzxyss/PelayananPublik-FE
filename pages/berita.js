import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import Swal from "sweetalert2";
import BeritaPopular from "../components/tab/berita/BeritaPopular";
import BeritaBaru from "../components/tab/berita/BeritaBaru";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faClockRotateLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";

export default function Berita() {
  const [berita, setBerita] = useState([]);
  const [limit, setLimit] = useState(9);
  const [query, setQuery] = useState("");
  const [likeCount, setLike] = useState();
  const [showButton, setShowButton] = useState(false);
  const [tabBerita, setTabBerita] = useState("popular");

  const getBerita = async () => {
    const berita = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/berita?limit=${limit}&search_query=${query}`
    );
    setBerita(berita.data.results);
  };

  const likeBerita = async (beritaId) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/berita/${beritaId}`
      );
      setLike(res.data.like);
      if (!res) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Gagal Menambahkan Like",
          showConfirmButton: false,
          timer: 2000,
        });
      } else {
        await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/likeberita/${beritaId}`,
          {
            like: res.data.like + 1,
          }
        );
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Berhasil Menambahkan Like",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } catch (error) {
      console.log(error);
    }
    setLike(berita.like);
  };

  useEffect(() => {
    getBerita();
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [query, likeCount, limit]);

  const scrollTop = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-auto">
      <Navbar />
      {showButton && (
        <button
          className={`fixed w-14 h-14 bg-primary text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-6 h-6 text-white" />
        </button>
      )}
      <div className='bg-cover bg-[url("/image/tikomdik.jpg")] bg-center w-full h-80'>
        <div className="bg-black/60 w-full h-full">
          <div className="flex flex-col p-10 space-y-1">
            <h1 className="font-Lora font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
              BERITA UPTD TIKOMDIK
            </h1>
            <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg text-white/50">
              Menyajikan beragam berita seputar UPTD TIKOMDIK
            </h1>
          </div>
          <div className="w-full h-auto mx-auto px-5 md:px-16 lg:container">
            <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg my-10">
              <div className="w-full flex flex-row justify-between items-center p-5">
                <h1 className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary">
                  BERITA TERKINI
                </h1>
                <div className="lg:w-2/12 border border-outline flex justify-between items-center rounded-xl">
                  <input
                    type="search"
                    className="block w-full px-2 text-sm focus:outline-none"
                    placeholder="Cari ..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button type="submit" className="bg-primary p-4 rounded-xl">
                    <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row p-10">
                <div className="flex flex-col">
                  <div className="grid lg:grid-cols-3 gap-5">
                    {berita.map((data, index) => {
                      return (
                        <div
                          className="hover:bg-black/10 p-3 rounded-lg duration-500"
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
                            <h1 className="font-Poppins text-lg text-black/50 font-medium">
                              {data.deskripsi_berita}
                            </h1>
                          </div>
                          <div className="flex justify-between px-2">
                            <div className="flex flex-row items-center text-black/60 mt-2 gap-1">
                              <FontAwesomeIcon icon={faClockRotateLeft} className="w-5 h-5" />
                              <h1 className="font-Poppins font-light text-sm">
                                {data.createdAt}
                              </h1>
                            </div>
                            <div className="flex flex-row items-center text-black/60 mt-2 gap-1 cursor-pointer">
                              <FontAwesomeIcon icon={faThumbsUp}
                                className="w-10 h-10"
                                onClick={() => likeBerita(data.id)}
                              />
                              <h1 className="font-Poppins font-light text-lg">
                                {data.like || 0}
                              </h1>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full flex justify-center py-5">
                    {limit != 50 ? (
                      <button
                        className="bg-primary hover:bg-primary  text-white font-bold py-2 px-4 rounded"
                        onClick={() => setLimit(50)}
                      >
                        Muat Lebih Banyak
                      </button>
                    ) : (
                      <button
                        className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded"
                        onClick={() => setLimit(9)}
                      >
                        Muat Lebih Sedikit
                      </button>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-4/12 mt-20">
                  <div className="w-full flex flex-col justify-center items-center gap-4 p-5">
                    <div className="inline-flex">
                      <button
                        type="button"
                        className={`py-2 px-4 text-sm font-medium bg-transparent ${
                          tabBerita == "popular"
                            ? "border-b-4 border-primary"
                            : ""
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
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
