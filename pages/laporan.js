import axios from "axios";
import Router from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Laporan() {
  const [jenisLapoan, setJenisLaporan] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [judulLaporan, setJudulLaporan] = useState("");
  const [isiLaporan, setIsiLaporan] = useState("");

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
  return (
    <>
      <Navbar />
      <div className="w-full min-h-full px-10 xl:px-60 py-10">
        <div className="border border-collapse rounded-md p-2">
          <h1 className="text-center">Laporan Pelayanan Publik</h1>
          <form className="mt-10" onSubmit={kirimLaporan}>
            <fieldset className="flex gap-10 justify-center my-10">
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="jenis"
                  value="Pengaduan"
                  onChange={(e) => setJenisLaporan(e.target.value)}
                />
                <label>Pengaduan</label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="jenis"
                  value="Aspirasi"
                  onChange={(e) => setJenisLaporan(e.target.value)}
                />
                <label>Aspirasi</label>
              </div>
              <div className="flex gap-1">
                <input
                  type="radio"
                  name="jenis"
                  value="Permintaan Informasi"
                  onChange={(e) => setJenisLaporan(e.target.value)}
                />
                <label>Permintaan Informasi</label>
              </div>
            </fieldset>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Nama Lengkap
              </label>
              <input
                type="text"
                onChange={(e) => setNama(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Masukan Nama Lengkap"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@tikomdik.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Judul Laporan
              </label>
              <input
                type="text"
                onChange={(e) => setJudulLaporan(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Masukan Judul Laporan"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-900">
                Isi Laporan
              </label>
              <textarea
                type="text"
                onChange={(e) => setIsiLaporan(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Masukan Isi Laporan"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
