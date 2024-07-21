import { twMerge } from "tailwind-merge";
import { TagItem } from "./model";

interface Props {
    className?: string;
    type?: 'image' | 'text';
    tagsList: TagItem[];
}

export const TagList: React.FC<Props> = ({ className, type = 'text', tagsList }) => {
    return (
        <div className={twMerge(`text-sm
                    flex gap-x-1`,
            className
        )}>
            {type === 'text' ? (
                tagsList.map((tag, index) => (
                    <span className={`border
                    border-white/30
                    py-1
                    px-4
                    transition-all
                    duration-300
                    cursor-pointer`} key={index}>{tag.text}</span>
                ))) :
                (
                    tagsList.map((tag, index) => (
                        <div key={index} className="flex flex-col items-center gap-y-1 font-semibold">
                            <div className={`
                    hover:bg-gray-500/20
                    w-20 flex items-center aspect-square text-center  rounded-full border
                    border-white/30
                    px-4
                    transition-all
                    duration-300
                    cursor-pointer`}>
                                <img src={tag.image} alt="tag image"
                                    className="w-full  object-cover object-center" />
                            </div>
                            <span >{tag.text}</span>
                        </div>
                    ))
                )}

        </div>
    )
}