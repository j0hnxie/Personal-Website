"use client";

import { AiFillGithub, AiOutlineMail, AiFillLinkedin, AiOutlineClose } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'; 


export default function MobileMenu({setMenuOpen}) {
  const pathname = usePathname();

  const handleClose = () => {
    setMenuOpen(false);
  }

  return (
    <div className="flex flex-col p-10 items-center justify-between bg-navy-blue bg-opacity-100 w-full h-1/2 fixed z-60 border">
        <div className="TitleIcon flex-col w-full">
            <Link onClick={handleClose} className="flex flex-col items-center" href="/">
                <div className='text-body self-center font-bold'>
                    J.X
                </div>
            </Link>
            <div className='mt-4 w-full place-self-center'>
                <hr/>
            </div>
        </div>
        <div className="MenuItems flex flex-col space-y-2">
            <Link onClick={handleClose} href="/" className={pathname === "/" ? "border font-medium p-2 rounded-3xl self-center" : "self-center hover:text-hover-blue"}>
                Home
            </Link>
            <Link onClick={handleClose} href="/projects" className={pathname.startsWith("/projects") ? "border font-medium p-2 rounded-3xl self-center" : "self-center hover:text-hover-blue"}>
                Projects
            </Link>
            <Link onClick={handleClose} href="/personal" className={pathname.startsWith("/personal") ? "border font-medium p-2 rounded-3xl self-center" : "self-center hover:text-hover-blue"}>
                Personal
            </Link>
            <Link onClick={handleClose} href="https://drive.google.com/file/d/11Mmoi9mN_icN4pvAMhr3dOtq5eRnEnlv/view?usp=share_link" className="self-center hover:text-hover-blue">
                Resume
            </Link>
        </div>
        <div className="Icons flex flex-row justify-center space-x-4">
            <Link href="https://github.com/j0hnxie">
            <AiFillGithub size={30}/>
            </Link>
            <Link onClick={handleClose} href="mailto:johnxie@umich.edu">
            <AiOutlineMail size={30}/>
            </Link>
            <Link onClick={handleClose} href="https://www.linkedin.com/in/john-xie-7437a9203/">
            <AiFillLinkedin size={30}/>
            </Link>
            <div onClick={handleClose}>
            <AiOutlineClose size={30}/>
            </div>
        </div>
    </div>
  )
}
