import AboutMe from "./AboutMe";
import CodePreview from "./CodePreview";
import Education from "./Education";
import { LiveProjects } from "./LiveProjects";
import { ModalItem } from "./model";
import MyCV from "./MyCV";

export const modalsList: Record<string, ModalItem> = {
    'aboutme': {
        name: 'aboutme',
        text: 'About Me',
        img: 'public/images/start-icon.png',
        component: <AboutMe />
    },
    'mycv': {
        name: 'mycv',
        text: 'My CV',
        img: 'public/images/cv.png',
        component: <MyCV />
    },
    'experience': {
        name: 'experience',
        text: 'Experience',
        img: 'public/images/about-icon.png',
        component: <Education />
    },
    'education': {
        name: 'education',
        text: 'Education',
        img: 'public/images/education.png',
        component: <Education />
    },
    'sideprojects': {
        name: 'sideprojects',
        text: 'Side Projects',
        img: 'public/images/projects-icon.png',
        component: <CodePreview />
    },
    'liveprojects': {
        name: 'liveprojects',
        text: 'Live Projects',
        img: 'public/images/folder-icon.png',
        component: <LiveProjects />
    }
};
