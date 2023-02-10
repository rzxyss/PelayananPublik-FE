import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";
import Cookies from "js-cookie";

export default function TambahProgram() {
  const [judulProgram, setJudulProgram] = useState("");
  const [imageProgram, setImageProgram] = useState("");
  const [preview, setPreview] = useState("");

  const verifyToken = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        accessToken: Cookies.get('accessToken'),
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Silahkan Login Terlebih Dahulu!",
          showConfirmButton: false,
          timer: 2000,
          backdrop: `
          rgba(40,44,52, 0.99)
      `,
        });
        setTimeout(() => {
          Router.push("/admin/login");
        }, 2100);
      }
    }
  };

  useEffect(() => {
    verifyToken();
  }, []);

  const logoutHandle = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/signout`, {
        accessToken: sessionStorage.getItem("accessToken"),
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Anda Telah Berhasil Logout",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        sessionStorage.clear();
        Router.push("/admin/login");
      }, 2100);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImageProgram(image);
    setPreview(URL.createObjectURL(image));
  };

  const postProgram = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageProgram);
    formData.append("judul_program", judulProgram);
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/program`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      Router.push("/admin/program");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-Poppins font-extrabold text-2xl text-black">
            Tambah Program
          </h1>
          <h1 className="font-Poppins font-light text-lg text-black cursor-pointer" onClick={logoutHandle}>
            LogOut
          </h1>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="p-5">
            <div className="lg:w-full lg:px-20 flex flex-col">
              <div className="flex flex-col space-y-2">
                <h1 className="font-Poppins font-medium text-lg">
                  Judul Program
                </h1>
                <input
                  type="text"
                  onChange={(e) => setJudulProgram(e.target.value)}
                  className="border border-gray-400 focus:border-black p-4 rounded-lg"
                  placeholder="Masukan Judul Program"
                />
              </div>
            </div>
            <div className="lg:w-full lg:px-20 flex flex-col mt-10">
              <div className="flex flex-col space-y-2">
                <h1 className="font-Poppins font-medium text-lg">
                  Foto Program
                </h1>
                <input
                  type="file"
                  onChange={loadImage}
                  className="border border-gray-400 focus:border-black p-4 rounded-lg"
                />
              </div>
            </div>
            <div className="lg:w-full lg:px-20 flex flex-col mt-10">
              <div className="flex flex-col space-y-2">
                <Image
                  alt="Program Tikomdik"
                  src={preview ? preview : "/image/ProgramPreset.jpg"}
                  width={500}
                  height={0}
                />
              </div>
            </div>
            <div className="w-full flex lg:justify-end justify-center lg:px-20 mt-5 lg:mt-10 font-Poppins">
              <Link href={"/admin/program"} className="px-5">
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center">
                  <h1 className="flex items-center justify-center text-lg font-semibold text-[#112883]">
                    Kembali
                  </h1>
                </div>
              </Link>
              <button onClick={postProgram} className="px-5">
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
