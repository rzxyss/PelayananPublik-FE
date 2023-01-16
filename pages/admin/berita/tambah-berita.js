import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdHistory, MdEdit } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { HiChevronDown } from "react-icons/hi";
import Router from "next/router";

export default function TambahBerita() {
  const [dataAdmin, setDataAdmin] = useState([]);
  const [profile, setProfile] = useState(false);
  useEffect(() => {
    const getAdmin = async (e) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/token`,
          {
            token: sessionStorage.getItem("token") || "null",
          }
        );
        setDataAdmin(res.data);
        if (sessionStorage.getItem("token", res.data[0].token)) {
          console.log("admin login");
        }
      } catch (error) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Anda Harus Login Terlebih Dahulu!",
          showConfirmButton: false,
          timer: 2000,
        });
        setTimeout(() => {
          Router.push("/admin/login");
        }, 2100);
      }
    };
    getAdmin();
  }, []);

  function logoutHandle() {
    sessionStorage.clear();
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
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-BebasNeue text-3xl text-[#112883] font-medium">
            berita | tambah berita
          </h1>
          <div className={`${!profile ? "hidden" : "absolute top-16 right-2"}`}>
            <div className="flex flex-col w-auto items-center bg-white border rounded-md p-2">
              <button onClick={logoutHandle}>Log Out</button>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col items-end">
              {dataAdmin.map((admin, index) => {
                return (
                  <>
                    <h1 className="font-Poppins text-sm font-bold" key={index}>
                      {admin.name}
                    </h1>
                    <h1 className="font-Poppins text-sm font-bold text-black/50">
                      {admin.username}
                    </h1>
                  </>
                );
              })}
            </div>
            <Image
              src={"/image/pp.png"}
              width={50}
              height={0}
              className="rounded-full"
            />
            <HiChevronDown
              className="w-7 h-7 cursor-pointer"
              onClick={() => setProfile(!profile)}
            />
          </div>
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
                    className="border border-gray-400 focus:border-black p-4 rounded-lg"
                  />
                </div>
                <div className="flex flex-col space-y-2 mt-10">
                  {/* <h1 className="font-Poppins font-medium text-lg">
                  Judul Berita
                </h1>
                <textarea
                  className="block p-2.5 w-full text-sm rounded-lg border border-gray-400 focus:border-black"
                  placeholder="Masukan deskripsi berita"
                /> */}
                </div>
              </div>
            </div>
            <div className="w-full flex lg:justify-end justify-center lg:px-20 mt-5 lg:mt-10 font-BebasNeue">
              <Link href={"/"} className="px-5">
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center">
                  <h1 className="flex items-center justify-center text-lg">
                    Kembali
                  </h1>
                </div>
              </Link>
              <Link href={"/"} className="px-5">
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center">
                  <h1 className="flex items-center justify-center text-lg">
                    Simpan
                  </h1>
                </div>
              </Link>
            </div>
          </div>
          {/* Akhir Konten */}
        </div>
      </div>
    </div>
  );
}
