import Modal from "./Modal";
import { useModal } from "./ModalContext";
import { TabItem } from "./model";
import Tab from "./Tab";
import { TagList } from "./Tag";




export default function AboutMe() {
    const { openModal } = useModal();

    const tabsList: TabItem[] = [
        {
            title: 'About Me',
            content:
                <>
                    <p>Hi, my name is Max Vo, currently residing in Adelaide, South Australia. I have a strong passion for web development technologies and specialize in software development frameworks such as React, ASP .NET Core.</p>
                    <p>Originally from Vietnam, I have accumulated over 3 years of experience as a Software Developer. Since arriving in Australia, I am eager to resume my career in software development. I have completed my Computer Science degree and am set to finish my Master's degree in November 2025.</p>
                    <button className="mx-auto btn-primary !w-full sm:w-[50%] mt-5" 
                    onClick={() => openModal('experience')}>Browse My Experience</button>
                </>,
        },
        {
            title: 'Tech Stack',
            content:
                <div className="space-y-5">
                    <TagList className="grid grid-cols-3 sm:grid-cols-4 gap-y-3" type="image" tagsList={[
                        {
                            text: 'HTML',
                            image: 'images/html.svg'
                        },
                        {
                            text: 'CSS',
                            image: 'images/css.svg'
                        },
                        {
                            text: 'TAILWIND',
                            image: 'images/tailwind.svg'
                        },
                        {
                            text: 'JAVASCRIPT',
                            image: 'images/js.svg'
                        },
                        {
                            text: 'REACT',
                            image: 'images/react.svg'
                        },
                        {
                            text: 'ANGULAR',
                            image: 'images/angular.svg'
                        },
                        {
                            text: 'CSHARP',
                            image: 'images/csharp.svg'
                        },
                        {
                            text: 'PYTHON',
                            image: 'images/python.svg'
                        },
                        // {
                        //     text: 'AWS',
                        //     image: 'images/aws.svg'
                        // }
                    ]}></TagList>
                    <button 
                    className="mx-auto btn-primary w-full sm:w-[50%] mt-10" onClick={() => openModal('sideprojects')}>See My Work</button>
                </div>,
        },
        {
            title: 'Hobbies',
            content: <>
                <p>Hi, my name is Max Vo, currently residing in Adelaide, South Australia. I have a strong passion for web development technologies and specialize in software development frameworks such as React, ASP .NET Core. </p>
                <p>Originally from Vietnam, I have accumulated over 3 years of experience as a Software Developer. Since arriving in Australia, I am eager to resume my career in software development. I have completed my Computer Science degree and am set to finish my Master's degree in November 2025.</p>

                <button 
                    className="mx-auto btn-primary w-full sm:w-[50%] mt-10" onClick={() => openModal('liveprojects')}>Daily Coding Journey</button>
            </>
        },
    
    ];

    return (
        <Modal>
            <Modal.Header className="flex gap-3"></Modal.Header>
            <Modal.Body>
                <Tab tabsList={tabsList}></Tab>
            </Modal.Body>
        </Modal>
    )
}