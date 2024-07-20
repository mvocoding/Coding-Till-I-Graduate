import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Modal from "./Modal";

export default function Education() {
    const [animation, setAnimation] = useState(false);

    setTimeout(() => {
        setAnimation(true);
    }, 2000);

    return (

        <Modal>
            <Modal.Header></Modal.Header>
            <Modal.Body>
                <div className={twMerge(`bg-black/40 p-10 flex flex-col items-center text-base transition-all duration-300 `,
                    animation ? 'active translate-y-0 *:opacity-100 before:*:scale-100 *:[box-shadow:inset_4px_0_0_0_#22C55E] before:p-[--padding]' : 'translate-y-[1000px]'
                )}>
                    <div className={`[--padding:10px]
                flex items-start gap-x-5 text-sm
                relative pl-10 pb-10  [box-shadow:inset_0_0_0_0_transparent]   delay-300 duration-[1000ms] transition-all h-42  

                before:duration-300 before:delay-500 opacity-0
                before:absolute before:text-center before:font-semibold before:content-[''] before:size-6 before:rounded-full before:scale-0
                before:bg-green-500 before:inset-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all
                `}>
                            <img src="https://media.licdn.com/dms/image/C560BAQF4noJt0xibPg/company-logo_200_200/0/1630647641935/dxc_technology_vietnam_logo?e=1729123200&v=beta&t=WN6n1qFLz2ohBSYxJANt7fK4g4BfHKYxewPKTlm3aRs" alt=""
                                className="rounded-full object-cover object-top w-12" />
                            
                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-lg font-semibold">Frontend Developer</h3>
                                <p className=" ">Adelaide, SA</p>
                            </div>
                            <p>DXC Technology</p>
                            <div className="text-sm mt-2 space-y-1 ">
                                <p>Designed and built feature-rich websites in alignment with client requirements.</p>
                                <p>Designed and built feature-rich websites in alignment with client requirements.</p>
                                <p>Designed and built feature-rich websites in alignment with client requirements.</p>
                                <p>Designed and built feature-rich websites in alignment with client requirements.</p>
                                <p>Designed and built feature-rich websites in alignment with client requirements.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}