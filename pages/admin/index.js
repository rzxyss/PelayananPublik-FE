import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { FcStatistics } from "react-icons/fc";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

export default function Home() {
  const getAdmin = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        token: sessionStorage.getItem("token"),
      });
      if (sessionStorage.getItem("token") != res.data);
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

  useEffect(() => {
    getAdmin();
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
          token: sessionStorage.getItem("token"),
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
          <h1 className="font-Poppins font-extrabold text-2xl text-[#112883]">
            Dashboard
          </h1>
          <h1 className="font-Poppins font-light text-lg text-black">
            LogOut
          </h1>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="w-full flex flex-col py-2 space-y-2 p-2 lg:p-5">
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col items-center">
                <div className="flex-row">
                  <div className="flex-col">
                    <h1>4</h1>
                    <h1>Total Program</h1>
                    <div>
                      <FcStatistics />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-rose-500">p</div>
              <div className="bg-rose-500">p</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
