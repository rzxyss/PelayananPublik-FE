import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { CiUser } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";
import Cookies from "js-cookie";

export default function DetailLaporan({ laporanId }) {
  const [laporan, setLaporan] = useState([]);

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
    getLaporan();
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

  const getLaporan = async (e) => {
    try {
      const rLaporan = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/laporan/${laporanId}`
      );
      setLaporan(rLaporan.data);
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
            Detail Laporan
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
          <div className="p-5">
            <div className="w-full flex flex-col">
              <div className="flex flex-row gap-2 items-stretch">
                <div className="w-2/12 lg:w-1/12 flex justify-center">
                  <CiUser className="w-10 h-10 text-[#112883]" />
                </div>
                <div className="flex flex-col w-10/12 lg:w-11/12">
                  <h1 className="text-2xl font-Poppins font-semibold  ">
                    {laporan.nama}
                  </h1>
                  <h1 className="text-base font-DMSans text-black/50">
                    {laporan.email}
                  </h1>
                  <h1 className="text-base font-DMSans text-black/50">
                    {laporan.jenis_laporan}
                  </h1>
                </div>
              </div>
              <div className="mt-9">
                <div className="flex flex-row gap-2 items-stretch">
                  <div className="w-2/12 lg:w-1/12 flex justify-center">
                    <HiOutlineChatAlt2 className="w-10 h-10 text-[#112883]" />
                  </div>
                  <div className="flex flex-col w-10/12 lg:w-11/12">
                    <h1 className="text-lg font-DMSans font-semibold">
                      {laporan.judul_laporan}
                    </h1>
                    <h1 className="text-base font-DMSans text-black/50">
                      {laporan.isi_laporan}
                    </h1>
                  </div>
                </div>
              </div>
              <div className="mt-9">
                <div className="flex flex-row gap-2 items-stretch">
                  <div className="w-2/12 lg:w-1/12 flex justify-center">
                    <BsCalendar2 className="w-10 h-10 text-[#112883]" />
                  </div>
                  <div className="flex flex-col justify-center w-10/12 lg:w-11/12">
                    <h1 className="text-lg font-DMSans font-semibold">
                      {laporan.createdAt}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex lg:justify-end justify-center lg:px-20 mt-5 lg:mt-10 font-Poppins">
              <Link href={"/admin/laporan"} className="px-5">
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center">
                  <h1 className="flex items-center justify-center text-lg font-semibold text-[#112883]">
                    Kembali
                  </h1>
                </div>
              </Link>
              <Link
                href={`mailto:${laporan.email}?subject=Menjawab Laporan Anda Tentang ${laporan.judul_laporan}`}
                className="px-5"
              >
                <div className="w-auto h-auto lg:px-5 lg:py-1 rounded-lg flex justify-center bg-[#112883]">
                  <h1 className="flex items-center justify-center text-lg font-semibold text-white">
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { laporanId } = params;

  return {
    props: {
      laporanId,
    },
  };
}
