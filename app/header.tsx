"use client";

import { AiFillGithub, AiOutlineMail, AiFillLinkedin } from 'react-icons/ai'
import { usePathname } from 'next/navigation'
import Link from 'next/link'; 

export default function Header() {
  const menuItems = ["Home", "Personal", "Projects", "Resume"]
  const pathname = usePathname();

  return (
    <div className="flex flex-col bg-navy-blue bg-opacity-100 w-full fixed z-30">
      <div className="flex flex-row p-8 justify-between">
        <div>
          <Link href="/">
            Icon
          </Link>
        </div>
        <div className="flex flex-row space-x-8 items-center">
          <div className="flex flex-row space-x-8">
            <Link href="/" className={pathname === "/" ? "border font-medium p-2 rounded-3xl" : "self-center"}>
              Home
            </Link>
            <Link href="/projects" className={pathname.startsWith("/projects") ? "border font-medium p-2 rounded-3xl" : "self-center"}>
              Projects
            </Link>
            <Link href="/personal" className={pathname.startsWith("/personal") ? "border font-medium p-2 rounded-3xl" : "self-center"}>
              Personal
            </Link>
            <Link href="https://docs.google.com/document/d/1yDbPbo1v5p14G_wxspI6co4aPRWvx8NJ/edit" className="self-center">
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
      </div>
      <hr>
      </hr>
    </div>
  )
}
