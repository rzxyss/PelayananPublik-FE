import Image from "next/image";
import React from "react";
import Navbar from "../components/Navbar";
import { BsInstagram, BsWhatsapp, BsGithub } from "react-icons/bs";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="w-full h-auto">
      <Navbar />
      <div className='bg-cover bg-[url("/image/tikomdik.jpg")] bg-center w-full h-80'>
        <div className="bg-black/60 w-full h-full">
          <div className="flex flex-col p-10">
            <h1 className="font-Poppins font-extrabold text-2xl lg:text-3xl xl:text-4xl text-white">
              Tentang TIKomDik
            </h1>
            <h1 className="font-Poppins font-light text-xl text-white">
              Ketahui segalanya tentang UPTD TIKOMDIK.
            </h1>
          </div>
          <div className="w-full h-auto lg:mt-14 px-5 lg:px-20 2xl:px-60">
            <div className="bg-white rounded-lg shadow-2xl lg:shadow-lg">
              <div id="tentang-tikomdik" className="my-10">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  UPTD TIKomDik
                </h1>
                <div className="flex flex-col lg:flex-row gap-5 px-5 lg:px-16 py-10">
                  <div className="lg:w-10/12 lg:mx-auto">
                    <Image
                      src={"/image/TulisanTikomdik.jpg"}
                      responsive="true"
                      alt="Hero Image"
                      width={350}
                      height={0}
                      className="rounded-xl float-none lg:mb-5 lg:mr-5 mx-auto lg:float-left"
                    />
                    <h1 className="font-Poppins font-medium text-lg text-black/50 indent-5 lg:indent-8 mb-5">
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
                    <h1 className="font-Poppins font-medium text-lg text-black/50 indent-5 lg:indent-8 mb-5">
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
                    <h1 className="font-Poppins font-medium text-lg text-black/50 indent-5 lg:indent-8 mb-5">
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
              <div id="visi-misi" className="my-10 px-7 lg:px-20 2xl:px-56">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Visi dan Misi
                </h1>
                <div className="grid lg:grid-cols-3 gap-2 lg:px-16 py-5 lg:py-0 lg:items-center">
                  <div className="col-span-2">
                    <div className="flex flex-col space-y-3">
                      <div className="flex-col space-y-2">
                        <h1 className="font-Lato font-extrabold text-3xl px-5 lg:px-10 text-[#112883]">
                          Visi
                        </h1>
                        <h1 className="font-Poppins font-medium text-lg text-black/50">
                          Menuju Lembaga kreatif inovatif dalam memberikan
                          layanan pembelajaran, Pendidikan, dan system tata
                          kelola Pendidikan di era milenial.
                        </h1>
                      </div>
                      <div className="flex-col space-y-2">
                        <h1 className="font-Lato font-extrabold text-3xl px-5 lg:px-10 text-[#112883]">
                          Misi
                        </h1>
                        <ul className="list-disc list-outside text-black/50">
                          <li className="font-Poppins font-medium text-lg">
                            Mempersiapkan Sumber Daya Manusia yang literat
                            terhadap Teknologi Informasi.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Membangun Kultur Pemanfaatan TIK Pendidikan di
                            Lingkungan Satuan Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Menghasilkan Produk TIK yang berkualitas bagi
                            Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Memberikan pelayanan profesional dengan menggunakan
                            teknologi informasi dan komunikasi di berbagai
                            sektor Pendidikan.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Mewujudkan Layanan Pendidikan Terintegrasi berbasis
                            TIK di Jawa Barat.
                          </li>
                          <li className="font-Poppins font-medium text-lg">
                            Menjadi pusat pembangunan dan pengembangan TIK
                            Pendidikan.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-2">
                    <div className="col-start-1 row-start-1 flex justify-end p-2">
                      <Image
                        src={"/image/visi-misi1.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="col-start-2 row-start-2 flex justify-start p-2">
                      <Image
                        src={"/image/visi-misi2.jpg"}
                        width={200}
                        height={0}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="col-start-1 row-start-3 flex justify-end p-2">
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
              <div
                id="tugas-pokok-dan-fungsi"
                className="my-10 px-7 lg:px-20 2xl:px-56"
              >
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Tugas Pokok Dan Fungsi
                </h1>
                <div className="flex flex-col space-y-3">
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-Lato font-extrabold text-3xl px-5 lg:px-10 text-[#112883]">
                      Tugas Pokok
                    </h1>
                    <h1 className="font-Poppins font-medium text-lg text-black/50">
                      UPTD Teknologi Informasi dan Komunikasi Pendidikan
                      mempunyai tugas pokok melaksanakan kegiatan teknis
                      operasional dan/atau kegiatan teknis penunjang tertentu
                      dibidang teknologi informasi dan komunikasi pendidikan,
                      meliputi pengembangan dan produksi serta pelayanan dan
                      promosi.
                    </h1>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h1 className="font-Lato font-extrabold text-3xl px-5 lg:px-10 text-[#112883]">
                      Fungsi
                    </h1>
                    <ul className="list-disc list-outside text-black/50">
                      <li className="font-Poppins font-medium text-lg">
                        Penyiapan bahan kebijaksanaan teknis di bidang teknologi
                        informasi dan komunikasi pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Penyusunan program pengembangan teknologi informasi dan
                        komunikasi pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Penyusunan program tentang pemanfaatan Teknlogi
                        Informasi dan Komunikasi Pendidikan untuk satuan Sekolah
                        Menengah Atas (SMA), Sekolah Menengah Kejuruan (SMK) dan
                        Pendidikan Khusus dan Pendidikan Layanan Khusus (PKPLK).
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pemberian pelayanan teknologi informasi dan komunikasi
                        dalam bidang pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pengelolaan e-layanan bidang pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pelaksanaan kerjasama pemanfaatan teknologi informasi
                        dan komunikasi pendidikan.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pengembangan kompetensi pendidik di bidang pemanfaatan
                        teknologi informasi dan komunikasi untuk pembelajaran.
                      </li>
                      <li className="font-Poppins font-medium text-lg">
                        Pengembangan kompetensi tenaga kependidikan dibidang
                        pemanfaatan teknologi informasi dan komunikasi
                        pendidikan.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-10" id="team-project">
                <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
                  Team Project
                </h1>
                {/* <h1 className="text-center">Coming Soon......</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10"></div> */}
                <section>
                  <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                    <div className="grid gap-8 mb-6 md:grid-cols-2 pb-5 lg:pb-10">
                      <div className="items-center bg-gray-50 rounded-lg border sm:flex">
                        <Image
                          width={200}
                          height={0}
                          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                          src="/image/pp.png"
                          alt="Bonnie Avatar"
                        />
                        <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            Rizki Saepul Aziz
                          </h3>
                          <span className="text-gray-500">
                            Frontend Developer
                          </span>
                          <p className="mt-3 mb-4 font-light text-gray-500">
                            Responsible for creating Landing Pages
                          </p>
                          <ul className="flex space-x-4 sm:mt-0">
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsInstagram />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsWhatsapp />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsGithub />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="items-center bg-gray-50 rounded-lg border sm:flex">
                        <Image
                          width={200}
                          height={0}
                          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                          src="/image/pp.png"
                          alt="Bonnie Avatar"
                        />
                        <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            M Ilham Hardiana
                          </h3>
                          <span className="text-gray-500">
                            Frontend Developer
                          </span>
                          <p className="mt-3 mb-4 font-light text-gray-500">
                            Responsible for creating Admin Pages
                          </p>
                          <ul className="flex space-x-4 sm:mt-0">
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsInstagram />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsWhatsapp />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsGithub />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="items-center bg-gray-50 rounded-lg border sm:flex">
                        <Image
                          width={200}
                          height={0}
                          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                          src="/image/pp.png"
                          alt="Bonnie Avatar"
                        />
                        <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            Fajar Muhammad
                          </h3>
                          <span className="text-gray-500">UI/UX Design</span>
                          <p className="mt-3 mb-4 font-light text-gray-500">
                            Responsible for creating UI/UX Design
                          </p>
                          <ul className="flex space-x-4 sm:mt-0">
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsInstagram />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsWhatsapp />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsGithub />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="items-center bg-gray-50 rounded-lg border sm:flex">
                        <Image
                          width={200}
                          height={0}
                          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                          src="/image/pp.png"
                          alt="Bonnie Avatar"
                        />
                        <div className="p-5">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            Izza Zaki Z
                          </h3>
                          <span className="text-gray-500">
                            Backend Developer
                          </span>
                          <p className="mt-3 mb-4 font-light text-gray-500">
                            Responsible for creating Backend Pelayanan Publik
                          </p>
                          <ul className="flex space-x-4 sm:mt-0">
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsInstagram />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsWhatsapp />
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-gray-500 hover:text-gray-900"
                              >
                                <BsGithub />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
