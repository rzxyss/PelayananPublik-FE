import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { BiArrowToTop } from "react-icons/bi";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
          className={`fixed w-14 h-14 bg-indigo-500 text-white rounded-full text-sm font-medium focus:outline-none focus:shadow-outline items-center justify-center bottom-2 right-2 flex`}
          onClick={scrollTop}
        >
          <BiArrowToTop className="w-6 h-6 text-white" />
        </button>
      )}
      <div className="w-full h-auto container mx-auto px-10 md:px-20">
        <div className="my-10">
          <div id="tentang-tikomdik" className="my-10">
            <h1 className="font-Poppins font-extrabold text-3xl p-5 text-center text-[#112883]">
              Privacy Policy
            </h1>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Kebijakan Privasi
                </h1>
                <h1 className="font-normal">
                  Website Pelayanan Publik dimiliki oleh Prakerin SMKN 13, yang
                  akan menjadi pengontrol atas data pribadi Anda.
                  <br />
                  <br />
                  Kami telah mengadopsi Kebijakan Privasi ini untuk menjelaskan
                  bagaimana kami memproses informasi yang dikumpulkan oleh
                  Pelayanan Publik, yang juga menjelaskan alasan mengapa kami
                  perlu mengumpulkan data pribadi tertentu tentang Anda. Oleh
                  karena itu, Anda harus membaca Kebijakan Privasi ini sebelum
                  menggunakan website Pelayanan Publik.
                  <br />
                  <br />
                  Kami menjaga data pribadi Anda dan berjanji untuk menjamin
                  kerahasiaan dan keamanannya.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Informasi pribadi yang kami kumpulkan:
                </h1>
                <h1 className="font-normal">
                  Saat Anda mengunjungi Pelayanan Publik, kami secara otomatis
                  mengumpulkan informasi tertentu mengenai perangkat Anda,
                  termasuk informasi tentang browser web, alamat IP, zona waktu,
                  dan sejumlah cookie yang terinstal di perangkat Anda. Selain
                  itu, selama Anda menjelajahi Website, kami mengumpulkan
                  informasi tentang setiap halaman web atau produk yang Anda
                  lihat, website atau istilah pencarian apa yang mengarahkan
                  Anda ke Website, dan cara Anda berinteraksi dengan Website.
                  Kami menyebut informasi yang dikumpulkan secara otomatis ini
                  sebagai "Informasi Perangkat". Kemudian, kami mungkin akan
                  mengumpulkan data pribadi yang Anda berikan kepada kami
                  (termasuk tetapi tidak terbatas pada, Nama, Nama belakang,
                  Alamat, informasi pembayaran, dll.) selama pendaftaran untuk
                  dapat memenuhi perjanjian.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Mengapa kami memproses data Anda?
                </h1>
                <h1 className="font-normal">
                  Menjaga data pelanggan agar tetap aman adalah prioritas utama
                  kami. Oleh karena itu, kami hanya dapat memproses sejumlah
                  kecil data pengguna, sebanyak yang benar-benar diperlukan
                  untuk menjalankan website. Informasi yang dikumpulkan secara
                  otomatis hanya digunakan untuk mengidentifikasi kemungkinan
                  kasus penyalahgunaan dan menyusun informasi statistik terkait
                  penggunaan website. Informasi statistik ini tidak digabungkan
                  sedemikian rupa hingga dapat mengidentifikasi pengguna
                  tertentu dari sistem.
                  <br />
                  <br />
                  Anda dapat mengunjungi website tanpa memberi tahu kami
                  identitas Anda atau mengungkapkan informasi apa pun, yang
                  dapat digunakan oleh seseorang untuk mengidentifikasi Anda
                  sebagai individu tertentu yang dapat dikenali. Namun, jika
                  Anda ingin menggunakan beberapa fitur website, atau Anda ingin
                  menerima newsletter kami atau memberikan detail lainnya dengan
                  mengisi formulir, Anda dapat memberikan data pribadi kepada
                  kami, seperti email, nama depan, nama belakang, kota tempat
                  tinggal, organisasi, dan nomor telepon Anda. Anda dapat
                  memilih untuk tidak memberikan data pribadi Anda kepada kami,
                  tetapi Anda mungkin tidak dapat memanfaatkan beberapa fitur
                  website. Contohnya, Anda tidak akan dapat menerima Newsletter
                  kami atau menghubungi kami secara langsung dari website.
                  Pengguna yang tidak yakin tentang informasi yang wajib
                  diberikan dapat menghubungi kami melalui rzxyss@gmail.com.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Hak-hak Anda:
                </h1>
                <h1 className="font-normal">
                  Jika Anda seorang warga Eropa, Anda memiliki hak-hak berikut
                  terkait data pribadi Anda:
                </h1>
                <ul className="list-disc list-inside">
                  <li>Hak untuk mendapatkan penjelasan.</li>
                  <li>Hak atas akses.</li>
                  <li>Hak untuk memperbaiki.</li>
                  <li>Hak untuk menghapus.</li>
                  <li>Hak untuk membatasi pemrosesan.</li>
                  <li>Hak atas portabilitas data.</li>
                  <li>Hak untuk menolak.</li>
                  <li>
                    Hak-hak terkait pengambilan keputusan dan pembuatan profil
                    otomatis.
                  </li>
                </ul>
                <h1>
                  Jika Anda ingin menggunakan hak ini, silakan hubungi kami
                  melalui informasi kontak di bawah ini.
                  <br />
                  <br />
                  Selain itu, jika Anda seorang warga Eropa, perlu diketahui
                  bahwa kami akan memproses informasi Anda untuk memenuhi
                  kontrak yang mungkin kami miliki dengan Anda (misalnya, jika
                  Anda melakukan pemesanan melalui Website), atau untuk memenuhi
                  kepentingan bisnis sah kami seperti yang tercantum di atas. Di
                  samping itu, harap diperhatikan bahwa informasi Anda mungkin
                  dapat dikirim ke luar Eropa, termasuk Kanada dan Amerika
                  Serikat.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Link ke website lain:
                </h1>
                <h1 className="font-normal">
                  Website kami mungkin berisi tautan ke website lain yang tidak
                  dimiliki atau dikendalikan oleh kami. Perlu diketahui bahwa
                  kami tidak bertanggung jawab atas praktik privasi website lain
                  atau pihak ketiga. Kami menyarankan Anda untuk selalu waspada
                  ketika meninggalkan website kami dan membaca pernyataan
                  privasi setiap website yang mungkin mengumpulkan informasi
                  pribadi.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Keamanan informasi:
                </h1>
                <h1 className="font-normal">
                  Kami menjaga keamanan informasi yang Anda berikan pada server
                  komputer dalam lingkungan yang terkendali, aman, dan
                  terlindungi dari akses, penggunaan, atau pengungkapan yang
                  tidak sah. Kami menjaga pengamanan administratif, teknis, dan
                  fisik yang wajar untuk perlindungan terhadap akses,
                  penggunaan, modifikasi, dan pengungkapan tidak sah atas data
                  pribadi dalam kendali dan pengawasannya. Namun, kami tidak
                  menjamin tidak akan ada transmisi data melalui Internet atau
                  jaringan nirkabel.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Pengungkapan hukum:
                </h1>
                <h1 className="font-normal">
                  Kami akan mengungkapkan informasi apa pun yang kami kumpulkan,
                  gunakan, atau terima jika diwajibkan atau diizinkan oleh
                  hukum, misalnya untuk mematuhi panggilan pengadilan atau
                  proses hukum serupa, dan jika kami percaya dengan itikad baik
                  bahwa pengungkapan diperlukan untuk melindungi hak kami,
                  melindungi keselamatan Anda atau keselamatan orang lain,
                  menyelidiki penipuan, atau menanggapi permintaan dari
                  pemerintah.
                </h1>
              </div>
              <div className="flex flex-col gap-5 py-10 font-Poppins">
                <h1 className="font-semibold md:text-lg lg:text-xl">
                  Informasi kontak:
                </h1>
                <h1 className="font-normal">
                  Jika Anda ingin menghubungi kami untuk mempelajari Kebijakan
                  ini lebih lanjut atau menanyakan masalah apa pun yang
                  berkaitan dengan hak perorangan dan Informasi pribadi Anda,
                  Anda dapat mengirim email ke rzxyss@gmail.com.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
