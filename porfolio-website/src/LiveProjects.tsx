import Modal from "./Modal"
import { useModal } from "./ModalContext"

export const LiveProjects = ({ }) => {
    const { openModal } = useModal();

    return (
        <Modal className="w-[80%]">
            <Modal.Header className="flex gap-3">
                <h2>Live Projects</h2>
            </Modal.Header>
            <Modal.Body className="grid grid-cols-3 gap-3 ">
                <div>
                    <section className="aspect-video relative overflow-hidden">
                        <img src="https://images.pexels.com/photos/9087309/pexels-photo-9087309.jpeg?auto=compress&cs=tinysrgb&w=630&h=375&dpr=1" className="w-full h-full object-cover hover:scale-150 transition-all duration-[10s]" />

                        <button onClick={() => openModal('sideprojects')} type="button" className="rounded-full bg-white/10  py-2 px-5 absolute bottom-3 text-xs right-6 transition-all duration-300 hover:bg-white/50 hover:text-[#1F242E]">Tap to view images</button>
                    </section>

                    <section className="bg-[#1F242E] py-4 px-8">
                        <h2>Haleakala Center</h2>
                        <p className="flex items-center gap-1 text-xs opacity-60">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            Shield Volcano in Hawaii
                        </p>
                    </section>
                </div>

            </Modal.Body>
        </Modal>)
}