import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

export default function BeritaPopular() {
  const [berita, setBerita] = useState([]);
  const getBerita = async () => {
    try {
      const results = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/beritapopuler`
      );
      setBerita(results.data);
    } catch (error) {}
  };

  useEffect(() => {
    getBerita();
  }, []);
  return (
    <div className="w-full space-y-2">
      {berita.map((data, index) => {
        return (
          <div className="p-5 hover:bg-black/10 rounded-lg duration-500" key={index}>
            <h1 className="font-Poppins font-normal text-lg">
              {data.judul_berita}
            </h1>
            <div className="flex flex-row items-center text-black/60 mt-2">
              <AiOutlineLike className="w-5 h-5" />
              <h1 className="font-Poppins font-light text-sm">
                {data.like}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
