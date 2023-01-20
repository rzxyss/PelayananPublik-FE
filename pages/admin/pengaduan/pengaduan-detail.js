import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { CiUser } from "react-icons/ci";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { BsCalendar2 } from "react-icons/bs";
import { MdHistory, MdEdit } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { HiChevronDown } from "react-icons/hi";
import Router from "next/router";

export default function PengaduanDetail() {
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
                    <h1 className="font-Poppins font-semibold text-2xl text-black">
                        Pengaduan Detail
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
                            alt="Foto Profile"
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
                        <div className="lg:w-full lg:px-5 flex flex-col">
                            <div className="flex flex-row">
                                <CiUser className="w-10 h-14 text-[#112883]" />
                                <div className=" px-5 flex flex-col">
                                    <h1 className="text-2xl font-Poppins font-semibold  ">Ilham hardiana</h1>
                                    <h1 className="text-base font-DMSans text-black/50">Ilhamhardiana@gmail.com</h1>
                                </div>
                            </div>
                            <div className="mt-9">
                                <div className="flex flex-row">
                                    <HiOutlineChatAlt2 className="w-10 h-14 text-[#112883]"/>
                                    <div className="px-5 flex flex-col">
                                        <h1 className="text-lg font-DMSans font-semibold">Jadwal PPDB 2023</h1>
                                        <h1 className="text-base font-DMSans text-black/50">Untuk jadwal PPDB diperkirakan kapan soalnya anak saya mau daftar untuk masuk SMK</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-9">
                                <div className="flex flex-row">
                                    <BsCalendar2 className="w-9 h-12 text-[#112883]"/>
                                    <div className="px-5 flex flex-col justify-center">
                                        <h1 className="text-lg font-DMSans font-semibold">Jadwal PPDB 2023</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Akhir Konten */}
                </div>
            </div>
        </div>
    );
}
