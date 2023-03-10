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
import Cookies from "js-cookie";

export default function Program({ program }) {
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
        accessToken: Cookies.get('accessToken'),
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
          axios.delete(
            `${process.env.NEXT_PUBLIC_API_URL}/program/${programId}`
          );
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Berhasil!", "Program berhasil dihapus!", "success").then(
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
            Program
          </h1>
          <h1
            className="font-Poppins font-light text-lg text-black cursor-pointer"
            onClick={logoutHandle}
          >
            LogOut
          </h1>
        </div>
        <div className="p-1">
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
                {program.map((program, index) => {
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
                            priority="true"
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
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const results = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/program`
  );

  return {
    props: {
      program: results.data.results,
    },
  };
}
