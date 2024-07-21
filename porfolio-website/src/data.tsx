import AboutMe from "./AboutMe";
import { CodePreview } from "./CodePreview";
import Education from "./Education";
import Experience from "./Experience";
import { LiveProjects } from "./LiveProjects";
import { ModalItem, ProgressItem, ProjectItem } from "./model";
import MyCV from "./MyCV";
import { Project } from "./Project";
import { ProjectDetail } from "./ProjectDetail";

export const modalsList: Record<string, ModalItem> = {
    'aboutme': {
        name: 'aboutme',
        shortcut: 'Home',
        show: true,
        text: 'About Me',
        img: 'public/images/start-icon.png',
        component: <AboutMe />
    },
    'mycv': {
        name: 'mycv',
        shortcut: 'My CV',
        text: 'My CV',
        show: true,
        img: 'public/images/cv.png',
        component: <MyCV />
    },
    'experience': {
        name: 'experience',
        shortcut: 'Experience',
        show: true,
        text: 'Experience',
        img: 'public/images/about-icon.png',
        component: <Experience />
    },
    'education': {
        name: 'education',
        shortcut: 'Education',
        show: true,
        text: 'Education',
        img: 'public/images/education.png',
        component: <Education />
    },
    'sideprojects': {
        name: 'sideprojects',
        shortcut: 'Side Projects',
        show: true,
        text: 'Side Projects',
        img: 'public/images/projects-icon.png',
        component: <Project />
    },
    'liveprojects': {
        name: 'liveprojects',
        shortcut: 'Daily Coding',
        show: true,
        text: 'Daily Coding',
        img: 'public/images/folder-icon.png',
        component: <LiveProjects /> 
    },
    'codepreview': {
        name: 'codepreview',
        show: false,
        text: 'codepreview',
        img: 'public/images/projects-icon.png',
        component: <CodePreview />
    },
    'projectdetail': {
        name: 'projectdetail',
        show: false,
        text: 'projectdetail',
        img: 'public/images/projects-icon.png',
        component: <ProjectDetail />
    },
};

export const personalDetails: Record<string, string> = {
    fullname: 'Minh Quoc Vo',
    title: 'Web Developer',
    avatar: 'images/avatar.png',
    aboutme: `Hi, my name is Max Vo, currently residing in Adelaide, South Australia. I have a strong passion for web development technologies and specialize in software development frameworks such as React, ASP .NET Core.
    Originally from Vietnam, I have accumulated over 3 years of experience as a Software Developer. Since arriving in Australia, I am eager to resume my career in software development. I have completed my Computer Science degree and am set to finish my Master's degree in November 2025.
    I am actively seeking an internship where I can apply my previous experience and current learning to contribute to impactful projects. You can explore my ongoing projects and daily coding activities to get a sense of my work and commitment.
    `,
    hobbies: `I love hiking and exploring nature, it helps me stay active and feel refreshed. 
    I also enjoy learning about new technologies and trying out new tools and frameworks.
    Coding challenges and hackathons are fun for me because they improve my problem-solving skills and keep me involved in the coding community. 
    Additionally, I like reading tech blogs to keep up with the latest trends and best practices.
    `,
    subtitle: 'Software Engineer / Full Stack Developer -.NET, Javascript, React',
    location: 'Adelaide, South Australia',
    github: 'https://github.com/mvocoding',
    linkedin: 'https://www.linkedin.com/in/max-vo/',
    icodethis: 'https://icodethis.com/maxvo_dev'
}

