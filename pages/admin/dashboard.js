import Image from "next/image";
import { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-auto">
        <Sidebar />
      </div>
      <div className="w-full flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-BebasNeue text-3xl text-[#112883] font-medium">berita</h1>
          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-col items-end">
              <h1 className="font-Poppins text-sm font-bold">Rizki Saepul Aziz</h1>
              <h1 className="font-Poppins text-sm font-bold text-black/50">Admin</h1>
            </div>
            <Image src={'/image/pp.png'} width={50} height={0} className='rounded-full'/>
          </div>
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <h1>Misalanya Seperti INi Atau Bagaimana Juga Gimana Kamu</h1>
        </div>
      </div>
    </div>
  )
}