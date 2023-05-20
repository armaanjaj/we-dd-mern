import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tabs({ tabs, handler }) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {tabs.map((item, index) =>
                item.type === "logout" ? (
                    <Link
                        to={"/logout"}
                        key={index}
                        className={`flex flex-row justify-start items-center gap-2 hover:cursor-pointer shadow-md px-4 py-2 w-full border border-gray-300 rounded bg-[#dc2626] text-white`}
                    >
                        {item.icon}
                        {item.title}
                    </Link>
                ) : (
                    <div
                        key={index}
                        className={`
                        ${activeIndex === index && "bg-[#e64c1b] text-white"}
                        flex flex-row justify-start items-center gap-2 hover:cursor-pointer shadow-md px-4 py-2 w-full border border-gray-300 rounded hover:text-white hover:bg-[#e64c1b] transition-[3s]`}
                        onClick={() => {
                            setActiveIndex(index);
                            handler(item.tab);
                        }}
                    >
                        <div className="smallMobile:w-full mobile:w-full tablet:w-fit smallMobile:flex mobile:flex tablet:block flex-row justify-center items-center">{item.icon}</div>
                        <div className="smallMobile:hidden mobile:hidden tablet:block laptop:block desktop:block">{item.title}</div>
                    </div>
                )
            )}
        </>
    );
}
