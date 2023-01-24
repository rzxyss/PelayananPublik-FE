import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdHistory, MdEdit } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router from "next/router";
import { HiChevronDown } from "react-icons/hi";

export default function Program() {
  const [dataAdmin, setDataAdmin] = useState([]);
  const [profile, setProfile] = useState(false);
  const [dataProgram, setDataProgram] = useState([]);
  
  const getAdmin = async (e) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/token`,
        {
          token: sessionStorage.getItem("token") || "null",
        }
      );
      setDataAdmin(res.data);
      if (sessionStorage.getItem("token", res.data[0].token));
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

  const fetchProgram = async () => {
    try {
      const rPorgram = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/program`
      );
      setDataProgram(rPorgram.data);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    fetchProgram();
    getAdmin();
  }, []);

  const btnDelete = async (programId) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda tidak dapat mengembalikan Program ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/program/${programId}`);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Berhasil!", "Program berhasil dihapus!", "success").then((confirm) => {
          if (confirm.isConfirmed) {
            location.reload();
          }
        })
      }
    });
  };

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
            Program
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
            <HiChevronDown
              className="w-7 h-7 cursor-pointer"
              onClick={() => setProfile(!profile)}
            />
          </div>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="lg:p-5">
            <div className="w-full h-full flex flex-col tes">
              <div className="flex flex-row justify-end items-end">
                <Link
                  href={"program/tambah-program"}
                  className="flex flex-row items-start gap-1 border-2 border-[#112883] p-2 rounded-xl text-[#112883]"
                >
                  <h1 className="font-Poppins text-sm font-semibold">
                    Tambah Program
                  </h1>
                  <AiOutlinePlus className="w-6 h-6" />
                </Link>
              </div>
              <div className="mt-5">
                {dataProgram.map((program, index) => {
                  return (
                    <div
                      className="w-full h-full hover:bg-black/10 p-3 rounded-xl duration-200 gap-5"
                      key={index}
                    >
                      <div className="flex flex-row gap-3">
                        <div>
                          <Image
                            alt={program.judul_program}
                            src={program.url}
                            width={350}
                            height={150}
                            className="rounded-lg"
                            priority = 'true'
                          />
                        </div>
                        <div className="flex flex-col justify-between lg:py-2 w-full">
                          <h1 className="text-xl font-Poppins font-semibold">
                            {program.judul_program}
                          </h1>
                          <div className="flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-2">
                            <div className="flex flex-row items-center gap-1">
                              <MdHistory className="w-5 h-5" />
                              <h1>{program.createdAt}</h1>
                            </div>
                            <div className="flex flex-row items-center gap-3">
                              <Link href={`program/${program.id}`}>
                                <MdEdit className="w-5 h-5" />
                              </Link>
                              <AiFillDelete
                                className="w-5 h-5 cursor-pointer"
                                onClick={() => btnDelete(program.id)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* EndKonten */}
        </div>
      </div>
    </div>
  );
}
