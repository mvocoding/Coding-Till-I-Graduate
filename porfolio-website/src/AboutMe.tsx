import { personalDetails } from "./data";
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
                <div className="flex flex-col h-full">
                    <div className="text-sm leading-8 whitespace-pre-line">{personalDetails.aboutme}
                    </div>
                    <div className="mt-5 flex *:flex-1 justify-center gap-2">
                        <a href="Resume.pdf" download className="btn-primary">Download My Resume</a>
                        <button onClick={() => openModal('sideprojects')} className="btn-primary">See My Work</button>
                        <button onClick={() => openModal('liveprojects')} className="btn-primary">Daily Coding Journey</button>
                    </div>
                </div>,
        },
        {
            title: 'Tech Stack',
            content:
                <div className="space-y-5 flex flex-col items-center justify-center">
                    <div>
                        <TagList className="grid grid-cols-3 sm:grid-cols-4 gap-5" type="image" tagsList={[
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
                    </div>
                    <button
                        className=" btn-primary mt-5" onClick={() => openModal('sideprojects')}>See My Work</button>
                </div>,
        },
        {
            title: 'Hobbies',
            content: <div className="flex flex-col h-full">
                <div className="whitespace-pre-line leading-8">{personalDetails.hobbies}
                </div>
                <button
                    className="mt-5 btn-primary" onClick={() => openModal('liveprojects')}>Daily Coding Journey</button>
            </div>
        },

    ];

    return (
        <Modal className="mx-auto sm:max-w-[85%]">
            <Modal.Header className="flex gap-3"></Modal.Header>
            <Modal.Body>
                <Tab tabsList={tabsList}></Tab>
            </Modal.Body>
        </Modal>
    )
}