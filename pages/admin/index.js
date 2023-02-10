import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { FcStatistics } from "react-icons/fc";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineSpeakerphone, HiViewBoards } from "react-icons/hi";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function Home({ aspirasi, informasi, pengaduan, berita }) {
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
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-Poppins font-extrabold text-2xl text-[#112883]">
            Dashboard
          </h1>
          <h1
            className="font-Poppins font-light text-lg text-black cursor-pointer"
            onClick={logoutHandle}
          >
            LogOut
          </h1>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="w-full flex flex-col py-2 space-y-2 p-2 lg:p-5">
            <div className="grid lg:grid-cols-3 gap-5">
              <div className="aspect-[3/1] bg-[#9933FF] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      {berita || 0}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Berita
                    </h1>
                  </div>
                  <div>
                    <BsNewspaper className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-[#FF0000] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-2xl font-extrabold text-white">
                      {pengaduan || 0}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Pengaduan
                    </h1>
                  </div>
                  <div>
                    <HiOutlineSpeakerphone className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-[#FF00FF] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      {aspirasi || 0}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Aspirasi
                    </h1>
                  </div>
                  <div>
                    <HiOutlineSpeakerphone className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-[#FF007F] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      {informasi || 0}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Pemintaan Informasi
                    </h1>
                  </div>
                  <div>
                    <HiOutlineSpeakerphone className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-blue-600 rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      4
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Program
                    </h1>
                  </div>
                  <div>
                    <HiViewBoards className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const resPengaduan = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/pengaduan`
  );

  const resAspirasi = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/aspirasi`
  );

  const resInformasi = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/informasi`
  );
  
  const resBerita = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/berita`
  );
  
  const resProgram = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/program`
  );

  return {
    props: {
      pengaduan: resPengaduan.data.totalRows,
      aspirasi: resAspirasi.data.totalRows,
      informasi: resInformasi.data.totalRows,
      berita: resBerita.data.totalRows,
      program: resProgram.data.totalRows,
    },
  };
}
