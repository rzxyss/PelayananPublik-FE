import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Faq1 from "../components/tab/faq/faq1";
import Faq2 from "../components/tab/faq/faq2";
import Faq3 from "../components/tab/faq/faq3";

export default function FaQ() {
  const [faq, setFaq] = useState([]);
  const [selected, setSelected] = useState(null);
  const [type, setType] = useState('faq1')
  const getFaq = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/faq`
      );
      setFaq(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    getFaq();
  }, []);
  return (
    <>
      <Navbar />
      <div className="py-10 mx-auto px-5 md:px-16 lg:container">
        <h1 className="text-2xl font-medium mb-4 font-Poppins">FAQ</h1>
        <div className="inline-flex w-full justify-center">
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "faq1" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("faq1")}
          >
            Seputar Pendaftaran Prakerin
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "faq2" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("faq2")}
          >
            Seputar Program Tikomdik
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "faq3" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("faq3")}
          >
            Seputar Program Tikomdik
          </button>
        </div>
        {type == 'faq1' && <Faq1 />}
        {type == 'faq2' && <Faq2 />}
        {type == 'faq3' && <Faq3 />}
      </div>
      <div className="w-full lg:fixed bottom-0">
        <Footer />
      </div>
    </>
  );
}
