import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { HiBell, HiChevronDown } from "react-icons/hi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

export default function Home() {
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

  const logoutHandle = async () => {
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
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/logout`,
        {
          id: dataAdmin[0].id,
        }
      );
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
          <div className={`${!profile ? "hidden" : "absolute top-16 right-2"}`}>
            <div className="flex flex-col w-auto items-center bg-white border rounded-md p-2">
              <button onClick={logoutHandle}>Log Out</button>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            {dataAdmin.map((admin, index) => {
              return (
                <div key={index} className="flex flex-col items-end">
                  <h1 className="font-Poppins text-sm font-bold">
                    {admin.name}
                  </h1>
                  <h1 className="font-Poppins text-sm font-bold text-black/50">
                    {admin.username}
                  </h1>
                </div>
              );
            })}
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
          <div className="w-full h-full flex flex-col py-2 space-y-2 p-2 lg:p-5">
            {/* CardStart */}
            <div className="w-full h-auto bg-white p-2 rounded-md shadow-[0_0_5px]">
              <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                <BsFillCheckCircleFill className="w-10 h-10 text-[#58932A]" />
                <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
                  <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                    <div className="flex flex-col">
                      <h1 className="font-Poppins font-bold text-lg">Judul</h1>
                      <h1 className="font-DMSans font-normal text-sm text-black/50">
                        Lorem ipsum dolor Lorem ipsum....
                      </h1>
                    </div>
                    <h1 className="font-DMSans font-normal text-sm">
                      2023-01-11
                    </h1>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                    <h1 className="font-DMSans font-normal text-sm">
                      rizkisaepulaziz@gmail.com
                    </h1>
                    <div className="flex flex-row items-center gap-2">
                      <HiBell className="w-7 h-7 text-[#112883]" />
                      <button className="bg-[#112883] p-2 rounded-md text-white font-Poppins">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CardEnd */}
          </div>
        </div>
      </div>
    </div>
  );
}
