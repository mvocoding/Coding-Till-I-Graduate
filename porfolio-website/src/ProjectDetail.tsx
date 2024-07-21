import Modal from "./Modal";
import { useModal } from "./ModalContext";
import { ProjectItem } from "./model";

interface Props {
    className?: string;
}

export const ProjectDetail: React.FC<Props> = () => {
    const { params } = useModal();
    const project: ProjectItem = params!.project;

    return (
        <Modal>
            <Modal.Header>
                <h2 className="text-center text-xl text-[#0f0]">{project.name}</h2>
            </Modal.Header>
            <Modal.Body className="text-sm p-5 bg-black/40 ring-8 ring-black/5 border border-zinc-700/30 space-y-3">
                <div className="hover:cursor-pointer">
                    <p className="whitespace-pre-line leading-6 ">{project.fullDesc.description}</p>
                </div>
                <img
                    className="w-full object-cover object-top "
                    src={project.fullDesc.images[0]} alt="image" />
            </Modal.Body>
        </Modal>
    )
}