import { useState } from "react"
import { twMerge } from "tailwind-merge";


const TabButton = ({title, isActive, onClick}) => (
    <button className={twMerge('btn-primary ', 
        isActive && 'active'
    )} onClick={onClick}>{title}
    </button>
)

const TabContent = ({ content, isActive }) => (
    <div className={twMerge(' [grid-area:stack] transition-all duration-300',
        isActive ? 'translate-y-0' : 'translate-y-[1000px]'
    )} dangerouslySetInnerHTML={{ __html: content }}></div>
)

export default function Tab({ tabsList }) {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="grid grid-rows-[auto_1fr] h-full overflow-hidden">
            <div className={`grid grid-cols-3
                    *:border-b-0 *:
                `}>
                {tabsList.map((tab, index) => (
                    <TabButton key={tab.id} title={tab.title} isActive={index == activeTab} onClick={() => setActiveTab(index)}></TabButton>
                ))}
            </div>
            <div className={` bg-black/40 ring-8 ring-black/5 border border-zinc-700/30 p-6 
            grid [grid-template-areas:'stack']`}>
                {tabsList.map((tab, index) => (
                    <TabContent key={tab.id} content={tab.content} isActive={index == activeTab}></TabContent>
                ))}
            </div>
        </div>
    )
}