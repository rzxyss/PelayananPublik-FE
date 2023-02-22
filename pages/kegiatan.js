import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faClockRotateLeft, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Berita() {
  const [berita, setBerita] = useState([]);
  const [showButton, setShowButton] = useState(false);

  const getBerita = async () => {
    const berita = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/kegiatan`
    );
    setBerita(berita.data.results);
    console.log(berita.data.results);
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
  }, []);

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
              KEGIATAN UPTD TIKOMDIK
            </h1>
            <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg text-white/50">
              Menyajikan Kegiatan seputar UPTD TIKOMDIK.
            </h1>
          </div>
          <div className="w-full h-auto mx-auto px-5 md:px-16 lg:container">
            <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg my-10">
              <div className="w-full flex flex-row justify-between items-center p-5">
                <h1 className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary">
                  KEGIATAN TIKOMDIK
                </h1>
                <div className="lg:w-2/12 border border-outline flex justify-between items-center rounded-xl">
                  <input
                    type="search"
                    className="block w-full px-2 text-sm focus:outline-none"
                    placeholder="Cari ..."
                    // value={query}
                    // onChange={(e) => setQuery(e.target.value)}
                  />
                  <button type="submit" className="bg-primary p-4 rounded-xl">
                    <FontAwesomeIcon icon={faSearch} className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
              <div className="w-full flex flex-col lg:flex-row p-10">
                <div className="grid lg:grid-cols-3 gap-5 w-full">
                  {berita.map((data, index) => {
                    return (
                      <div
                        className="hover:bg-black/10 rounded-2xl duration-500 shadow-md"
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
                          <h1 className="font-Poppins text-black/50 font-normal text-sm md:text-base lg:text-lg">
                            {data.judul_kegiatan}
                          </h1>
                          <h1 className="font-Poppins text-black/50 font-normal text-sm md:text-base lg:text-lg">
                            {data.isi_kegiatan}
                          </h1>
                        </div>
                        <div className="flex flex-row items-center text-black/60 mt-2 gap-1 p-2">
                          <FontAwesomeIcon icon={faClockRotateLeft} className="w-5 h-5" />
                          <h1 className="font-Poppins font-light text-sm">
                            {data.createdAt}
                          </h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <div className="w-full flex justify-center pb-5">
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
              </div> */}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
