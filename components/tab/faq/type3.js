import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Type3() {
  const [faq, setFaq] = useState([]);
  const [selected, setSelected] = useState(null);
  const getFaq = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/faqType`,
        {
          type: "Seputar Kegiatan Tikomdik",
        }
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
    <div>
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
  );
}
