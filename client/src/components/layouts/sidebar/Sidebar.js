import React from "react";
import Tabs from "../tabs/Tabs";

export default function Sidebar({ tabs, handler, logo}) {
    return (
        <div className={`flex flex-col justify-start items-start smallMobile:w-full mobile:w-full tablet:w-1/4 laptop:w-1/4 desktop:w-1/4 gap-5 bg-white text-black h-full border-r-2 ${!logo && 'py-5'} smallMobile:py-5 mobile:py-5 tablet:py-0 laptop:py-0 desktop:py-0 smallMobile:px-2 mobile:px-2 tablet:px-0 laptop:px-0 desktop:px-0`}>
            {logo && <div className="bg-[#e64c1b] text-white text-3xl font-extrabold flex-row justify-center items-center w-full h-1/6 smallMobile:hidden mobile:hidden tablet:flex laptop:flex desktop:flex">
                We-DD
            </div>}
            <div
                id="accounts-tab-div"
                className="scrollbar-container smallMobile:text-xs mobile:text-xs tablet:text-base laptop:text-base desktop:text-base flex smallMobile:flex-row mobile:flex-row tablet:flex-col laptop:flex-col desktop:flex-col justify-start items-start w-full h-full gap-3 px-3 smallMobile:py-0 mobile:py-0 tablet:py-1 laptop:py-1 desktop:py-1 smallMobile:overflow-y-hidden mobile:overflow-y-hidden tablet:overflow-y-scroll laptop:overflow-y-scroll desktop:overflow-y-scroll smallMobile:overflow-x-scroll mobile:overflow-x-scroll tablet:overflow-x-hidden laptop:overflow-x-hidden desktop:overflow-x-hidden smallMobile:px-0 mobile:px-0 tablet:px-2 laptop:px-2 desktop:px-2"
            >
                <Tabs tabs={tabs} handler={handler} />
            </div>
        </div>
    );
}
