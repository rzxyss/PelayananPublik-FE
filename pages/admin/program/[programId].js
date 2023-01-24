import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { HiChevronDown } from "react-icons/hi";
import Router from "next/router";

export default function TambahProgram({ programId }) {
  const [dataAdmin, setDataAdmin] = useState([]);
  const [profile, setProfile] = useState(false);
  const [judulProgram, setJudulProgram] = useState("");
  const [imageProgram, setImageProgram] = useState("");
  const [preview, setPreview] = useState("");

  const getAdmin = async (e) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        token: sessionStorage.getItem("token") || "null",
      });
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

  const getProgram = async (e) => {
    try {
      const rProgram = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/program/${programId}`
      );
      setJudulProgram(rProgram.data.judul_program);
      setImageProgram(rProgram.data.image);
      setPreview(rProgram.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setImageProgram(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateProgram = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageProgram);
    formData.append("judul_program", judulProgram);
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/program/${programId}`,
        formData,
        {
          headers: {
            "Content-type": "multipart/form-data",
          },
        }
      );
      Router.push("/admin/program");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdmin();
    getProgram();
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
          <h1 className="font-Poppins font-extrabold text-2xl text-black">
            Tambah Program
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
          <div className="p-5">
            <div className="lg:w-full lg:px-20 flex flex-col">
              <div className="flex flex-col space-y-2">
                <h1 className="font-Poppins font-medium text-lg">
                  Judul Program
                </h1>
                <input
                  type="text"
                  onChange={(e) => setJudulProgram(e.target.value)}
                  value={judulProgram}
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
                  src={preview}
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
              <button onClick={updateProgram} className="px-5">
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { programId } = params;
  return {
    props: {
      programId,
    },
  };
}
