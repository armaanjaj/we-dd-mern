import React from "react";

function Button({ type = null, name = null, text, color, background }) {
    if (type === "submit") {
        return (
            <div
                className="py-[0.5rem] px-4 rounded-[1rem]"
                style={{ backgroundColor: background, color: color }}
            >
                <input type="submit" name={name} value={text} />
            </div>
        );
    }
    return (
        <div
            className="py-[0.5rem] px-4 rounded-[1rem]"
            style={{ backgroundColor: background, color: color }}
        >
            {text}
        </div>
    );
}

export default Button;
