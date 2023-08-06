'use client';

import Image from 'next/image'
import Link from 'next/link'
import { projs } from './project-list'
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { useRouter } from 'next/navigation';

export default function Projects() {
  const router = useRouter()

  return (
    <div className="flex min-h-screen w-full flex-col p-24 pt-48">
      <div className="text-pagetitle font-bold mb-8">
        Projects
      </div>
      <hr/>
      <div className="flex flex-row flex-wrap mt-8">
        {
          projs.map((project, index) => (
            <div
              className="flex flex-col space-y-2 w-1/2 p-4 h-full mb-16"
              key={index}
            >
              <div onClick={() => {
                router.push("/projects/" + project['slug'])
              }}>
              {/* <Link href={"/projects/" + project['slug']}> */}
                <Image
                  className='border-px rounded-3xl'
                  src={project['img']}
                  width={0}
                  height={0}
                  style={{ width: '100%', height: '400px' }}
                  alt="Picture of the project"
                />
                <div className='flex flex-row space-x-2 pt-4 justify-between'>
                  <div className='flex flex-row space-x-2'>
                    {
                      project['tags'].map((tag, index) => (
                        <div className='border rounded-3xl p-2 text-tag' key={index}>{tag}</div>
                      ))
                    }
                  </div>
                  <div className='flex flex-row space-x-2'>
                    {project['github'] ? 
                    <Link href={project['github']} rel="noopener noreferrer" target="_blank">
                      <AiFillGithub size={30} />
                    </Link> : <div/>}
                    {project['link'] ? 
                    <Link href={project['link']} rel="noopener noreferrer" target="_blank">
                      <AiOutlineLink size={30} />
                    </Link> : <div/>}
                    {project['paper'] ? 
                    <Link href={project['paper']} rel="noopener noreferrer" target="_blank">
                      <HiOutlineNewspaper size={30} />
                    </Link> : <div/>}
                  </div>
                </div>
                <div className='text-projecttitle font-medium'>{project['title']}</div>
                <div className='text-body'>{project['desc']}</div>
              </div>
              {/* </Link> */}
            </div>
          ))
        }
      </div>
    </div>
  )
}
