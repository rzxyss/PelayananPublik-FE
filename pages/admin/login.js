import axios from "axios";
import Link from "next/link";
import Router from "next/router";
import React, { use, useState } from "react";
import Swal from "sweetalert2";
import Randomstring from "randomstring";

export default function Login({username, password}) {
  const [inputUsername, setUsername] = useState(username);
  const [inputPassword, setPassword] = useState(password);
  console.log(inputUsername)
  // let token = Randomstring.generate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
  //       username: inputUsername,
  //       password: inputPassword,
  //     });
  //     sessionStorage.setItem("token", token);
  //     setTimeout(() => {
  //       Router.push("/admin");
  //     }, 2100);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-20 w-auto"
              src="/image/logo.png"
              alt="Tikomdik Ceria"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-black/80">
              Admin Login
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  value={inputUsername}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#112883] focus:outline-none focus:ring-[#112883] sm:text-sm"
                  placeholder="Username"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  value={inputPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#112883] focus:outline-none focus:ring-[#112883] sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#112883] py-2 px-4 text-sm font-medium text-white hover:bg-[#112883] focus:outline-none focus:ring-2 focus:ring-[#112883] focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}


export async function getServerSideProps({req, res}){
  const responsive = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    username: username,
    password: password,
  });

  return{
    props: {
      username: req.body.username,
      password: req.body.password
    }
  }
}