import React from 'react'
import {
  MdHistory,
  MdPeople
} from 'react-icons/md'

export default function BeritaPopular() {
  return (
    <>
      <div className="p-5 hover:scale-105 hover:bg-black/10 rounded-lg duration-500">
        <h1 className="font-Poppins font-normal text-lg">Lorem ipsum dolor sit amet consectetur. Pulvinar viverra dictumst eleifend sed suspendisse quis. Habitasse sit ornare sed neque.</h1>
        <div className="flex flex-row items-center text-black/60 mt-2">
          <MdHistory className="w-5 h-5" />
          <h1 className="font-Poppins font-light text-sm">Berapa Hari Yang Lalu?</h1>
        </div>
      </div>
    </>
  )
}
