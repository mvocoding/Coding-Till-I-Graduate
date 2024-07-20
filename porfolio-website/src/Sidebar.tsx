import { twMerge } from "tailwind-merge";
import { useModal } from "./ModalContext";
import { modalsList } from "./data";

interface Props {
  className?: string;
}

const Sidebar: React.FC<Props> = ({
  className,
}) => {
  const { openModal } = useModal();

  return (
    <div className={twMerge(className)}>
      <nav className={`
        flex sm:flex-col p-2 items-center w-full rounded-xl gap-3
        text-base  *:flex-col  *:w-[120px]
         before:*:inset-[-100%_-100%_100%_100%] 
        hover:before:*:inset-0

        [&_img]:max-w-[50px]
        `}>

        {
          Object.values(modalsList).map((modal, index) => (
            <button key={index} className={`btn-primary`} onClick={() => openModal(`${modal.name}`)}>
              <img src={modal.img} />
              {modal.text}
            </button>
          ))
        }
      </nav>
    </div>
  )
}

export default Sidebar;