import { twMerge } from "tailwind-merge";
import { useTheme } from "./ThemeContext";
import { useState } from "react";

interface Props{
    className?: string;
}

const ThemeSwitcher: React.FC<Props> = ({ className }) => {
    const { changeTheme } = useTheme();
    const [showTheme, setShowTheme] = useState(false);

    return (
        <div className={twMerge(`absolute top-0 right-0 flex `, className)}>
            <button 
            onClick={() => setShowTheme((prev) => !prev)}
            className="mb-1 btn-primary !size-10 !rounded-full  !p-0 text-5xl material-symbols-outlined">
                more_horiz
            </button>
            <ul className={`overflow-hidden transition-all duration-500 *:cursor-pointer
            absolute top-full right-1 *:size-8 *:rounded-full gap-1 flex flex-col ` +
                (showTheme ? 'max-h-[1000px] visible' : 'max-h-0 invisible')
            }>
                <li onClick={() =>  changeTheme("sky") } className="bg-sky-500" aria-label="sky"></li>
                <li onClick={() =>  changeTheme("purple") } className="bg-purple-500" aria-label="purple"></li>
                <li onClick={() =>  changeTheme("yellow") } className="bg-yellow-400" aria-label="yellow"></li>
                <li onClick={() =>  changeTheme("lime") } className="bg-lime-500" aria-label="lime"></li>
                <li onClick={() =>  changeTheme("emerald") } className="bg-emerald-400" aria-label="emerald"></li>
                <li onClick={() =>  changeTheme("blue") } className="bg-blue-500" aria-label="blue"></li>
            </ul>
        </div>
    )
}

export default ThemeSwitcher;