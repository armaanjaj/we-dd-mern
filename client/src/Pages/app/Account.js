import React, { useState } from "react";
import Content from "../../components/app/pages/user_account/Content";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PersonIcon from "@mui/icons-material/Person";
import PaymentsIcon from "@mui/icons-material/Payments";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import Sidebar from "../../components/layouts/sidebar/Sidebar";

export default function Account() {
    const [currentTab, setcurrentTab] = useState("tab1");

    const handleNavClick = (content) => {
        setcurrentTab(content);
    };

    return (
        <>
            <div className="flex flex-col justify-start items-center gap-0 text-black smallMobile:h-full mobile:h-full tablet:h-screen laptop:h-screen desktop:h-screen">
                <div className="smallMobile:px-5 mobile:px-5 tablet:px-10 laptop:px-10 desktop:px-10 py-5 col-span-full h-fit row-span-1 flex flex-row justify-between items-center w-full fixed bg-white shadow">
                    <Link to="/">
                        <ArrowBackIcon />
                    </Link>
                    <Link to={"/"} className="">
                        <HomeIcon />
                    </Link>
                </div>
                <div className="flex smallMobile:flex-col mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row justify-between items-center w-full smallMobile:h-1/5 mobile:h-1/5 tablet:h-full laptop:h-full desktop:h-full mt-16">
                    <Sidebar
                        tabs={[
                            {
                                title: "Personal Information",
                                tab: "tab1",
                                icon: <PersonIcon />,
                                type: "",
                            },
                            {
                                title: "Payment Methods",
                                tab: "tab2",
                                icon: <PaymentsIcon />,
                                type: "",
                            },
                            {
                                title: "Security",
                                tab: "tab3",
                                icon: <LockIcon />,
                                type: "",
                            },
                            {
                                title: "Past Trips",
                                tab: "tab4",
                                icon: <AccessTimeFilledIcon />,
                                type: "",
                            },
                            {
                                title: "Settings",
                                tab: "tab5",
                                icon: <SettingsIcon />,
                                type: "",
                            },
                            {
                                title: "Logout",
                                tab: "tab6",
                                icon: <LogoutIcon />,
                                type: "logout",
                            },
                        ]}
                        handler={handleNavClick}
                    />
                    <div className="flex flex-row justify-start items-start smallMobile:w-full mobile:w-full tablet:w-3/4 laptop:w-3/4 desktop:w-3/4 smallMobile:px-0 mobile:px-0 tablet:px-10 laptop:px-10 desktop:px-10 py-0 overflow-x-hidden overflow-y-hidden smallMobile:rounded-t mobile:rounded-t tablet:rounded-tl laptop:rounded-tl desktop:rounded-tl smallMobile:h-4/5 mobile:h-4/5 tablet:h-full laptop:h-full desktop:h-full">
                        <div className="smallMobile:w-full mobile:w-full tablet:w-2/3 laptop:w-2/3 desktop:w-full h-full">
                            <Content tab={currentTab} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
