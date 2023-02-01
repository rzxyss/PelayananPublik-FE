import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-auto border-t">
      <div className="flex flex-col items-center py-5 space-y-3">
        <Image
          src={"/image/logo.png"}
          responsive="true"
          alt="Logo TikomDik"
          width={200}
          height={0}
        />
        <h1 className="font-Poppins font-normal text-md">&copy; Copyright 2023 All Rights Reserved by Team SMKN 13 Bandung</h1>
        <h1 className="font-Poppins font-normal text-md">Jl. Dr. Rajiman No.6, Pasir Kaliki, Kec. Cicendo</h1>
        <h1 className="font-Poppins font-normal text-md">Bandung, Jawa Barat 40171, Telp.0838-2063-0348</h1>
      </div>
    </div>
  );
}
