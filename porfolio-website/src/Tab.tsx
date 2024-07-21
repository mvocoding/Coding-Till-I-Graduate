import { useState } from "react"
import { twMerge } from "tailwind-merge";
import { TabItem } from "./model";


interface TabButtonProps{
    title: string;
    isActive: boolean;
    onClick: () => void;
}
const TabButton: React.FC<TabButtonProps> = ({title, isActive, onClick}) => (
    <button className={twMerge('btn-primary !p-2', 
        isActive && 'active'
    )} onClick={onClick}>{title}
    </button>
)

interface TabContentProps{
    content: React.ReactNode;
    isActive: boolean;
}

const TabContent: React.FC<TabContentProps> = ({ content, isActive }) => (
    <div className={twMerge(' [grid-area:stack] transition-all duration-300 space-y-2 leading-6 text-sm',
        isActive ? 'translate-y-0' : 'translate-y-[1000px]'
    )}>{content}</div>
)

interface Props{
    tabsList: TabItem[];
}
export const Tab: React.FC<Props> = ({ tabsList }) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="grid grid-rows-[auto_1fr] h-full overflow-hidden">
            <div className={`grid grid-cols-3
                    *:border-b-0 *:
                `}>
                {tabsList.map((tab, index) => (
                    <TabButton key={index} title={tab.title} isActive={index == activeTab} onClick={() => setActiveTab(index)}></TabButton>
                ))}
            </div>
            <div className={` bg-black/40 ring-8 ring-black/5 border border-zinc-700/30 p-6 
            grid [grid-template-areas:'stack']`}>
                {tabsList.map((tab, index) => (
                    <TabContent key={index} content={tab.content} isActive={index == activeTab}></TabContent>
                ))}
            </div>
        </div>
    )
}

export default Tab;