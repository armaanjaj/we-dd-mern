import React, { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Content from "../../../components/user/admin/Content";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Sidebar from "../../../components/layouts/sidebar/Sidebar";

export default function Index() {
    const [currentTab, setcurrentTab] = useState("tab1");

    const handleNavClick = (content) => {
        setcurrentTab(content);
    };

    const userId = 101010101;

    return (
        <div className="flex flex-col justify-start items-center gap-0 text-black smallMobile:h-full mobile:h-full tablet:h-screen laptop:h-screen desktop:h-screen">
            <div className="flex smallMobile:flex-col mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row justify-between items-center w-full smallMobile:h-1/5 mobile:h-1/5 tablet:h-full laptop:h-full desktop:h-full">
                <Sidebar
                    tabs={[
                        {
                            title: "Manage",
                            tab: "tab1",
                            icon: <ManageAccountsIcon />,
                            type: "",
                            link: false,
                        },
                        {
                            title: "Settings",
                            tab: "tab2",
                            icon: <SettingsIcon />,
                            type: "",
                            link: false,
                        },
                        {
                            title: "My account",
                            tab: "tab3",
                            icon: <AccountCircleTwoToneIcon />,
                            type: "",
                            link: `/user/${userId}/account`,
                        },
                        {
                            title: "Logout",
                            tab: "tab4",
                            icon: <LogoutIcon />,
                            type: "logout",
                            link: false,
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
