"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TentTree } from 'lucide-react'



const Navbar = () => {

    return (
        <div className="navbar sticky top-0 z-50 bg-[#1C1C1C] bg-opacity-100 shadow-xl px-8 py-2 ">
            {/* Martin */}
            <div className="flex-1 space-x-1 items-center">
                <TentTree color="#465bc3" size={18}/>
                <Link href="/" className="font-semibold text-gray-300 text-md">
                    Project Guardian
                </Link>
            </div>

            {/* Background, Blogs, Links */}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-gray-500 space-x-4">
                    
        
                    <button className="btn btn-sm btn-outline border-blue-700 text-blue-600 font-normal hover:bg-blue-50">Login</button>
                    <button className="btn btn-sm bg-blue-700 text-white font-normal hover:bg-blue-700">Signup</button>
                </ul>
            </div>

            
        </div>

    )

}

export default Navbar