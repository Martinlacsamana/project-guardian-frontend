"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { TentTree } from 'lucide-react'



const Navbar = () => {

    return (
        <div className="navbar sticky top-0 z-50 bg-white px-4 py-2 ">
            {/* Martin */}
            <div className="flex-1 space-x-1 items-center">
                <TentTree color="#465bc3" size={18}/>
                <Link href="/" className="text-md font-semibold text-gray-600">
                    Project Guardian
                </Link>
            </div>

            {/* Background, Blogs, Links */}
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-gray-500 space-x-4">
                    
                    <button className="btn btn-sm btn-outline text-blue-600 font-normal border-blue-600 hover:bg-blue-50">Contact Sales</button>
                    <button className="btn btn-sm btn-outline text-blue-600 font-normal  border-blue-600 hover:bg-blue-50">Sign In</button>
                    <button className="btn btn-sm bg-blue-600 text-white font-normal  hover:bg-blue-700">Sign Up for Free</button>
                </ul>
            </div>

            
        </div>

    )

}

export default Navbar