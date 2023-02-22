import React from "react";
import { format } from "date-fns";
import { DayClickEventHandler, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarXmark } from "@fortawesome/free-regular-svg-icons";

export default function Calendar() {
  const [available, setAvailable] = React.useState([]);
  const [selectDate, setSelectDate] = React.useState(new Date());
  const [detailAgenda, setDetailAgenda] = React.useState([]);
  const availableAgenda = available.map((days) => new Date(days.tgl_acara));

  const selectInfo = selectDate ? (
    <h1 className="font-Poppins font-semibold text-second text-base lg:text-lg xl:text-xl px-5 py-2">
      {format(selectDate, "MMMM d, yyyy")}
    </h1>
  ) : (
    setSelectDate(new Date())
  );

  const getAgenda = async () => {
    const tglAcara = format(selectDate || new Date(), "yyyy-M-d");
    const agenda = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/agenda`);
    const detailAgenda = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/acara`,
      {
        tgl_acara: tglAcara,
      }
    );
    setAvailable(agenda.data.results);
    setDetailAgenda(detailAgenda.data);
  };

  React.useEffect(() => {
    getAgenda();
  }, [selectDate]);

  const handleDayClick: DayClickEventHandler = (day) => {
    setSelectDate(day);
  };

  return (
    <div className="flex flex-col">
      {selectInfo}
      <div className="flex justify-center">
        <DayPicker
          styles={{
            caption: { color: "#1E88E5" },
            head: { color: "GrayText", fontSize: "19px" },
            day: { color: "#1E88E5", fontSize: "20px" },
          }}
          defaultMonth={new Date()}
          modifiers={{ available: availableAgenda }}
          modifiersStyles={{
            available: {
              textDecoration: "underline",
              textDecorationThickness: "3px",
              textDecorationColor: "#16A75C",
            },
          }}
          onDayClick={handleDayClick}
        />
      </div>
      <ol
        className={`relative ${
          detailAgenda.length < 1 ? "border-none" : "border-l border-primary"
        }`}
      >
        {detailAgenda.length < 1 ? (
          <div className="w-full flex flex-col justify-center items-center space-y-5">
            <FontAwesomeIcon
              icon={faCalendarXmark}
              className="w-20 h-20 text-primary"
            />
            <h1 className="font-Poppins font-semibold text-second text-lg lg:text-xl xl:text-2xl text-center">
              Tidak ada Agenda pada{" "}
              {format(selectDate, "MMMM d, yyyy")}
            </h1>
          </div>
        ) : (
          detailAgenda.map((agenda, index) => {
            return (
              <li className="mb-10 ml-4" key={index}>
                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-primary" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {agenda.tgl_acara}
                </time>
                <div className="flex flex-col border-2 border-primary p-2 rounded-xl space-y-2">
                  <h3 className="font-semibold text-primary text-sm md:text-base lg:text-lg xl:text-xl">
                    {agenda.nama_acara}
                  </h3>
                  <h3 className="font-medium text-black/50 text-xs md:text-xm lg:text-base xl:text-lg">
                    {agenda.peserta}
                  </h3>
                  <h3 className="font-normal text-black/50 text-xs md:text-xm lg:text-base xl:text-lg">
                    {agenda.jam_mulai} - {agenda.jam_selesai} WIB
                  </h3>
                </div>
              </li>
            );
          })
        )}
      </ol>
    </div>
  );
}