export const projectList: ProjectItem[] = [
    {
        name: 'Restore - E-Commerce Store with .NET, React, and Redux',
        time: 'Adelaide - Australia',
        shortDesc: 'Led a four-person team in developing a fully operational E-commerce website using .NET Core, Entity Framework, React, and Redux as part of my Master of IT program in Adelaide.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Enhanced understanding of .NET Core, Entity Framework, React, and Redux.',
            description: `As part of my Master of IT program in Adelaide, I led a four-person team in developing a fully operational E-commerce website using .NET Core, Entity Framework, React, and Redux. 
            
            This project enhanced my understanding of these technologies and allowed me to refine my skills in configuring development environments, creating APIs with .NET WebAPI, and managing application state using Redux.
            `,
            images: ['public/images/restore.png'],
            git: 'https://github.com/MaxvoDev/Restore-Build-an-E-commerce-Store-with-Dotnet-React-Redux'
        },
        tags: [{ text: 'HTML' }, { text: 'CSS' }, { text: 'TAILWIND' }]
    },
    {
        name: 'Text to Video using AI Voice with GUI',
        time: 'Adelaide - Australia',
        shortDesc: 'Developed a Python application aimed at seamlessly transforming textual input into captivating videos with integrated subtitles using Python, FFMPEG, Tkinter, and text-to-speech.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Demonstrated proficiency in video and audio manipulation using Python and FFMPEG.',
            description: `I developed a Python application aimed at seamlessly transforming textual input into captivating videos with integrated subtitles. Leveraging robust libraries including MoviePy and PyDub for video and audio manipulation, this application offers a user-friendly experience through a Tkinter-based graphical interface. Key features of this project include:
            •   Utilizing an API endpoint to convert textual input into speech.
            •   Skillfully embedding the synthesized speech as subtitles onto a chosen background video.
            •   Offering a straightforward and intuitive graphical interface, ensuring ease of use for all users.
            `,
            images: ['public/images/text-to-video.png'],
            git: 'https://github.com/MaxvoDev/Python---Text-to-Video-using-AI-Voice-with-GUI'
        },
        tags: [{ text: 'HTML' }, { text: 'CSS' }, { text: 'TAILWIND' }]
    },
    {
        name: 'Agecare Shift Sniper',
        time: 'Adelaide - Australia',
        shortDesc: 'Created a Python program to help healthcare workers grab shifts more easily from a specific website using Python, BeautifulSoup, requests, and threading.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Simplified shift scheduling process for healthcare workers using Python automation.',
            description: `I created a Python program to help healthcare workers grab shifts more easily from a specific website. It uses Python and different tools like BeautifulSoup, requests, and threading to find, sort, and understand shift information on the site.
            •   Shift Sniping: Automatically catches shifts that fit certain criteria, like how far they are from home, how long they last, and which days they're on.
            •   Telegram Integration: Sends messages through Telegram to keep users updated on the program's status and any shifts it catches.
            •   Easy Settings: Lets users adjust settings like how far they're willing to travel, how often the program checks for shifts, and areas they don't want to work in.
            •   Saving Data: Keeps track of shift details, past shift lists, and user settings in simple files, so everything stays the same each time the program runs.
            `,
            images: ['public/images/agecare.png'],
            git: 'https://github.com/MaxvoDev/BOT-Python-AgeCare-Shift-Sniper'
        },
        tags: [{ text: 'HTML' }, { text: 'CSS' }, { text: 'TAILWIND' }]
    },
    {
        name: 'Visa Application Assistance Bot',
        time: 'Adelaide - Australia',
        shortDesc: 'Developed an automated bot to streamline and optimize the visa application process using Python, Selenium, and AWS Lambda.',
        fullDesc: {
            role: 'Software Engineer',
            achievement: '- Streamlined and optimized the visa application process using web automation and cloud-based deployment.',
            description: `•   Developed an automated bot to streamline and optimize the visa application process, utilizing Python, Selenium, and AWS Lambda, demonstrating proficiency in web automation and cloud-based deployment.
            •   Implemented advanced features, including CAPTCHA solving and real-time notifications via Twilio and Telegram, enhancing user experience and application success rates.
            •   Engineered the bot to efficiently handle and process user data, ensuring accuracy and reliability in application submissions, and showcasing strong skills in data handling and user privacy considerations.
            `,
            images: ['public/images/visa.png'],
            git: ''
        },
        tags: [{ text: 'HTML' }, { text: 'CSS' }, { text: 'TAILWIND' }]
    }
];

