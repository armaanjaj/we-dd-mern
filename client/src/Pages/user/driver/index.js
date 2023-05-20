import React, { useState } from "react";
import StartIcon from '@mui/icons-material/PlayCircleFilledWhite';
import Content from "../../../components/user/driver/Content";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Sidebar from "../../../components/layouts/sidebar/Sidebar";

export default function Index() {
    const [currentTab, setcurrentTab] = useState("tab1");

    const handleNavClick = (content) => {
        setcurrentTab(content);
    };

    return (
        <div className="flex flex-col justify-start items-center gap-0 text-black smallMobile:h-full mobile:h-full tablet:h-screen laptop:h-screen desktop:h-screen">
            <div className="flex smallMobile:flex-col mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row justify-between items-center w-full smallMobile:h-1/5 mobile:h-1/5 tablet:h-full laptop:h-full desktop:h-full">
                <Sidebar
                    tabs={[
                        {
                            title: "Start",
                            tab: "tab1",
                            icon: <StartIcon />,
                            type: "",
                        },
                        {
                            title: "Past Trips",
                            tab: "tab2",
                            icon: <AccessTimeFilledIcon />,
                            type: "",
                        },
                        {
                            title: "Settings",
                            tab: "tab3",
                            icon: <SettingsIcon />,
                            type: "",
                        },
                        {
                            title: "My account",
                            tab: "tab4",
                            icon: <AccountCircleTwoToneIcon />,
                            type: "",
                        },
                        {
                            title: "Logout",
                            tab: "tab5",
                            icon: <LogoutIcon />,
                            type: "logout",
                        },
                    ]}
                    handler={handleNavClick}
                    logo={true}
                />
                <div className="flex flex-row justify-start items-start smallMobile:w-full mobile:w-full tablet:w-3/4 laptop:w-3/4 desktop:w-3/4 smallMobile:px-0 mobile:px-0 tablet:px-10 laptop:px-10 desktop:px-0 py-0 overflow-x-hidden overflow-y-hidden smallMobile:rounded-t mobile:rounded-t tablet:rounded-tl laptop:rounded-tl desktop:rounded-tl smallMobile:h-4/5 mobile:h-4/5 tablet:h-full laptop:h-full desktop:h-full">
                    <div className="smallMobile:w-full mobile:w-full tablet:w-2/3 laptop:w-2/3 desktop:w-full h-full">
                        <Content tab={currentTab} />
                    </div>
                </div>
            </div>
        </div>
    );
}
