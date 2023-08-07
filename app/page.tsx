import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-row p-24">
        <div className="flex flex-col flex-1 pt-24">
            <div className="font-sans text-name font-bold">
                John Xie
            </div>
            <div className="text-title font-bold">
                Computer Science and Business at the University of Michigan — Ann Arbor
            </div>
            <div className="text-body mt-8 font-extralight">
                I am a passionate learner who hopes to leverage technologies in order to achieve impact on large scales. I&apos;ve had the privilege of building a variety software ranging from data analysis for a F500 company to app development for a fast-growing startup.
            </div>
            <div className="text-body mt-8 font-extralight">
                My main focus these days is exploring new sides of Computer Science ranging from general software, system design, data analysis, app development, and much much more. Most recently, I&apos;ve worked on <Link href="https://github.com/j0hnxie/Personal-Website" rel="noopener noreferrer" target="_blank" className='font-bold'>this personal website</Link> to explore the depths of web development. Come check out the <Link href="/projects" className='font-bold'>rest of my projects here</Link>
           </div>
            <div className="text-body mt-8 font-extralight">
                When I&apos;m not at the computer, I&apos;m usually playing volleyball, trying out all kinds of foods, or enjoying new movies.
            </div>
        </div>
        <div className="flex flex-col flex-1 pt-24">
            <div className="font-sans text-pagetitle">
                Timeline Under Construction
            </div>
            {/* <div className="font-sans text-name">
                Timeline
            </div>
            <div className="font-sans text-name">
                Timeline
            </div>
            <div className="font-sans text-name">
                Timeline
            </div>
            <div className="font-sans text-name">
                Timeline
            </div>
            <div className="font-sans text-name">
                Timeline
            </div>
            <div className="font-sans text-name">
                Timeline
            </div>
            <div className="font-sans text-name">
                Timeline
            </div> */}
        </div>
    </div>
  )
}
