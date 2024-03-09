"use client";
import Link from "next/link";
import { useState } from "react";
import { TbMenu2 } from "react-icons/tb";

const Navbar = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <nav className="z-50">
            <button onClick={() => setMenuIsOpen(!menuIsOpen)} aria-label="Open navigation menu" className="text-2xl md:hidden">
                <TbMenu2/>
            </button>
            <ul className={`${menuIsOpen ? "flex" : "hidden"} flex-col transition-colors fixed top-20 right-10 font-medium p-5 bg-[#2b2b32] rounded md:flex md:flex-row gap-5 md:static md:gap-8 md:items-center md:bg-transparent md:p-0 md:rounded-none`}>
                <li className="hover:text-[#07E1FF] hover:scale-110 hover:-rotate-12 transition-transform duration-300">
                    <Link href="#about">About me</Link>
                </li>
                <li className="hover:text-[#07E1FF] hover:scale-110 hover:-rotate-12 transition-transform duration-300">
                    <Link href="#projects">Projects</Link>
                </li>
                <li className="hover:text-[#07E1FF] hover:scale-110 hover:-rotate-12 transition-transform duration-300">
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;