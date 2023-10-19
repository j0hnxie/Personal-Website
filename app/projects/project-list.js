export const projs = [
  {
    'img': '/formi.png',
    'title': 'Formi',
    'slug': 'formi',
    'desc': 'A mobile application that allows choreographers plan out stunning dance formations and display the formations for their teams to learn',
    'overview': 'I worked on this as part of MECC Consulting Group in a team of 1 project manager and 3 software engineers. This was our client for the Fall 2023 semester. The startup already had a working web application that allowed users to create dance formations and transitions. However, we were tasked with the creation of a mobile application version of this website because dancers often used iPads to practice with rather than laptops.',
    'role': 'I was the most experienced engineer among our team. Thus, I was not only tasked with the most complex technical tasks, but also tasked with leading and mentoring the younger engineers. I debugged and mentored other engineers at team meetings. I also helped other members feel integrated into the team. On the technical side, I was tasked with setting up the authentication of the user and building the initial app from scratch. The features I created were the Dashboard/Home page and the actual Dance page. On this page, I had to create the user customizable stage with different stage dimensions and backgrounds. I also had to create dancers that were positioned in various formations and went through many transitions. Finally, I had to implement the playing function so that users could actually play their choreography with the song in the background to see how their formations would eventually look.',
    'my-impact': 'Ultimately, I along with the team were able to successfully create a mobile version of the web application that is soon to be rolled out to the 1000+ current user base of the online website. I specifically got the project started from scratch and provided a minimum viable product for the other engineers to build off of.',
    'tags': ['Javascript', 'Typescript', 'ReactNative', 'Supabase', 'Node.JS', 'HTML/CSS'],
    'github': 'https://github.com/kishansripada/formiapp'
  },
    {
      'img': '/medihealth.png',
      'title': 'MediHealth',
      'slug': 'medihealth',
      'desc': 'A social media mobile application that connects elderly with their loved ones to help them cherish their time and reminisce on good times', 
      'overview': 'I worked on this as part of MECC Consulting Group in a team of 1 project manager and 4 software engineers. This was our client for the Summer 2023 season. The startup had no current minimum viable product, but had some basic Figma designs and a clear idea for the app. We were tasked with the transformation of an idea and some base designs to a full fledged mobile social media application.',
      'role': 'This was my first project as a more senior engineer in the club among my peers. Therefore, I led the team in organizing additional work sessions, facilitating team bonding, and integrating members into the system of our consulting club. On the technical side, I was tasked with setting up the backend using Firebase. This meant setting up user authentication, the NoSQL database, and the cloud storage service we were using. I did all these things and integrated it with the front-end application that was created by my peers. After setting up a base app, we were tasked with adding additional pages. At this point, I began to help on the front-end too, and I used Flutter to create new pages such as a social network overview page.',
      'my-impact': 'Ultimately, the team and I created the social media application from scratch. At this point, the startup is continuing to pitch this MVP to investors to obtain funding, and it is preparing to launch its beta for testing.',
      'tags': ['Flutter', 'Dart', 'Firebase', 'NoSQL Database', 'Git', 'Figma'],
      'github': 'https://github.com/adviti-mishra/MediHealth'
    },
    {
      'img': '/personal-website.JPG',
      'title': 'Personal Website',
      'slug': 'personal-website',
      'desc': 'An online website that gives an overview of who I am and displays a collection of my proudest work thus far', 
      'overview': 'This was a project I undertook out of personal interest. I know many fellow software engineers also had personal websites, and I wished to also have a central place be the culmination of all my work. This website continues to be a work in progress as I experiment with different features to add.',
      'role': 'This was a project started, supervised, and executed completely by myself. Thus, I was in charge of all aspects of the website. I first had to decide what initial features I desired on the website for a MVP that I was satisfied with releasing. After deciding my initial features, I began to lay out my designs on a Figma. Once I finished base designs, I began to start coding the website with navigation coming first. Following that, I began to flesh out the individual pages such as the home page and projects page. Finally, at this point, I am continuing to work on my personal page and the timeline on my home page.',
      'my-impact': 'Ultimately, this project has allowed me to explore and experiment with many different frameworks and technologies in front-end development. I have learned a lot and it also allows me to have a central place to display all my work.',
      'tags': ['Next.JS', 'TailwindCSS', 'Typescript', 'Figma', 'UI/UX Design'],
      'github': 'https://github.com/j0hnxie/Personal-Website',
      'link': '/',
    },
    {
      'img': '/ultimainsights.png',
      'title': 'Ultima Insights',
      'slug': 'ultima-insights',
      'desc': 'An online web application that briefs users every morning on the most important news articles for stock tickers of their choice',
      'overview': 'I worked on this as part of MECC Consulting Group in a team of 2 project managers and 4 software engineers. This was our client for the Winter 2023 season. The startup had a minimum viable product, but they wanted to go in a completely different direction and scrap the current one. We were tasked with creating the entire frontend based on a template and some Figma designs for their news monitor product entering a new direction. After some work in the first half of the semester, they hired me as an intern for the rest of the semester where I worked as a data analyst intern.',
      'role': 'I first started working on smaller components and modifying the template to fit our needs. I first changed a shopping item into a news article. Then, I worked on creating filters for news articles, such that users could view only their desired articles based on ticker, date, rating, and popularity. After completing the frontend components with filler data, I began to integrate the frontend with the backend. I used Axios API calls to pull news articles in realtime to feed the user the most up-to-date news. After finishing the news monitor product, I began to work on a side product: the digest monitor. This was a page that allowed users to add tickers to a digest for users to receive an email with daily up-to-date information about that ticker. Finally after this product was completed, I began working on data analytics to help user engagement. I analyzed current user engagement through metrics such as open-rate, click-through-rate, and user-specific metrics. ',
      'my-impact': 'Ultimately, we were able to create theirs news monitor product from scratch which they eventually scrapped. However, we were also to create the digest product from scratch with no templates or Figma designs, and can currently be viewed at https://briefing.ultimainsights.ai/. We were able to launch this product to 600+ users. Through my individual work in data analytics, a marketing campaign was successfully launched, which increased user engagement by 15%.',
      'tags': ['Next.JS', 'TailwindCSS', 'Typescript', 'AWS', 'API', 'Python', 'Pandas'],
      'link': 'https://briefing.ultimainsights.ai/',
    },
    {
      'img': '/deeplearning.jpg',
      'title': 'Deep Learning Map Generator',
      'slug': 'map-generator',
      'desc': 'An AI-powered automatic road map generator from satellite images to more efficiently generate more accurate maps especially in third-world countries',
      'overview': 'I worked on this as a research intern at Stony Brook University under Dr. Chao Chen. I was tasked with the project of using a newly discovered cost function called clDice to optimize automatic map creation for 3rd world countries. I worked under a post doctoral researcher. He was my mentor, who I asked questions to if I encountered road blocks, but I undertook the brainstorming, execution, and debugging all by myself.',
      'role': 'I was working on this project individually, so all work was to be done by me. I first brushed up on my deep learning knowledge by taking a few deep learning courses on Coursera, which I obtained certification for. Following that, I began coding. I first laid out the architecture for my convolutional neural network. The architecture I used was the U-Net architecture. After laying out my architecture, I first began testing my code with a dice cost function and cross-entropy cost function. I spent many hours debugging, and after my models worked with base cost functions, I began adapting my model to use the new clDice cost function. I began to train and optimize hyperparameters with the clDice cost function to obtain optimal performance. Finally, I began to work on my presentation.',
      'my-impact': 'Ultimately, I was able to successfully train and optimize my U-Net convolutional neural network with the novel clDice cost function. I was able to improve upon the base cost functions of Dice and Cross-Entropy by 3% and 4% on the Dice Coefficient and Jaccard Index respectively. This made great progress in the field of deep learning, and has great applications into 3rd world countries where new roads are constantly being paved. This will help the world become increasingly connected and help isolated villages gain connections to nearby cities. ',
      'tags': ['Python', 'PyTorch', 'Pandas', 'Computer Vision', 'Neural Networks', 'Git'],
      'github': 'https://github.com/j0hnxie/clDice-Research',
      'paper': 'https://drive.google.com/file/d/1ey9PmD2WCk0mc4XHeJdUEe9Squ9-p2WR/view?usp=sharing',
    },
    {
      'img': '/mentaro.png',
      'title': 'Mentaro Startup',
      'slug': 'mentaro',
      'desc': 'A suite of mobile and online products that address mental health in the workplace through surveys, breathing exercises, and journaling',
      'overview': 'I founded this startup by gathering a group of 6 of the brightest individuals I knew. The inspiration was initially founded when I had heard about the lack of mental health resources in the professional workplace from my working friends. We had to develop the product from scratch, find clients, and sell our product. As the co-founder, I was also in charge of leading the team in collaboration, communication, and conflict resolution.',
      'role': 'I directed the whole process of product development from start to finish. Beginning with the brainstorming, I led the team in brainstorming sessions to eventually come to our ideas of mental health surveys, breathing exercises, and journaling. As we were brainstorming, we already had designers working on Figma designs for the inital pages of the app. Thus, while the brainstorming concluded, we already had some designs ready to go. At that point, I along with 3 other engineers began coding the front-end based on the designs and designing the back-end. As development started, I along with 2 others began market research to begin to understand the needs of the market. On the technical side, I first developed the login and sign up pages on the front-end. After that, I began to work on setting up authentication on the back-end. Following that, I along with another engineer designed and set up the whole database on PostgreSQL. I then set up API endpoints in Golang to eventually integrate with the front-end. After the front-end and back-end had finished being setup, all 4 engineers began to work on integrating the front-end pages with the back-end API endpoints that I had setup. Following the completion of the app, 2 engineers continued developing additional features, while I along with the remaining members began to focus on client acquisition. After we secured our first few clients, we began to focus on creating a mobile version of our website. We used React-Native and converted our React.JS code into React-Native code so that we could have a supplementary mobile application that businesses could use.',
      'my-impact': 'Ultimately, the team was able to successfully create and launch a B2B product to 4 local companies. Overall, across all 4 companies, we were able to improve employee moods by 25%. I was able to specifically setup the entire back-end, connect it with the front-end, and secure clients for the product.',
      'tags': ['React.JS', 'Javascript', 'PostgreSQL', 'Go', 'Node.JS', 'Python', 'Flask'],
      'github': 'https://github.com/j0hnxie/Mentaro-Early-Draft-',
    },
    {
      'img': '/usability.png',
      'title': 'Usability Study',
      'slug': 'usability-study',
      'desc': 'A research study to identify user experience pain points on 3 separate websites and recommend solutions based on UI/UX design principles',
      'overview': 'I worked on this as a research intern at Long Island University under Dr. Qiping Zhang. I actually was very passionate about the issue of usability specifically in the COVID-19 vaccination booking process, as my grandma was at high-risk, but had much difficulty booking the vaccine. Therefore, I reached out to Dr. Zhang, hoping for her to supervise my usability research project. She accepted, and thus, we began to research the usability of 3 COVID-19 vaccination booking websites.',
      'role': 'I led the project with Dr. Zhang’s close supervision. I conducted two usability tests: heuristic evaluation and cognitive walkthrough. I along with Dr. Zhang selected heuristics to be evaluated, and after that I carefully went through each website on my own time to identify all heuristic violations. After recording all the violations, I began the cognitive walkthrough. I first brainstormed 4 personas of possible users. After gaining approval from Dr. Zhang, I began to walkthrough the process of booking vaccines under every website with every persona. I recorded all difficulties encountered. After recording all the data, I began to synthesize my paper and presentation which I eventually presented to the HCII 2021 International Conference.',
      'my-impact': 'Ultimately, I was able to successfully complete the research project. I identified 21 heuristic violations and provided 6 UI/UX design solutions through heuristic evaluation. I also discovered 37 roadblocks at various steps in the booking process across 6 scenarios for 4 personas.',
      'tags': ['UI/UX Principles', 'UI/UX Design'],
      'paper': 'https://drive.google.com/file/d/1b4F-Inxwj_bHB_HGvQ8TsFO4JCpobb02/view',
    },
    {
      'img': '/machinelearning.png',
      'title': 'AI/NLP Fake News Detector',
      'slug': 'fake-news-detector',
      'desc': 'An AI-powered fake news detector using natural language processing to automatically detect fake news in news articles',
      'overview': 'I independently worked on this project as a passion project. I had been hearing in the news a ton about fake news and the widespread prevalence of it. In fact, I had even had my own experiences with fake news through various debate tournaments. This inspired me to undertake this project, where I utilized my strengths in computer science, specifically machine learning and natural language processing to detect fake news.',
      'role': 'I worked on this research project independently and presented my findings at various science fairs. I first scoured the internet to find the best fake news datasets for training my machine learning models. After deciding on the datasets, I began to brainstorm the best features to train my model on. I brainstormed various features including the usage of natural language processing to conduct sentiment analysis. In this process, I piloted a new method of detecting fake news that fed the results of one machine learning model into another as a feature. I first detected the percentage of a title being clickbait, and passed that as a feature to train my fake news machine learning models on. With my features decided, I began to train my model and optimize it. After finishing the optimizations, I began to prepare my presentation and paper of my work.',
      'my-impact': 'Ultimately, I was able to successfully complete the research project. I piloted a novel method of creating pipelines of machine learning models to increase accuracy compared to previous models by 3% for a total accuracy of 90%. ',
      'tags': ['Python', 'Scikit-Learn', 'Pandas', 'Jupyter Notebook', 'Machine Learning', 'Git'],
      'paper': 'https://drive.google.com/file/d/1ACg2iJ0Vx2ODyGZT4J0GefKqNHnjAhlG/view',
    }
  ]