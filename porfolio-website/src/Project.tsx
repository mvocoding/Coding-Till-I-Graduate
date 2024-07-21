import { projectList } from "./data";
import Modal from "./Modal";
import { useModal } from "./ModalContext";
import { TagList } from "./Tag";

interface Props {
    className?: string;
}

export const Project: React.FC<Props> = () => {
    const { openModal } = useModal();
    return (
        <Modal>
            <Modal.Header className="flex gap-3"></Modal.Header>
            <Modal.Body className="bg-black/40 ring-8 ring-black/5 border border-zinc-700/30">
                {projectList.map((project, index) => (
                    <div key={index}  onClick={() => openModal('projectdetail', { project: project }, true)} className="cursor-pointer text-sm grid grid-cols-[0_1fr] sm:grid-cols-[200px_1fr] gap-5 p-3 hover:bg-sky-900/75">
                        <img
                            className="sm:flex w-full object-cover object-top"
                            src={project.fullDesc.images[0]} alt="image" />
                        <div className="hover:cursor-pointer space-y-2">
                            <p className="text-base text-[#0f0]">{project.name}</p>
                            <p>{project.time}</p>
                            <p>{project.shortDesc}</p>
                            {project.tags && (<TagList tagsList={project.tags}></TagList>)}
                        </div>
                    </div>
                ))}
            </Modal.Body>
        </Modal>
    )
}