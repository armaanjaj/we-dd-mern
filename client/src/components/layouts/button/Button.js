import React from "react";

function Button({ type = null, name = null, text, color, background }) {
    if (type === "submit") {
        return (
            <input
                className="py-[0.5rem] px-4 rounded w-full hover:cursor-pointer"
                style={{ backgroundColor: background, color: color}}
                type="submit"
                name={name}
                value={text}
            />
        );
    }
    return (
        <div
            className="py-[0.5rem] px-4 rounded"
            style={{ backgroundColor: background, color: color }}
        >
            {text}
        </div>
    );
}

export default Button;