export const experiences: ProgressItem[] = [
    {
        title: 'Junior Web Developer',
        time: 'Viet Nam, Sep 2018 – Nov 2019',
        subtitle: 'DXC Technology',
        fullDesc: `• Collaborated closely with cross-functional teams to translate UI/UX designs into functional front-end code, maintaining code
        quality and adherence to design standards. Translated UI / UX designs wireframes from Figma into functional front-end code.
        • Engineered fully responsive, user-friendly web applications using tools such as JavaScript frameworks for ReactJS, AngularJS.
        • Constructed various Angular Libraries for the development team to use in different projects.`,
        image: 'images/dxc.png',
        tags: [{ text: 'HTML' }, { text: 'CSS' }, { text: 'TAILWIND' }]
    },
    {
        title: 'Web Developer',
        time: 'Viet Nam, Jan 2020 – May 2022',
        subtitle: 'Starfish Software Company Limited',
        fullDesc: `• Worked collaboratively with a team of 10 developers in the design and development of the front-end aspects of an online
        crime reporting website with future support for multitenancy.
        • Integrating front-end components for audit logs functionality to monitor user actions, ensuring transparency and
        accountability in report processing.
        • Working closely with a multidisciplinary team to create a fully mobile-responsive front-end, enabling seamless access for
        public users to report crimes anonymously and upload media.
        • Implementing front-end functionalities for permissions management and report statistics, providing administrators and
        stakeholders with comprehensive insights and functionality.
        • Optimized the old codebase, resulting in a 20% increase in website speed.`,
        image: 'images/starfish.png',
        tags: [{ text: 'HTML' }, { text: 'CSS' }, { text: 'TAILWIND' }]
    },
    // {
    //     title: 'Freelance Work & Travel',
    //     time: 'Adelaide - Australia, Oct 2022 - Present',
    //     subtitle: 'Freelancer',
    //     fullDesc: `• Joined freelancer platforms and worked remotely as a developer during my working holiday in Australia.
    //     • Specialized in creating bots, web applications, and occasional smart contracts in Solidity.
    //     • Enjoyed the flexibility of remote work, balancing professional commitments with exploration and experiences in Australia.`,
    //     image: 'images/upwork.png',
    //     tags: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'Angular', 'SiteCore']
    // }
]


export const educationDetails: ProgressItem[] = [
    {
        title: 'Bachelor of Software Engineering',
        time: 'Ho Chi Minh City, Vietnam, Sep 2013 – Jun 2017',
        subtitle: 'VNUHCM - University of Science',
        fullDesc: `• Completed a comprehensive program in Software Engineering, gaining strong theoretical and practical knowledge.
        • Developed a solid foundation in programming languages such as Java, C++, and Python.
        • Participated in various software development projects, working both individually and as part of a team.
        • Conducted research on software development methodologies and best practices.
        • Graduated with a Bachelor's degree in Software Engineering.`,
        image: 'images/khtn.png'
    },
    {
        title: 'Software Engineering Courses',
        time: 'Online, May 2022 – Aug 2022',
        subtitle: 'Coursera',
        fullDesc: `• Completed numerous courses in Software Engineering, expanding knowledge in various domains.
        • Learned advanced programming techniques, software design principles, and project management skills.
        • Engaged in practical projects and assignments to apply theoretical knowledge.
        • Gained certifications in key areas of software engineering and development.`,
        image: 'images/coursera.png'
    },
    {
        title: 'Master of Information Technology',
        time: 'Adelaide, Australia, Jan 2024 – Present',
        subtitle: 'Torrens University Australia',
        fullDesc: `• Pursuing advanced studies in Computer Software Engineering, focusing on cutting-edge technologies and methodologies.
        • Engaging in in-depth coursework and hands-on projects to enhance software development skills.
        • Collaborating with peers and faculty on research initiatives and practical applications.
        • Gaining expertise in software design, development, and implementation.`,
        image: 'images/torrens.png'
    },
];
