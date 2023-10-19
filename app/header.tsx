"use client";

import { AiFillGithub, AiOutlineMail, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'; 
import MobileMenu from './mobile-menu';

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const [windowChange, setWindowChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuOpen = () => {
    setMenuOpen(true);
  }

  // window.onresize = () => {
  //   setWindowChange(!windowChange)
  //   console.log(window.screen.width)
  // }
  
  useEffect(() => {
    if (window.screen.width < 640) {
      setMobile(true)
    } else {
      setMobile(false)
    }
}, [windowChange])

  return (
    <div className="flex flex-col bg-navy-blue bg-opacity-100 w-full fixed z-30">
    {
        menuOpen ? (
          <div className="flex h-0 justify-center">
            <MobileMenu setMenuOpen={setMenuOpen}/>
          </div>
        ) : (<div/>)
      }
      <div className="flex flex-row p-8 justify-between items-center">
        <div>
            <Link href="/">
              <div className='text-body font-bold' >
                J.X
              </div>
            </Link>
        </div>
        {
          mobile ? (
            <div onClick={handleMenuOpen}>
              <AiOutlineMenu size={30}/>
            </div>
          ) : (
            
          <div className="flex flex-row space-x-8 items-center">
            <div className="flex flex-row space-x-8">
              <Link href="/" className={pathname === "/" ? "border font-medium p-2 rounded-3xl" : "self-center hover:text-hover-blue"}>
                Home
              </Link>
              <Link href="/projects" className={pathname.startsWith("/projects") ? "border font-medium p-2 rounded-3xl" : "self-center hover:text-hover-blue"}>
                Projects
              </Link>
              <Link href="/personal" className={pathname.startsWith("/personal") ? "border font-medium p-2 rounded-3xl" : "self-center hover:text-hover-blue"}>
                Personal
              </Link>
              <Link href="https://drive.google.com/file/d/11Mmoi9mN_icN4pvAMhr3dOtq5eRnEnlv/view?usp=share_link" className="self-center hover:text-hover-blue">
                Resume
              </Link>
            </div>
            <div className="flex flex-row space-x-4">
              <Link href="https://github.com/j0hnxie">
                <AiFillGithub size={30}/>
              </Link>
              <Link href="mailto:johnxie@umich.edu">
                <AiOutlineMail size={30}/>
              </Link>
              <Link href="https://www.linkedin.com/in/john-xie-7437a9203/">
                <AiFillLinkedin size={30}/>
              </Link>
            </div>
          </div>
          )
        }
      </div>
      <hr>
      </hr>
    </div>
  )
}
