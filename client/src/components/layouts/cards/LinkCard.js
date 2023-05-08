import React from "react";
import { Link } from "react-router-dom";

function Card({ head, description, link }) {
    return (
        <div className="flex flex-col justify-center items-center border-[2px] border-solid rounded-[5px] h-[15rem] w-[15rem] px-5 py-2 gap-3 bg-white">
            <h2 className="text-[#e64c1b] text-[1.5rem]">{head}</h2>
            <p className="text-[0.9rem]">{description}</p>
            <Link className="text-blue-500 hover:underline" to={link}>
                Learn more
            </Link>
        </div>
    );
}

export default Card;
