/**
 * Header component with menu for mobile view
 *  */

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header1 = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(prevValue => !prevValue);
    }

    return (
        <div className="bg-white px-16 shadow grid">
            <div className="lg:h-48 md:h-48 h-72 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-2">
                <div className="flex md:flex-row lg:flex-row flex-col items-center gap-12">
                    <img className="w-32" 
                        src="https://i.pinimg.com/564x/9f/93/ae/9f93ae8f39417cd575e735bf5f1b1505.jpg" 
                        alt="" id="logo-img" 
                    />
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
                <div className="lg:col-span-2 flex justify-center md:justify-end lg:justify-end items-center lg:hidden ">
                    <button 
                        className="hover:bg-slate-100 p-2"
                        onClick={handleMenu}
                    >
                        <GiHamburgerMenu size={32} />
                    </button>
                </div>

            </div>
            {
                menu ?             
                <ul className="lg:hidden grid grid-cols-1 gap-4 py-8">
                    <li className="hover:font-semibold cursor-pointer">Home</li>
                    <li className="hover:font-semibold cursor-pointer">About Us</li>
                    <li className="hover:font-semibold cursor-pointer">Pricing</li>
                    <li className="hover:font-semibold cursor-pointer">Our Team</li>
                    <li className="hover:font-semibold cursor-pointer">Contact Us</li>
                    <li className="">
                        <a href="" className="p-3 rounded bg-blue-500 text-white font-semibold hover:bg-blue-600">Join Us</a>
                    </li>
                </ul>
                : null    
            }
        </div>
    )
}

export default Header1;
