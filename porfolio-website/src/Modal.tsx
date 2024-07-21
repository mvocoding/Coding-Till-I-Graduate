import { twMerge } from "tailwind-merge";
import { ReactNode, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useModal } from "./ModalContext";
import { modalsList, personalDetails } from "./data";
import { FcPrevious } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Loading } from "./Loading";

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
    const { closeModal, params, goback } = useModal();
    const [isMounted, setIsMounted] = useState(false);

    setTimeout(() => {
        setIsMounted(true);
    }, 500);

    return (
        <>
            <Loading className={!isMounted ? ' fixed ' : 'hidden'}></Loading>
            <div className={twMerge(`[grid-area:modal] z-[1000] *:transition-all *:duration-300
             duration-500 transition-all grid grid-rows-[auto_1fr] text-base
            bg-black/50 backdrop-blur-md border border-white/20 ring-8 ring-black/5 text-zinc-300 rounded-lg  px-5 pt-10 pb-5 sm:p-10  shadow-lg w-full`,
                className,
                isMounted ? 'h-[90vh] visible' : 'h-0 invisible'
            )}>
                {params?.submodal && (<button onClick={goback}
                    className={`flex items-center absolute left-1 top-2 text-sm duration-100 transition-all hover:text-white`}>
                    <FcPrevious className="text-2xl relative -left-0 transition-all duration-300" />
                    Go Back
                </button>)}

                <button onClick={closeModal}
                    className="flex items-center absolute right-1 top-2 text-2xl duration-100 transition-all  hover:-rotate-90 hover:text-white hover:scale-110">
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
        <div className={twMerge(`flex justify-center items-center gap-5 sm:gap-10 mb-5`, className)}>
            {
                children ? children : (
                    <>
                        <img src={personalDetails.avatar} alt="Avatar" className="size-[100px] rounded-full max-md:hidden " />
                        <div className="space-y-1 flex-1">
                            <div className="w-full flex justify-between  font-medium text-xl tracking-wider">
                                <h1>{ personalDetails.fullname}</h1>
                                <h1>{modalsList[currentModal!].text}</h1>
                            </div>
                            <p className="flex items-center ">
                                {personalDetails.subtitle}
                            </p>

                            <p className="flex items-center font-thin text-zinc-400">
                                <span className="material-symbols-outlined material-fill-1">location_on</span>
                                {personalDetails.location}
                            </p>
                            <div className={`mt-2 flex items-center gap-3 
                        first:before:*:translate-x-full
                        last:before:*:-translate-x-full
                        hover:before:*:translate-x-0
                        focus-visible:before:*:translate-x-0 
                        space-x-1
                    `}>
                                <button type="button" onClick={() => window.open(personalDetails.linkedin, '_blank')} className="max-sm:px-4 gap-x-2 btn-primary "><FaLinkedin className="text-xl"/>
                                    LinkedIn</button>
                                <button type="button" onClick={() => window.open(personalDetails.github, '_blank')} className="max-sm:px-4 gap-x-2 btn-primary "><FaGithub className="text-xl"/>
                                    Github</button>
                                <button type="button" onClick={() => window.open(personalDetails.icodethis, '_blank')} className="max-sm:hidden btn-primary ">
                                    <img className="w-20 py-1" src="images/icodethis.svg" alt="ICodeThis" />
                                </button>
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