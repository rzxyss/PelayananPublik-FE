import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {
	BsGridFill,
	BsNewspaper
} from 'react-icons/bs'

export default function Sidebar() {
	const router = useRouter()
	return (
		<div className='w-2/12 min-h-screen border-l-2 border'>
			<div className='flex flex-col'>
				<div className='flex justify-center py-2'>
					<Image src='/image/logo.png' width={150} height={0} className='hidden lg:block' />
					<Image src='/image/logo2.png' width={500} height={0} className='block lg:hidden' />
				</div>
				<ul>
					<li className={`${router.pathname == '/admin' ? 'text-[#112883]' : ''} w-full h-auto hover:text-[#112883] p-3`}>
						<Link href={'/admin'} className='flex gap-1 justify-center lg:justify-start	'>
							<BsGridFill className='w-6 h-6' />
							<h1 className='hidden lg:block font-BebasNeue text-xl'>dashboard</h1>
						</Link>
					</li>
					<li className={`${router.pathname == '/admin/berita' ? 'text-[#112883]' : ''} ${router.pathname == '/admin/berita/tambah-berita' ? 'text-[#112883]' : ''} w-full h-auto hover:text-[#112883] p-3`}>
						<Link href={'/admin/berita'} className='flex gap-1 justify-center lg:justify-start'>
							<BsNewspaper className='w-6 h-6' />
							<h1 className='hidden lg:block font-BebasNeue text-xl'>Berita</h1>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

