import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";

export default function TambahBerita() {
  const [judulBerita, setJudulBerita] = useState("");
  const [deskripsiBerita, setDeskripsiBerita] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [imageBerita, setImageBerita] = useState("");
  const [preview, setPreview] = useState("");

  const verifyAdmin = async () => {
    try {
      const checkAdmin = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/check`,
        {
          token: sessionStorage.getItem("accessToken"),
        }
      );
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Gagal Login!",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        Router.push("/admin/login");
      }, 2100);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImageBerita(image);
    setPreview(URL.createObjectURL(image));
  };

  const postBerita = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageBerita);
    formData.append("judul_berita", judulBerita);
    formData.append("deskripsi_berita", deskripsiBerita);
    formData.append("isi_berita", isiBerita);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/berita`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Router.push("/admin/berita");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    verifyAdmin();
  }, []);

  const logoutHandle = async () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Anda Telah Berhasil Logout",
      showConfirmButton: false,
      timer: 2000,
    });
    setTimeout(() => {
      Router.push("/admin/login");
    }, 2100);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/logout`,
        {
          token: sessionStorage.getItem("accessToken"),
        }
      );
      sessionStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-Poppins text-2xl text-black font-extrabold">
            Tambah Berita
          </h1>
          <h1 className="font-Poppins font-light text-lg text-black" onClick={logoutHandle}>
            LogOut
          </h1>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="p-5">
            <div className="lg:grid lg:grid-cols-2">
              <div className="lg:w-full lg:px-20 flex flex-col">
                <div className="flex flex-col space-y-2">
                  <h1 className="font-Poppins font-medium text-lg">
                    Judul Berita
                  </h1>
                  <input
                    onChange={(e) => setJudulBerita(e.target.value)}
                    type="text"
                    className="border border-gray-400 focus:border-black p-4 rounded-lg"
                    placeholder="Masukan Judul Berita"
                  />
                </div>
                <div className="flex flex-col space-y-2 mt-10">
                  <h1 className="font-Poppins font-medium text-lg">
                    Deskripsi Berita
                  </h1>
                  <input
                    onChange={(e) => setDeskripsiBerita(e.target.value)}
                    type="text"
                    className="border border-gray-400 focus:border-black p-4 rounded-lg"
                    placeholder="Masukan Judul Berita"
                  />
                </div>
                <div className="flex flex-col space-y-2 mt-10">
                  <h1 className="font-Poppins font-medium text-lg">
                    Isi Berita
                  </h1>
                  <textarea
                    onChange={(e) => setIsiBerita(e.target.value)}
                    className="block p-2.5 w-full text-sm rounded-lg border border-gray-400 focus:border-black"
                    placeholder="Masukan deskripsi berita"
                  />
                </div>
              </div>
              <div className="lg:w-full lg:px-20 flex flex-col mt-10 lg:mt-0">
                <div className="flex flex-col space-y-2">
                  <h1 className="font-Poppins font-medium text-lg">
                    Foto Berita
                  </h1>
                  <input
                    type="file"
                    onChange={loadImage}
                    className="border border-gray-400 focus:border-black p-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col space-y-2 mt-10">
                  <Image
                    alt="Berita Tikomdik"
                    src={preview ? preview : "/image/ProgramPreset.jpg"}
                    width={500}
                    height={0}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex lg:justify-end justify-center lg:px-20 mt-5 lg:mt-10 font-Poppins">
              <Link href={"/admin/berita"} className="px-5">
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center">
                  <h1 className="flex items-center justify-center text-lg font-semibold text-[#112883]">
                    Kembali
                  </h1>
                </div>
              </Link>
              <button onClick={postBerita} className="px-5">
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center bg-[#112883]">
                  <h1 className="flex items-center justify-center text-lg font-semibold text-white">
                    Simpan
                  </h1>
                </div>
              </button>
            </div>
          </div>
          {/* Akhir Konten */}
        </div>
      </div>
    </div>
  );
}
