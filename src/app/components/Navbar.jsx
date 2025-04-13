"use client"
import Link from 'next/link';
import React, {useState} from 'react';
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';
import Image from "next/image";

const navLinks = [
    {
        title: "Home",
        path: "#home",
    },
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }

]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#1E2129] opacity-100">
            <div className="flex flex-wrap items-center justify-between  mx-auto px-4 py-3">
                <Link href={"#home"} className=" text-lg md:text-3xl text-white font-semibold">
                 <Image src="/images/logo.png" alt="hero image" width={32} height={32} />
                </Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? <button onClick = {() => setNavbarOpen(true)} className=" flex items-center px-3 py-2  border-slate-200 text-slate-200 hover:text-[#E02E2E] "><Bars3Icon className="h-7 w-7"/></button> : <button onClick = {() => setNavbarOpen(false)} className=" flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-[#E02E2E]"><XMarkIcon className="h-7 w-7"/></button>                       
                    }

                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className ="flex p-4 md:p-0 md:flex-row md:space-x-8">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar;