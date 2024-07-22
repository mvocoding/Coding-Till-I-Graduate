import { useEffect, useRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import { TabItem } from "./model";


interface TabButtonProps {
    title: string;
    isActive: boolean;
    onClick: () => void;
}
const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onClick }) => (
    <button className={twMerge('btn-primary !p-2',
        isActive && 'active'
    )} onClick={onClick}>{title}
    </button>
)

interface TabContentProps {
    content: React.ReactNode;
    isActive: boolean;
}

const TabContent: React.FC<TabContentProps> = ({ content, isActive }) => {
    return (
        <div 
            className={twMerge('absolute w-full top-0 p-5 transition-all duration-300 space-y-2 leading-6 text-sm h-full',
                isActive ? ' left-0 visible ' : ' left-[1000px] invisible '
            )}>{content}</div>
    )
}

interface Props {
    tabsList: TabItem[];
    className?: string;
}
export const Tab: React.FC<Props> = ({ tabsList, className }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={twMerge(`grid grid-rows-[auto_1fr] h-full `,
            className
        )}>
            <div className={`grid [grid-template-columns:repeat(auto-fit,minmax(150px,1fr))] [grid-auto-rows:1fr]  
                    *:border-b-0 *:
                `}>
                {tabsList.map((tab, index) => (
                    <TabButton key={index} title={tab.title} isActive={index == activeTab} onClick={() => setActiveTab(index)}></TabButton>
                ))}
            </div>
            <div className={`h-full bg-black/40 ring-8 ring-black/5 border border-zinc-700/30 p-6 overflow-x-hidden overflow-y-scroll
            relative`}>
                {tabsList.map((tab, index) => (
                    <TabContent key={index} content={tab.content} isActive={index == activeTab}></TabContent>
                ))}
            </div>
        </div>
    )
}

export default Tab;