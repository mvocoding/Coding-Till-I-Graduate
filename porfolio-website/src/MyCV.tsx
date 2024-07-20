import Modal from "./Modal";

export default function MyCV() {
    return (
        <Modal>
            <Modal.Header></Modal.Header>
            <Modal.Body>
                <iframe src="https://research.google.com/pubs/archive/44678.pdf"
                    className="w-full min-h-[80vh] "></iframe>
            </Modal.Body>
        </Modal>
    )
}