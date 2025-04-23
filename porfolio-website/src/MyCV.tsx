import Modal from "./Modal";

export default function MyCV() {
    return (
        <Modal>
            <Modal.Header className="flex gap-3"></Modal.Header>
            <Modal.Body className="flex justify-center md:items-center bg-black/40 ring-8 ring-black/5 border border-zinc-700/30">
                <div>
                    <video className="w-full max-h-[22rem] object-cover object-center" controls poster="/thumbnail.png">
                        <source src="/resume-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </Modal.Body>
        </Modal>
    )
}