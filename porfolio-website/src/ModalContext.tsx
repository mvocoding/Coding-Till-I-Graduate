import { createContext, ReactNode, useContext, useState } from "react";

interface ModalContextProps {
    currentModal: string | null;
    params: Record<string, any> | null;
    openModal: (value: string) => void;
    closeModal: () => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [params, setParams] = useState<Record<string, any> | null>(null);
    const [currentModal, setCurrentModal] = useState<string | null>('aboutme');

    const openModal = (value: string, params: Record<string, any> = {}) => {
        setCurrentModal(value);
        setParams(params);
    }

    const closeModal = () => {
        setCurrentModal(null);
    }

    return (
        <ModalContext.Provider value={{ currentModal, params, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = (): ModalContextProps => useContext(ModalContext);