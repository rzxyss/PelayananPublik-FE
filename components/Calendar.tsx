import React from "react";
import { format } from "date-fns";
import { DayClickEventHandler, DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const bookedDays = [new Date(2023, 2, 10), new Date(2023, 2, 15)];

export default function Calendar() {
  const [available, setAvailable] = React.useState(false);
  const [selected, setSelected] = React.useState(new Date());

  const handleDayClick: DayClickEventHandler = (day, modifiers) => {
    setSelected(day);
  };

  return (
    <div className="flex flex-col p-8">
      <div className="flex justify-center">
        <DayPicker
          styles={{
            caption: { color: "green" },
          }}
          selected={selected}
          onSelect={setSelected}
          defaultMonth={new Date()}
          modifiers={{ available: bookedDays }}
          modifiersClassNames={{
            available: "underline underline-offset-8",
            selected: "text-[#1976D2] font-bold",
          }}
          onDayClick={handleDayClick}
        />
      </div>
      <ol
        className={`relative ${
          agenda.length < 1 ? "border-none" : "border-l border-primary"
        }`}
      >
        {agenda.length < 1 ? (
          <div className="w-full flex flex-col justify-center items-center space-y-5">
            <BsCalendar2X className="w-20 h-20 text-primary" />
            <h1 className="font-Poppins font-semibold text-second text-lg lg:text-xl xl:text-2xl text-center">
              Tidak ada kegiatan / event di hari ini
            </h1>
          </div>
        ) : (
          agenda.map((agenda, index) => {
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
