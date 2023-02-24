import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Type1 from "../components/tab/faq/type1";
import Type2 from "../components/tab/faq/type2";
import Type3 from "../components/tab/faq/type3";

export default function FaQ() {
  const [type, setType] = useState('1')
  
  return (
    <>
      <Navbar />
      <div className="py-10 mx-auto px-5 md:px-16 lg:container">
        <h1 className="text-2xl font-medium mb-4 font-Poppins">FAQ</h1>
        <div className="inline-flex w-full justify-center">
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "1" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("1")}
          >
            Seputar Pendaftaran Prakerin
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "2" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("2")}
          >
            Seputar Program Tikomdik
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "3" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("3")}
          >
            Seputar Kegiatan Tikomdik
          </button>
        </div>
        {type == '1' && <Type1 />}
        {type == '2' && <Type2 />}
        {type == '3' && <Type3 />}
      </div>
      <div className="w-full lg:fixed bottom-0">
        <Footer />
      </div>
    </>
  );
}
