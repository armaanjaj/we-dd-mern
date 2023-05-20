import React from "react";
import { FormControlLabel, Switch, Typography, Divider } from "@mui/material";

export default function Settings() {
    return (
        <div className="px-10 py-8 rounded flex flex-col justify-start items-start gap-5 w-full">
            <div
                after=""
                className="text-4xl font-extrabold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
            >
                Settings
            </div>
            <div className="flex flex-row justify-between items-start w-full my-4">
                <div className="w-full">Dark mode</div>
                <FormControlLabel control={<Switch size="small" />} label="" />
            </div>
            <div className="flex flex-row justify-between items-start w-full my-4">
                <div className="w-full">Notification preference</div>
                <FormControlLabel control={<Switch size="small" />} label="" />
            </div>
            <div className="flex flex-row justify-between items-start w-full my-4">
                <div className="w-full">Privacy settings</div>
                <FormControlLabel control={<Switch size="small" />} label="" />
            </div>
        </div>
    );
}
