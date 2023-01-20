import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BeritaPopular from "../components/BeritaPopular";
import BeritaBaru from "../components/BeritaBaru";
import { MdHistory, MdPeople } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

export default function Berita() {
  const [tabBerita, setTabBerita] = useState("popular");
  // const [berita, setBerita] = useState([]);

  // const getBerita = async () => {
  //   const resBerita = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}/berita`
  //   );
  //   setBerita(resBerita.data);
  // };

  useEffect(() => {
    // getBerita();
  }, []);
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className='bg-cover bg-[url("/image/tikomdik.jpg")] bg-center w-full h-80'>
        <div className="bg-black/60 w-full h-full">
          <div className="flex flex-col p-10">
            <h1 className="font-Poppins font-extrabold text-2xl lg:text-3xl xl:text-4xl text-white">
              Berita UPTD TIKomDik
            </h1>
            <h1 className="font-Poppins font-light text-xl text-white">
              Menyajikan beragam berita seputar UPTD TIKOMDIK
            </h1>
          </div>
          <div className="w-full h-auto lg:mt-14 lg:px-28">
            <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg">
              <div className="w-full flex flex-row justify-between items-center px-2">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Berita Terkini
                </h1>

                <form className="lg:w-2/12">
                  <div class="relative">
                    <input
                      type="search"
                      class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black focus:outline-none"
                      placeholder="Cari ..."
                    />
                    <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-[#112883] hover:bg-[#112883]/90 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      <BiSearch className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full flex flex-col lg:flex-row p-10">
                <div className="grid lg:grid-cols-3 gap-5 w-full lg:w-8/12">
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
                        Judul
                      </h1>
                      <h1 className="font-DMSans text-lg text-black/50 font-medium">
                        Deskripsi
                      </h1>
                    </div>
                    <div className="flex flex-row items-center text-black/60 mt-2">
                      <MdHistory className="w-5 h-5" />
                      <h1 className="font-Poppins font-light text-sm">
                        CreatedAt
                      </h1>
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
                <div className="w-full lg:w-4/12 mt-20">
                  <div className="w-full flex flex-col justify-center items-center gap-4 p-5">
                    <div className="inline-flex">
                      <button
                        type="button"
                        className={`py-2 px-4 text-sm font-medium bg-transparent ${
                          tabBerita == "popular"
                            ? "border-b-4 border-[#112883]"
                            : ""
                        }`}
                        onClick={() => setTabBerita("popular")}
                      >
                        Terpopuler
                      </button>
                      <button
                        type="button"
                        className={`py-2 px-4 text-sm font-medium bg-transparent ${
                          tabBerita == "baru"
                            ? "border-b-4 border-[#112883]"
                            : ""
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
        </div>
      </div>
    </div>
  );
}
