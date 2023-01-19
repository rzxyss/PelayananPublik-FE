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
import Router from "next/router";
import { HiChevronDown } from "react-icons/hi";

export default function program() {
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
                    <h1 className="font-BebasNeue text-3xl text-[#112883] font-medium">
                        Program
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
                        <div className="w-full h-auto flex flex-col">
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
                                <div className="w-full h-auto hover:bg-black/10 p-3 rounded-xl duration-200 gap-5">
                                    <div className="flex flex-row gap-3 items-center">
                                        <div>
                                            <Image
                                                src={"/image/gambarprogram.jpg"}
                                                width={350}
                                                height={150}
                                                className="rounded-lg" />
                                        </div>
                                        <div className="flex flex-col justify-between">
                                            <div className="text-sm font-Poppins font-semibold">
                                                <h1>Judul program</h1>
                                            </div>
                                            <div className="flex flex-row">
                                                <div className="flex flex-row items-center ">
                                                    <MdHistory className="w-5 h-5" />
                                                    <h1>21 12 31
                                                    </h1>
                                                </div>
                                                <div className="flex flex-row items-center justify-between">
                                                    <Link
                                                        href={"program/tambah-program"}>
                                                        <MdEdit className="w-5 h-5" />
                                                    </Link>
                                                    <AiFillDelete className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* EndKonten */}
                </div>
            </div>
        </div>
    );
}
