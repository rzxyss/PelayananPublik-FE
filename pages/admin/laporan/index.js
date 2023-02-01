import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";

export default function Laporan({ laporan }) {
  const verifyToken = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        accessToken: sessionStorage.getItem("accessToken"),
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

  const btnDelete = async (laporanId) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda tidak dapat mengembalikan Laporan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/laporan/${laporanId}`
          );
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Berhasil!", "Laporan berhasil dihapus!", "success").then(
          (confirm) => {
            if (confirm.isConfirmed) {
              location.reload();
            }
          }
        );
      }
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-Poppins font-extrabold text-2xl text-[#112883]">
            Laporan
          </h1>
          <h1
            className="font-Poppins font-light text-lg text-black cursor-pointer"
            onClick={logoutHandle}
          >
            LogOut
          </h1>
        </div>
        <div className="p-1">
          {/* StartKonten */}
          <div className="lg:p-5">
            <div className="w-full h-full flex flex-col tes">
              <div>
                <h1 className="font-Poppins text-xl font-semibold ">
                  Laporan Terkini
                </h1>
                <h1 className="font-Poppins text-xs text-black/50 ">
                  Ini merupakan pengaduan terkini silahkan cek dan konfirmasi
                </h1>
              </div>
              {laporan.map((laporan, index) => {
                return (
                  <div className="mt-5" key={index}>
                    <div className="w-full h-auto bg-white p-2 rounded-xl shadow-[0_0_5px]">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                        <BsFillCheckCircleFill className="w-10 h-10 text-[#58932A]" />
                        <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
                          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                            <div className="flex flex-col lg:w-10/12">
                              <h1 className="font-Poppins font-bold text-lg">
                                {laporan.judul_laporan}
                              </h1>
                              <h1 className="font-Poppins font-normal text-sm text-black/50">
                                {laporan.isi_laporan}
                              </h1>
                            </div>
                            <h1 className="font-Poppins font-normal text-sm">
                              {laporan.jenis_laporan}
                            </h1>
                          </div>
                          <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                            <h1 className="font-Poppins font-normal text-sm">
                              {laporan.createdAt}
                            </h1>
                            <h1 className="font-Poppins font-normal text-sm">
                              {laporan.email}
                            </h1>
                            <div className="flex flex-row items-center gap-2">
                              <Link href={`laporan/${laporan.id}`}>
                                <HiOutlineClipboardList className="mr-10 w-7 h-7 text-black/50" />
                              </Link>
                              <button
                                onClick={() => btnDelete(laporan.id)}
                                className="bg-[#112883] px-4 py-3  rounded-xl text-white font-Poppins text-base "
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* EndKonten */}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/laporan`
  );

  return {
    props: {
      laporan: result.data.results,
    },
  };
}
