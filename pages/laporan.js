import axios from "axios";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import Swal from "sweetalert2";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Laporan() {
  const [jenisLapoan, setJenisLaporan] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [judulLaporan, setJudulLaporan] = useState("");
  const [isiLaporan, setIsiLaporan] = useState("");
  const [showButton, setShowButton] = useState(false);

  const kirimLaporan = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/laporan`, {
        nama: nama,
        email: email,
        jenis_laporan: jenisLapoan,
        judul_laporan: judulLaporan,
        isi_laporan: isiLaporan,
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Laporan Berhasil Dikirim",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        Router.push("/");
      }, 2100);
    } catch (error) {
      console.log(error);
    }
  };

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
    <>
      <div className="w-full h-auto">
        <Navbar />
        {showButton && (
          <button
            className={`fixed w-14 h-14 bg-primary shadow text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
            onClick={scrollTop}
          >
            <BiArrowToTop className="w-6 h-6 text-white" />
          </button>
        )}
        <div className='bg-cover bg-[url("/image/tikomdik.jpg")] bg-center w-full h-80 xl:h-[500px]'>
          <div className="bg-black/80 w-full h-full">
            <div className="py-10 xl:py-20">
              <Breadcrumb />
              {/* <h1 className="font-Lora font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
                LAPORAN UPTD TIKOMDIK
              </h1>
              <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg text-white/50">
                Memberi laporan terhadap UPTD TIKOMDIK.
              </h1> */}
            </div>
            <div className="w-full h-auto mx-auto px-5 md:px-16 lg:container lg:mt-20">
              <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg mb-10">
                <div className="border border-collapse rounded-md p-2">
                  <h1 className="text-center font-Lora font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary py-8">
                    LAPORAN PELAYANAN PUBLIK
                  </h1>
                  <form className="p-5 lg:px-10" onSubmit={kirimLaporan}>
                    <fieldset className="flex flex-wrap gap-5 md:gap-10 lg:gap-14 justify-center my-10">
                      <div className="flex gap-1">
                        <input
                          type="radio"
                          name="jenis"
                          value="Pengaduan"
                          onChange={(e) => setJenisLaporan(e.target.value)}
                        />
                        <label className="font-Poppins font-semibold text-black/50 text-sm md:text-base lg:text-lg">
                          Pengaduan
                        </label>
                      </div>
                      <div className="flex gap-1">
                        <input
                          type="radio"
                          name="jenis"
                          value="Aspirasi"
                          onChange={(e) => setJenisLaporan(e.target.value)}
                        />
                        <label className="font-Poppins font-semibold text-black/50 text-sm md:text-base lg:text-lg">
                          Aspirasi
                        </label>
                      </div>
                      <div className="flex gap-1">
                        <input
                          type="radio"
                          name="jenis"
                          value="Permintaan Informasi"
                          onChange={(e) => setJenisLaporan(e.target.value)}
                        />
                        <label className="font-Poppins font-semibold text-black/50 text-sm md:text-base lg:text-lg">
                          Permintaan Informasi
                        </label>
                      </div>
                    </fieldset>
                    <div className="mb-6">
                      <label className="block mb-2 font-Poppins font-semibold text-black text-xs md:text-sm lg:text-base">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setNama(e.target.value)}
                        className="bg-gray-50 border border-primary text-black/50 font-Poppins font-normal text-xs md:text-sm rounded-lg focus:outline-primary block w-full p-2.5"
                        placeholder="Masukan Nama Lengkap"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 font-Poppins font-semibold text-black text-xs md:text-sm lg:text-base">
                        Email
                      </label>
                      <input
                        type="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-primary text-black/50 font-Poppins font-normal text-xs md:text-sm rounded-lg focus:outline-primary block w-full p-2.5 "
                        placeholder="name@tikomdik.com"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 font-Poppins font-semibold text-black text-xs md:text-sm lg:text-base">
                        Judul Laporan
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setJudulLaporan(e.target.value)}
                        className="bg-gray-50 border border-primary text-black/50 font-Poppins font-normal text-xs md:text-sm rounded-lg focus:outline-primary block w-full p-2.5"
                        placeholder="Masukan Judul Laporan"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block mb-2 font-Poppins font-semibold text-black text-xs md:text-sm lg:text-base">
                        Isi Laporan
                      </label>
                      <textarea
                        type="text"
                        onChange={(e) => setIsiLaporan(e.target.value)}
                        className="bg-gray-50 border border-primary text-black/50 font-Poppins font-normal text-xs md:text-sm rounded-lg focus:outline-primary block w-full p-2.5"
                        placeholder="Masukan Isi Laporan"
                        required
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="text-white bg-primary focus:outline-none rounded-lg font-Poppins font-semibold text-xs md:text-sm lg:text-base w-full sm:w-auto px-5 py-1 text-center"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
