import Modal from "./Modal";
import Tab from "./Tab";

const tabsList = [
    {
        id: 1,
        title: 'About Me',
        content: `<p>
        Hi, my name is Max Vo, currently residing in Adelaide, South Australia. I have a strong passion for web development technologies and specialize in software development frameworks such as React, ASP .NET Core. Originally from Vietnam, I have accumulated over 3 years of experience as a Software Developer. Since arriving in Australia, I am eager to resume my career in software development. I have completed my Computer Science degree and am set to finish my Master's degree in November 2025.
    </p>`,
    },
    {
        id: 2,
        title: 'Tech Stack',
        content: ``,
    },
    {
        id: 3,
        title: 'Hobbies',
        content: `<p>
          Hi, my name is Max Vo, currently residing in Adelaide, South Australia. I have a strong passion for web development technologies and specialize in software development frameworks such as React, ASP .NET Core. Originally from Vietnam, I have accumulated over 3 years of experience as a Software Developer. Since arriving in Australia, I am eager to resume my career in software development. I have completed my Computer Science degree and am set to finish my Master's degree in November 2025.
      </p>`,
    },

];


export default function AboutMe() {
    return (
        <Modal>
            <Modal.Header className="flex gap-3"></Modal.Header>
            <Modal.Body>
                <Tab tabsList={tabsList}></Tab>
            </Modal.Body>
        </Modal>
    )
}