'use client';

import { usePathname } from 'next/navigation'
import { projs } from '../project-list'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'

export default function SpecificProject() {
    const pathname = usePathname()
    const [slug, setSlug] = useState("")
    const [proj, setProj] = useState({'title': "PROJECT NOT FOUND"})

    useEffect(() => {
        const pages = pathname.split("/")
        setSlug(pages[pages.length - 1])
    }, [pathname])

    useEffect(() => {
        const found = projs.find((project) => {
            return project['slug'] === slug
        })
        setProj(found ? found : {'title': "PROJECT NOT FOUND"})
    }, [slug])

    return (
    <div className="flex min-h-screen w-full flex-row p-10 sm:p-24">
        <div className='flex flex-col pt-24 w-full'>
            {proj['title'] === "PROJECT NOT FOUND" ? 
            (<div className="text-pagetitle font-bold">PROJECT NOT FOUND</div>) : 
            (<div className='flex flex-col'>
                <div className='text-mobileProject sm:text-pagetitle font-bold mb-8'>{proj['title']}</div>
                <hr/>
                <Image 
                    className='border-px rounded-3xl mt-8'
                    src={proj['img']}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%' }}
                    alt="Picture of the project"
                />
                <div className='flex flex-row space-x-2 pt-4 justify-between'>
                    <div className='flex flex-row flex-wrap justify-start'>
                        {
                            proj['tags'].map((tag, index) => (
                                <div className='border rounded-3xl p-2 text-tag mb-2 mr-2' key={index}>{tag}</div>
                            ))
                        }
                    </div>
                    <div className='flex flex-row space-x-2'>
                        {proj['github'] ? 
                        <Link href={proj['github']} rel="noopener noreferrer" target="_blank">
                            <AiFillGithub size={30} />
                        </Link> : <div/>}
                        {proj['link'] ? 
                        <Link href={proj['link']} rel="noopener noreferrer" target="_blank">
                            <AiOutlineLink size={30} />
                        </Link> : <div/>}
                        {proj['paper'] ? 
                        <Link href={proj['paper']} rel="noopener noreferrer" target="_blank">
                            <HiOutlineNewspaper size={30} />
                        </Link> : <div/>}
                    </div>
                </div>
                <div className='mt-4 mb-2 text-projecttitle'>
                    Overview
                </div>
                <div>
                    {proj['overview']}
                </div>
                <div className='mt-4 mb-2 text-projecttitle'>
                    Role
                </div>
                <div>
                    {proj['role']}
                </div>
                <div className='mt-4 mb-2 text-projecttitle'>
                    My Impact
                </div>
                <div>
                    {proj['my-impact']}
                </div>
            </div>)}
        </div>
    </div>
  )
}
