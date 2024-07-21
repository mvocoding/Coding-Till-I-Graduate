import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProgressItem } from "./model";
import React from "react";
import { TagList } from "./Tag";

interface Props {
    className?: string;
    items: ProgressItem[];    
}

export const VerticalProgressBar: React.FC<Props> = ({ className, items }) => {
    const [animation, setAnimation] = useState(false);

    setTimeout(() => {
        setAnimation(true);
    }, 500);

    
    return (
        <div className={twMerge(`bg-black/40 p-5 max-sm:gap-y-5 sm:p-10 grid [grid-auto-columns:1fr]  items-center text-base transition-all duration-300 [--circle:#22C55E] [--line:#22C55E]  [--content:'✓']`,
            className,
            animation ? `active translate-y-0 *:opacity-100 sm:before:*:scale-100 sm:*:[box-shadow:inset_4px_0_0_0_var(--line)] sm:before:*:content-[--content]` : ' translate-y-[1000px]'
        )}>
            {items!.map((item, index) => (
                <div key={index} className={`
                    grid grid-cols-[0_1fr] sm:grid-cols-[50px_1fr]
                    gap-x-5 text-sm 
                    relative sm:pl-10 sm:pb-10  [box-shadow:inset_0_0_0_0_transparent]  duration-[1000ms] transition-all 
    
                    before:duration-300 opacity-0 before:flex before:items-center before:justify-center before:text-xl before:text-white
                    before:absolute before:size-8 before:rounded-full before:scale-0 before:bg-[--circle]
                     before:inset-0 before:-translate-x-1/2 before:-translate-y-1/2 before:transition-all ` +
                    (index == items.length - 2 ? ' [--line:#e2e8f0] ' : '') +
                    (index == items.length - 1 ? " [--circle:#e2e8f0] [--content:''] [--line:transparent] " : '')
                }>
                    <img src={item.image} alt="Progress Item"
                        className="rounded-full object-cover object-top w-full" />

                    <div>
                        <div className="flex flex-col sm:flex-row justify-between">
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="">{item.time}</p>
                        </div>
                        <p>{item.subtitle}</p>
                        <div className=" text-sm whitespace-pre-line leading-6 mt-1  ">{item.fullDesc}</div>
                        { item.tags && (<TagList className="mt-3" tagsList={item.tags}></TagList>)}
                    </div>
                </div>

            ))}
        </div>
    )
}