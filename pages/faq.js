import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function FaQ() {
  const [faq, setFaq] = useState([]);
  const [selected, setSelected] = useState(null);
  const [type, setType] = useState('')
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
              type == "popular" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("popular")}
          >
            Seputar Pendaftaran Prakerin
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "baru" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("baru")}
          >
            Seputar Program Tikomdik
          </button>
          <button
            type="button"
            className={`py-2 px-4 text-sm font-medium bg-transparent ${
              type == "apa" ? "border-b-4 border-primary" : ""
            }`}
            onClick={() => setType("apa")}
          >
            Seputar Program Tikomdik
          </button>
        </div>
        {faq.map((faq, i) => {
          return (
            <div className="border-t border-gray-200" key={i}>
              <button
                className="w-full text-left p-3 text-gray-700 font-medium hover:bg-gray-100 focus:outline-none"
                onClick={() => toggle(i)}
              >
                {faq.question}
                <span className="float-right text-gray-400">
                  {selected === i ? "-" : "+"}
                </span>
              </button>
              {selected === i && (
                <div className="p-3 text-gray-600">{faq.answer}</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="w-full lg:fixed bottom-0">
        <Footer />
      </div>
    </>
  );
}
