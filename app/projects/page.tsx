import Image from 'next/image'

export default function Projects() {
  const projs = [
                  {
                    'img': '/alt.png',
                    'title': 'Personal Website',
                    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio velit provident nobis, animi porro optio aspernatur amet temporibus non.',
                    'tags': ['Next.JS', 'TailwindCSS', 'Typescript'],
                  },
                  {
                    'img': '/alt.png',
                    'title': 'Ultima Insights',
                    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio velit provident nobis, animi porro optio aspernatur amet temporibus non.',
                    'tags': ['Next.JS', 'TailwindCSS', 'Typescript', 'Javascript', 'API'],
                  },
                  {
                    'img': '/alt.png',
                    'title': 'clDice Research',
                    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio velit provident nobis, animi porro optio aspernatur amet temporibus non.',
                    'tags': ['Python', 'PyTorch', 'Pandas'],
                  },
                  {
                    'img': '/alt.png',
                    'title': 'Mentaro',
                    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio velit provident nobis, animi porro optio aspernatur amet temporibus non.',
                    'tags': ['React.JS', 'Python', 'PostgreSQL', 'Flask'],
                  },
                  {
                    'img': '/alt.png',
                    'title': 'Usability Study',
                    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio velit provident nobis, animi porro optio aspernatur amet temporibus non.',
                    'tags': ['UI/UX Principles', 'UI/UX Design'],
                  },
                  {
                    'img': '/alt.png',
                    'title': 'Fake News Detector Research',
                    'desc': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odio velit provident nobis, animi porro optio aspernatur amet temporibus non.',
                    'tags': ['Python', 'sklearn', 'Pandas'],
                  }
                ]

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
              <Image
                className='border-px rounded-3xl'
                src={project['img']}
                width={0}
                height={0}
                style={{ width: '100%', height: '400px' }}
                alt="Picture of the project"
              />
              <div className='flex flex-row space-x-2 pt-4'>
                {
                  project['tags'].map((tag, index) => (
                    <div className='border rounded-3xl p-2 text-tag' key={index}>{tag}</div>
                  ))
                }
              </div>
              <div className='text-projecttitle font-medium'>{project['title']}</div>
              <div className='text-body'>{project['desc']}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
