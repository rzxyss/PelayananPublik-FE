import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BiArrowToTop } from "react-icons/bi";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Profile() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollTop = async () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full h-auto">
      <Navbar />
      {showButton && (
        <button
          className={`fixed w-14 h-14 bg-primary shadow text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <BiArrowToTop className="w-6 h-6 text-white" />
        </button>
      )}
      <div className='bg-cover bg-[url("/image/tikomdik.jpg")] bg-center w-full h-80'>
        <div className="bg-black/60 w-full h-full">
          <div className="flex flex-col p-10 space-y-1">
            <h1 className="font-Lora font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
              TENTANG UPTD TIKOMDIK
            </h1>
            <h1 className="font-Poppins font-medium text-sm md:text-sm lg:text-lg text-white/50">
              Ketahui segalanya tentang UPTD TIKOMDIK Provinsi Jawa Barat.
            </h1>
          </div>
          <div className="w-full h-auto mx-auto px-2 md:px-16 lg:container">
            <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg my-10">
              <div id="tentang-tikomdik" className="p-10">
                <h1 className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary">
                  TENTANG UPTD TIKOMDIK
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 mt-10">
                  <div className="w-full">
                    <Image
                      src={"/image/TulisanTikomdik.jpg"}
                      responsive="true"
                      alt="Hero Image"
                      width={350}
                      height={0}
                      className="rounded-xl float-none lg:mb-5 lg:mr-10 mx-auto lg:float-right"
                    />
                    <h1 className="font-Poppins font-medium text-lg text-black/50 mb-5">
                      Disrupsi Teknologi 4.0 mempengaruhi dunia pendidikan
                      secara eksponensial. Di sisi lain peserta didik saat ini
                      adalah Generasi Neo Milenial atau dikenal juga sebagai
                      Generasi Z. Peserta didik saat ini memiliki kebiasaan
                      highly mobile, apps-dependent, visually-literate, dan
                      always connected (selalu terhubung online). Mereka sudah
                      terbiasa berkomunikasi antar sesamanya di jaringan
                      internet diantaranya melalui media sosial. Mereka terbiasa
                      belajar dan mengakses informasi melalui kanal-kanal yang
                      tersedia secara online.
                    </h1>
                    <h1 className="font-Poppins font-medium text-lg text-black/50 mb-5">
                      Sehingga mereka menjadi data-literate (melek data). Mereka
                      sangat paham dan piawai berselancar di mesin-mesin pencari
                      online, mendapatkan, memahami, memproses, mengurasi, dan
                      menganalisis informasi. Mereka memenuhi kebutuhan
                      informasinya tidak lagi secara pasif seperti di
                      perpustakaan konvensional. Disrupsi Teknologi 4.0
                      mendorong dunia pendidikan tidak lagi bergerak dengan
                      model bisnis konvensional (Bussiness as Usual) tetapi
                      bertransformasi dan menyesuaikan diri dengan kebutuhan
                      peserta didiknya.
                    </h1>
                    <h1 className="font-Poppins font-medium text-lg text-black/50 mb-5">
                      Dunia Pendidikan harus mampu mendorong pembelajaran secara
                      kolaboratif dengan pendekatan peer-to-peer diantaranya
                      dengan memanfaatkan social learning platform. Dunia
                      Pendidikan dituntut untuk membentuk peserta didik
                      menguasai soft skills (Seven Survival Skills for 21st
                      Century- Tony Wagner, 2008) meliputi : critical thinking
                      and problem solving, collaboration across network, agility
                      and adaptability, Initiative and entrepreneurship,
                      Accessing and analysing information, effective
                      communication, curiosity and imagination. Pemerintah
                      Provinsi Jawa Barat merespon kebutuhan dan kondisi
                      tersebut dengan membuat UPTD Teknologi Informasi dan
                      Komunikasi Pendidikan (UPTD Tikomdik) di bawah Dinas
                      Pendidikan Provinsi Jawa Barat. Core Bussiness UPTD
                      Tikomdik adalah memfasilitasi konten pembelajaran meliputi
                      bahan ajar dan penilian (Bank Soal). Tugas lainnya adalah
                      memfasilitasi kebutuhan TIK di lingkungan Dinas Pendidikan
                      Provinsi Jawa Barat.
                    </h1>
                  </div>
                </div>
              </div>
              <div id="visi-misi" className="m-10">
                <div className="grid lg:grid-cols-3 gap-2 lg:items-center">
                  <div className="col-span-2">
                    <div className="w-full border text-black/20 my-4" />
                    <div className="flex flex-col space-y-3">
                      <div className="flex-col space-y-2">
                        <h1 className="font-Lora font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
                          Visi
                        </h1>
                        <h1 className="font-Poppins font-medium text-lg lg:text-xl text-black/50">
                          Menuju Lembaga kreatif inovatif dalam memberikan
                          layanan pembelajaran, Pendidikan, dan system tata
                          kelola Pendidikan di era milenial.
                        </h1>
                      </div>
                      <div className="w-full border text-black/20 my-4" />
                      <div className="flex-col space-y-2">
                        <h1 className="font-Lora font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary">
                          Misi
                        </h1>
                        <ul className="list-disc list-inside text-black/50">
                          <li className="font-Poppins font-medium text-lg lg:text-xl">
                            Mempersiapkan Sumber Daya Manusia yang literat
                            terhadap Teknologi Informasi.
                          </li>
                          <li className="font-Poppins font-medium text-lg lg:text-xl">
                            Membangun Kultur Pemanfaatan TIK Pendidikan di
                            Lingkungan Satuan Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg lg:text-xl">
                            Menghasilkan Produk TIK yang berkualitas bagi
                            Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg lg:text-xl">
                            Memberikan pelayanan profesional dengan menggunakan
                            teknologi informasi dan komunikasi di berbagai
                            sektor Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg lg:text-xl">
                            Mewujudkan Layanan Pendidikan Terintegrasi berbasis
                            TIK di Jawa Barat.
                          </li>
                          <li className="font-Poppins font-medium text-lg lg:text-xl">
                            Menjadi pusat pembangunan dan pengembangan TIK
                            Pendidikan.
                          </li>
                        </ul>
                      </div>
                      <div className="w-full border text-black/20 my-4" />
                    </div>
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-2">
                    <div className="col-start-1 row-start-1 flex justify-end p-2 w-52 h-40">
                      <Image
                        src={"/image/visi-misi1.jpg"}
                        width={400}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="col-start-2 row-start-2 flex justify-start p-2 w-52 h-40">
                      <Image
                        src={"/image/visi-misi2.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="col-start-1 row-start-3 flex justify-end p-2 w-52 h-40">
                      <Image
                        src={"/image/visi-misi3.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-col lg:flex-row items-center gap-10 m-10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.884767821528!2d107.59763201595032!3d-6.904381069491416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7527b1d6913%3A0xad04e4b7ff8c2657!2sTIKomDik%20Disdik%20Jabar!5e0!3m2!1sid!2sid!4v1676527554995!5m2!1sid!2sid"
                  className="border lg:w-[640px] lg:h-[400px] rounded-2xl"
                  allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
                <div className="flex flex-col items-center">
                  <h1 className="font-Lora font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary">
                    ALAMAT TIKOMDIK
                  </h1>
                  <h1 className="font-Poppins font-medium text-lg text-black/50 mb-5 lg:w-9/12">
                    Dinas Pendidikan, Jl. Dr. Rajiman No.6, Pasir Kaliki, Kec.
                    Cicendo, Kota Bandung, Jawa Barat 40171
                  </h1>
                </div>
              </div>
              <div className="m-10" id="team-project">
                <h1 className="font-Lora font-bold text-center py-5 text-xl md:text-2xl lg:text-3xl xl:text-4xl text-primary">
                  Project Team
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
                  <div className="bg-primary p-6 lg:p-10 rounded-lg flex flex-col lg:justify-between items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
                      <Image
                        src={"/image/Fajar.jpeg"}
                        alt="Fajar Muhammad"
                        width={500}
                        height={500}
                        className="w-40 h-40 rounded-full"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
                          Fajar Muhammad
                        </h3>
                        <h3 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                          UI / UX DESIGN
                        </h3>
                      </div>
                    </div>
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                      SMKN 13 Bandung
                    </h1>
                  </div>
                  <div className="bg-primary p-6 lg:p-10 rounded-lg flex flex-col lg:justify-between items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
                      <Image
                        src={"/image/Izza.jpeg"}
                        alt="Izza Zaki Z"
                        width={500}
                        height={500}
                        className="w-40 h-40 rounded-full"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
                          Izza Zaki Z
                        </h3>
                        <h3 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                          Back End Developer
                        </h3>
                      </div>
                    </div>
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                      SMKN 13 Bandung
                    </h1>
                  </div>
                  <div className="bg-primary p-6 lg:p-10 rounded-lg flex flex-col lg:justify-between items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
                      <Image
                        src={"/image/Ilham.jpg"}
                        alt="M Ilham Hardiana"
                        width={500}
                        height={500}
                        className="w-40 h-40 rounded-full"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
                          M.Ilham Hardiana
                        </h3>
                        <h3 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                          Front End Developer
                        </h3>
                      </div>
                    </div>
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                      SMKN 13 Bandung
                    </h1>
                  </div>
                  <div className="bg-primary p-6 lg:p-10 rounded-lg flex flex-col lg:justify-between items-center">
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
                      <Image
                        src={"/image/Rizki.jpg"}
                        alt="Rizki Saepul Aziz"
                        width={500}
                        height={500}
                        className="w-40 h-40 rounded-full"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <h3 className="font-Poppins font-semibold text-base md:text-lg lg:text-xl xl:text-2xl">
                          Rizki Saepul A
                        </h3>
                        <h3 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                          Front End Developer
                        </h3>
                      </div>
                    </div>
                    <h1 className="font-Poppins font-semibold text-sm md:text-base lg:text-lg xl:text-xl text-white">
                      SMKN 13 Bandung
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
