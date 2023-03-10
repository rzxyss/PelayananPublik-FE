import Image from "next/image";
import { useEffect, useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdHistory, MdEdit } from "react-icons/md";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import Router, { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Berita() {
  const router = useRouter();
  const {page} = router.query
  const [berita, setBerita] = useState([]);
  const [limit, setLimit] = useState(6);
  const [search, setSearch] = useState('')
  const [pages, setPages] = useState(0)
  const convert = parseInt(page) || 0

  const getBerita = async () => {
    const results = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/berita?page=${page || 0}&search_query=${search}&limit=${limit}`
    );
    setBerita(results.data.results);
    setPages(results.data.totalPage);
  };

  const verifyToken = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        accessToken: sessionStorage.getItem("accessToken"),
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Silahkan Login Terlebih Dahulu!",
          showConfirmButton: false,
          timer: 2000,
          backdrop: `
          rgba(40,44,52, 0.99)
      `,
        });
        setTimeout(() => {
          Router.push("/admin/login");
        }, 2100);
      }
    }
  };

  useEffect(() => {
    getBerita();
    verifyToken();
  }, [limit, page, search]);

  const logoutHandle = async () => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/signout`, {
        accessToken: Cookies.get('accessToken'),
      });
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Anda Telah Berhasil Logout",
        showConfirmButton: false,
        timer: 2000,
      });
      setTimeout(() => {
        sessionStorage.clear();
        Router.push("/admin/login");
      }, 2100);
    } catch (error) {
      console.log(error);
    }
  };

  const btnDelete = async (beritaId) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda tidak dapat mengembalikan Berita ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/berita/${beritaId}`);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Berhasil!", "Berita berhasil dihapus!", "success").then(
          (confirm) => {
            if (confirm.isConfirmed) {
              location.reload();
            }
          }
        );
      }
    });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-10/12 flex-col">
        <div className="flex flex-row justify-between p-3 items-center shadow-md">
          <h1 className="font-Poppins text-2xl text-[#112883] font-extrabold">
            Berita
          </h1>
          <h1
            className="font-Poppins font-light text-lg text-black cursor-pointer"
            onClick={logoutHandle}
          >
            LogOut
          </h1>
        </div>
        <div className="p-1">
          {/* StartKonten */}
          <div className="p-5">
            <div className="w-full h-auto flex flex-col justify-center">
              <div className="flex flex-row justify-between items-center">
                <Link
                  href={"berita/tambah-berita"}
                  className="flex flex-row items-start gap-1 border-2 border-[#112883] p-3 rounded-lg text-[#112883]"
                >
                  <h1 className="font-Poppins text-xl font-extrabold">
                    Tambah Berita
                  </h1>
                  <AiOutlinePlus className="w-7 h-7" />
                </Link>
                <form className="lg:w-2/12">
                  <div className="relative">
                    <input
                      type="search"
                      className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-black focus:outline-none"
                      placeholder="Cari ..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-[#112883] hover:bg-[#112883]/90 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      <BiSearch className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-5">
                <div className="w-auto">
                  <div className="grid lg:grid-cols-3 gap-5">
                    {berita.map((berita, index) => {
                      return (
                        <div
                          className="hover:bg-black/10 p-3 rounded-lg duration-500"
                          key={index}
                        >
                          <Image
                            alt={berita.judul_berita}
                            src={berita.url}
                            width={100}
                            height={80}
                            layout="responsive"
                            className="rounded-lg"
                          />
                          <div className="px-3 py-2 flex-wrap">
                            <h1 className="font-Poppins font-medium text-lg">
                              {berita.judul_berita}
                            </h1>
                            <h1 className="font-Poppins font-light text-sm">
                              {berita.deskripsi_berita}
                            </h1>
                          </div>
                          <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row items-center text-black/60 mt-2">
                              <MdHistory className="w-5 h-5" />
                              <h1 className="font-Poppins font-light text-sm">
                                {berita.createdAt}
                              </h1>
                            </div>
                            <div className="flex flex-row items-center text-[#112883] gap-5">
                              <Link href={`berita/${berita.id}`}>
                                <MdEdit className="w-5 h-5" />
                              </Link>
                              <AiFillDelete
                                className="w-5 h-5"
                                onClick={() => btnDelete(berita.id)}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full flex justify-center items-center gap-2 mt-10">
                    <button
                      onClick={() => Router.push(`?page=${page - 1}`)}
                      disabled={convert < 1}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Previous
                    </button>
                    <h1>Page {page || 1} of {pages}</h1>
                    <button
                      onClick={() => Router.push(`?page=${convert + 1}`)}
                      disabled={convert === (pages - 1)}
                      className="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* EndKonten */}
        </div>
      </div>
    </div>
  );
}
