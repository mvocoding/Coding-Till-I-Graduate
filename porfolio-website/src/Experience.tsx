import Modal from "./Modal";
import { VerticalProgressBar } from "./VerticalProgressBar";
import { experiences } from "./data";



export default function Experience() {
    return (
        <Modal>
            <Modal.Header></Modal.Header>
            <Modal.Body>
                <VerticalProgressBar items={experiences}></VerticalProgressBar>
            </Modal.Body>
        </Modal>

    )
}