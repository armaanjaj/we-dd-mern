import React from "react";

export default function CardShadow({children}) {
    return <div className="flex flex-row justify-center items-center w-fit smallMobile:border-none mobile:border-none tablet:border-none laptop:border-solid desktop:border-solid border-[2px] rounded-[5px] bg-[rgb(255_255_255_/_95%)] backdrop-blur-[8px] py-5">
        {children}
    </div>;
}
