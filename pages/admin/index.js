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
              <div className="flex flex-col lg:flex-row lg:items-center">
                <AiFillCheckCircle className="w-10 h-10" />
                <div className="flex flex-col lg:flex-row lg:items-center">
                  <div className="w-full lg:w-5/12 flex flex-col">
                    <h1 className="font-Poppins text-lg font-semibold">
                      Judul
                    </h1>
                    <h1 className="overflow-ellipsis overflow-hidden font-Poppins text-sm font-normal">
                      sit amet consectetur. Pulvinar viverra dictumst eleifend
                      sed suspendisse quis. Habitasse sit ornare sed neque.
                    </h1>
                  </div>
                  <div className="w-full lg:w-3/12 flex lg:justify-center">
                    <h1 className="font-Poppins font-normal text-base overflow-ellipsis overflow-hidden text-center">
                      Today at 12:00
                    </h1>
                  </div>
                  <div className="lg:w-3/12 flex lg:justify-center">
                    <h1 className="font-Poppins font-normal text-base">
                      rizkisaefulaziz@gmail.com
                    </h1>
                  </div>
                  <div className="lg:w-1/12 flex lg:justify-center items-center space-x-1">
                    <AiFillBell className="w-6 h-6" />
                    <button className="bg-[#112883] p-2 rounded-md text-white font-Poppins">
                      Delete
                    </button>
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
