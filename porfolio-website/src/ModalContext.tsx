import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
    currentModal: string | null;
    params: Record<string, any> | null;
    goback: () => void;
    openModal: (value: string, params?: Record<string, any>, submodal?: boolean) => void;
    closeModal: () => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [params, setParams] = useState<Record<string, any> | null>({
        submodal: false
    });
    const [currentModal, setCurrentModal] = useState<string | null>('aboutme');
    const [lastModal, setLastModal] = useState<string | null>(null);

    const openModal = (value: string,  params: Record<string, any> = {}, submodal: boolean = false) => {
        if(submodal)
            setLastModal(currentModal);

        params = {
            ...params,
            submodal: submodal
        }
        setCurrentModal(value);
        setParams(params);
    }

    const goback = () => {
        setCurrentModal(lastModal);
        setParams((prevState) => ({
            ...prevState,
            submodal: false
        }));
    }

    const closeModal = () => {
        setCurrentModal(null);
    }

    return (
        <ModalContext.Provider value={{ currentModal, params, goback, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = (): ModalContextProps => useContext(ModalContext);