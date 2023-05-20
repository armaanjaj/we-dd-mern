import React, { useState } from "react";
import styled from "styled-components";

const DivButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    // box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(209, 213, 219, 1);
    border-radius: 0.25rem;
    // background-color: rgba(0, 0, 0, 0.6);
    color: black;
    padding: 1rem 1.25rem;
    transition: 0.15s;
    cursor: pointer;

    &:hover {
        transform: scale(105%);
        font-weight: bold;
    }  
`;

export default function Index() {
    const user = "John";

    return (
        <div className="flex flex-col justify-start gap-10 items-start py-16 px-10">
            <div className="text-4xl font-extrabold">Welcome {user}</div>
            <div className="w-full h-full flex flex-col justify-start gap-3 items-start transition-[0.5s]">
                    <DivButton>
                        <span>Manage Drivers</span>
                    </DivButton>
                    <DivButton>
                        <span>Manage Admin</span>
                    </DivButton>
                    <DivButton>
                        <span>Manage Vehicle</span>
                    </DivButton>
                    <DivButton>
                        <span>Service Requests</span>
                    </DivButton>
            </div>
        </div>
    );
}
