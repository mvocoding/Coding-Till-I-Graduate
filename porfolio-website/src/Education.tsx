import Modal from "./Modal";
import { VerticalProgressBar } from "./VerticalProgressBar";
import { educationDetails } from "./data";



export default function Education() {
   
    return (
        <Modal className="flex flex-col mx-auto w-full">
            <Modal.Header></Modal.Header>
            <Modal.Body>
                <VerticalProgressBar items={educationDetails}></VerticalProgressBar>
            </Modal.Body>
        </Modal>

    )
}