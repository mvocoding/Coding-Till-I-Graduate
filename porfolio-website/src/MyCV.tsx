import Modal from "./Modal";
import { useModal } from "./ModalContext";

export default function MyCV() {
    const { openModal } = useModal();

    return (
        <Modal className="mx-auto sm:max-w-[85%]">
            <Modal.Header></Modal.Header>
            <Modal.Body className="text-base shadow-md rounded-lg font-thin p-5 bg-black/40 ring-8 ring-black/5 border border-zinc-700/30 space-y-3">
                <p className="text-base font-semibold mb-4">Thank you for considering my CV. With over three years of experience in Web Development, I have developed a strong foundation and practical skills. After a brief break, I am now pursuing a Master’s in IT in Adelaide, SA to further enhance my knowledge and expertise.</p>
                <p className="mb-4">I am actively seeking an internship where I can apply my previous experience and current learning to contribute to impactful projects. You can explore my ongoing projects and daily coding activities to get a sense of my work and commitment.</p>
                <p className="mb-4">Please click the link below to download my resume</p>
                <div className="flex *:flex-1 justify-center gap-2">
                    <a href="Resume.pdf" download className="btn-primary">Download My Resume</a>
                    <button onClick={() => openModal('sideprojects')} className="btn-primary">See My Work</button>
                    <button onClick={() => openModal('liveprojects')} className="btn-primary">Daily Coding Journey</button>
                </div>
            </Modal.Body>
        </Modal>
    )
}