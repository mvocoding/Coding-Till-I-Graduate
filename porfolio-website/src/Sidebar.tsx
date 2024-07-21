import { twMerge } from "tailwind-merge";
import { useModal } from "./ModalContext";
import { modalsList } from "./data";

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = ({
  className,
}) => {
  const { openModal, currentModal } = useModal();

  return (
    <div className={twMerge(`flex items-center max-sm:justify-center`, className)}>
      <nav className={`
        flex sm:flex-col  items-center justify-center rounded-xl gap-2
        text-base  
         before:*:inset-[-100%_-100%_100%_100%] 
        hover:before:*:inset-0
        *:w-[50px] sm:*:w-[85px] *:aspect-square
        [&_.active]:border-b-[5px] [&_.active]:border-b-red-500/50
        `}>

        {
          Object.values(modalsList).filter(modal => modal.show).map((modal, index) => (
            <button key={index} className={`whitespace-nowrap btn-primary !p-0 flex-col ${currentModal == modal.name ? 'active' : ''}`} onClick={() => openModal(`${modal.name}`)}>
              <img src={modal.img} className="max-w-[50px] object-cover object-center "/>
              <span className="max-sm:hidden">{modal.shortcut}</span>
            </button>
          ))
        }
      </nav>
    </div>
  )
}

export default Sidebar;