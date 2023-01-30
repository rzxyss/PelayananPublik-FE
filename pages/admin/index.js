import { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { FcStatistics } from "react-icons/fc";
import { BsNewspaper } from "react-icons/bs";
import { HiOutlineSpeakerphone, HiViewBoards } from "react-icons/hi";
import Router from "next/router";
import axios from "axios";
import Swal from "sweetalert2";

export default function Home({ dataAspirasi, dataInformasi }) {
  const [token, setToken] = useState("");
  // const [pengaduan, setPengaduan] = useState([])

  useEffect(() => {
    refreshToken();
    // getPengaduan();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/token`);
      setToken(response.data.accessToken);
    } catch (error) {
      // if (error.response) {
      //   Router.push("/admin/login");
      // }
    }
  };

  console.log(token)

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            // const decoded = jwt_decode(response.data.accessToken);
        }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // const getPengaduan = async () => {
  //   const results = await axiosJWT.post(
  //     `${process.env.NEXT_PUBLIC_API_URL}/pengaduan`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     }
  //   );
  //   setPengaduan(results)
  // }

  // const logoutHandle = async () => {
  //   Swal.fire({
  //     position: "center",
  //     icon: "success",
  //     title: "Anda Telah Berhasil Logout",
  //     showConfirmButton: false,
  //     timer: 2000,
  //   });
  //   setTimeout(() => {
  //     Router.push("/admin/login");
  //   }, 2100);
  //   try {
  //     const res = await axios.post(
  //       `${process.env.NEXT_PUBLIC_API_URL}/logout`,
  //       {
  //         token: sessionStorage.getItem("accessToken"),
  //       }
  //     );
  //     sessionStorage.clear();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-Poppins font-extrabold text-2xl text-[#112883]">
            Dashboard
          </h1>
          {/* <h1
            className="font-Poppins font-light text-lg text-black"
            onClick={logoutHandle}
          >
            LogOut
          </h1> */}
        </div>
        <div className="p-1">
          {/* Kontenna Disini */}
          <div className="w-full flex flex-col py-2 space-y-2 p-2 lg:p-5">
            <div className="grid grid-cols-3 gap-5">
              <div className="aspect-[3/1] bg-[#9933FF] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      4
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Berita
                    </h1>
                  </div>
                  <div>
                    <BsNewspaper className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-[#FF0000] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-2xl font-extrabold text-white">
                      {/* {console.log(pengaduan)} */}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Pengaduan
                    </h1>
                  </div>
                  <div>
                    <HiOutlineSpeakerphone className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-[#FF00FF] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      {dataAspirasi}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Aspirasi
                    </h1>
                  </div>
                  <div>
                    <HiOutlineSpeakerphone className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-[#FF007F] rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      {dataInformasi}
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Pemintaan Informasi
                    </h1>
                  </div>
                  <div>
                    <HiOutlineSpeakerphone className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
              <div className="aspect-[3/1] bg-blue-600 rounded-md p-5">
                <div className="flex justify-between items-center w-full h-full">
                  <div className="flex-col">
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      4
                    </h1>
                    <h1 className="font-Poppins text-xl font-extrabold text-white">
                      Total Program
                    </h1>
                  </div>
                  <div>
                    <HiViewBoards className="w-14 h-14 text-black/50" />
                  </div>
                </div>
                <h1 className="w-full text-center">More Info</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const resAspirasi = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/aspirasi`
  );

  const resInformasi = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/informasi`
  );

  return {
    props: {
      dataAspirasi: resAspirasi.data.totalRows,
      dataInformasi: resInformasi.data.totalRows,
    },
  };
}
