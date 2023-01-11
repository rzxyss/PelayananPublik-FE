import Image from "next/image";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { AiFillCheckCircle, AiFillBell } from "react-icons/ai";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-BebasNeue text-3xl text-[#112883] font-medium">
            dashboard
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col items-end">
              <h1 className="font-Poppins text-sm font-bold">
                Rizki Saepul Aziz
              </h1>
              <h1 className="font-Poppins text-sm font-bold text-black/50">
                Admin
              </h1>
            </div>
            <Image
              src={"/image/pp.png"}
              width={50}
              height={0}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="w-full h-full flex flex-col py-2 space-y-2">
            {/* CardStart */}
            <div className="w-full bg-[#D9D9D9] p-2 rounded-md">
              <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                <AiFillCheckCircle className="w-10 h-10" />
                <div className="w-full flex flex-col lg:flex-row justify-between gap-2">
                  <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                    <div className="flex flex-col">
                      <h1 className="font-Poppins font-bold text-lg">Judul</h1>
                      <h1 className="font-DMSans font-normal text-sm text-black/50">Lorem ipsum dolor Lorem ipsum....</h1>
                    </div>
                    <h1 className="font-DMSans font-normal text-sm">2023-01-11</h1>
                  </div>
                  <div className="w-full lg:w-1/2 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-2">
                    <h1 className="font-DMSans font-normal text-sm">rizkisaepulaziz@gmail.com</h1>
                    <div className="flex flex-row items-center gap-2">
                      <AiFillBell className="w-7 h-7 text-[#112883]" />
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
