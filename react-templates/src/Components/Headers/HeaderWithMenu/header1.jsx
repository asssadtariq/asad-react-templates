/**
 * Header component with menu for mobile view
 *  */

import { GiHamburgerMenu } from "react-icons/gi";

const Header1 = () => {
    return (
        <div className="bg-slate-100 h-48 grid grid-cols-3 px-16">
            <div className="flex items-center gap-12">
                <img className="w-32" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?w=740&t=st=1707158121~exp=1707158721~hmac=517fb0247effc65b5839863186ec49dda88e4d998d16511537ea201994b6928d" alt="" id="logo-img" />
                <h1 className="text-black font-semibold text-2xl">LOREM IPSUM</h1>
            </div>
            <ul className="col-span-2 hidden lg:flex w-full gap-4 items-center justify-end">
                <li className="hover:font-semibold cursor-pointer">Home</li>
                <li className="hover:font-semibold cursor-pointer">About Us</li>
                <li className="hover:font-semibold cursor-pointer">Pricing</li>
                <li className="hover:font-semibold cursor-pointer">Our Team</li>
                <li className="hover:font-semibold cursor-pointer">Contact Us</li>
                <li className="">
                    <a href="" className="p-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">Join Us</a>
                </li>
            </ul>
            <button className="col-span-2 flex justify-end items-center lg:hidden">
                <GiHamburgerMenu size={32} />
            </button>
            
        </div>
    )
}

export default Header1;
