import { twMerge } from "tailwind-merge";
import Loading from "./Loading";
import { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "./ModalContext";
import { modalsList } from "./data";

interface ModalProps {
    className?: string;
    children: ReactNode;
}
interface SubModalProps {
    className?: string;
    children?: ReactNode;
}

const Modal: React.FC<ModalProps> & {
    Header: React.FC<SubModalProps>,
    Body: React.FC<SubModalProps>
} = ({ className, children }) => {
    const { closeModal } = useModal();
    const [isMounted, setIsMounted] = useState(false);

    setTimeout(() => {
        setIsMounted(true);
    }, 500);

    return (
        <>
            <Loading className={!isMounted ? 'flex' : 'hidden'}></Loading>
            <div className={twMerge(`z-[1000] *:transition-all *:duration-300
             duration-500 transition-all grid grid-rows-[auto_1fr]
            bg-black/50 backdrop-blur-md border border-white/20 ring-8 ring-black/5 text-zinc-300 rounded-lg px-10 py-5 pb-10 space-y-3 shadow-lg   relative w-[60%]`,
                className,
                isMounted ? 'h-[90vh] visible' : 'h-0 invisible'
            )}>
                <button onClick={closeModal}
                    className="absolute right-3 top-3 text-2xl duration-100 transition-all  hover:-rotate-90 hover:text-white hover:scale-110">
                    <IoMdClose />
                </button>

                {children}
            </div>
        </>
    )
}

const Header: React.FC<SubModalProps> = ({ className, children }) => {
    const { currentModal } = useModal();

    return (
        <div className={twMerge(`flex items-center gap-5 sm:gap-10`, className)}>
            {
                !children && (
                    <>
                        <img src="https://media.licdn.com/dms/image/D4D03AQHUacwchKIDoQ/profile-displayphoto-shrink_800_800/0/1706355356084?e=1726704000&v=beta&t=vezKKjgZIoap3mCn51ZyBm58vambE8sjjGCwieVP9mw" alt="Avatar" className="transition-all duration-300 hover:scale-110 size-[100px] rounded-full inline-block " />
                        <div className="space-y-2 flex-1">
                            <div className="w-full flex justify-between  font-medium text-xl tracking-wider">
                                <h1>Full Stack Developer</h1>
                                <h1>{modalsList[currentModal!].text}</h1>
                            </div>

                            <p className="flex items-center font-thin text-zinc-400">
                                <span className="material-symbols-outlined material-fill-1">location_on</span>
                                Adelaide, South Australia
                            </p>
                            <div className="mt-2 flex items-center gap-3 
                        first:before:*:translate-x-full
                        last:before:*:-translate-x-full
                        hover:before:*:translate-x-0
                        focus-visible:before:*:translate-x-0 
                    ">
                                <button type="button" className="btn-primary ">LinkedIn</button>
                                <button type="button" className="btn-primary ">Github</button>
                            </div>
                        </div>
                    </>
                )}
        </div>
    )
}

const Body: React.FC<SubModalProps> = ({ className, children }) => (
    <div className={twMerge(`overflow-auto`, className)}>
        {children}
    </div>
)

Modal.Header = Header;
Modal.Body = Body;

export default Modal;   