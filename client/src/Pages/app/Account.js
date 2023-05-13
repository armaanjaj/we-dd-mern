import React, { useState } from "react";
import Tabs from "../../components/layouts/Tabs/Tabs";
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

export default function Account() {
    const [currentTab, setcurrentTab] = useState("tab1");

    const handleNavClick = (content) => {
        setcurrentTab(content);
    };

    return (
        <>
            <div className="flex flex-col justify-start items-center gap-0 text-black smallMobile:h-full mobile:h-full tablet:h-screen laptop:h-screen desktop:h-screen">
                <div className="smallMobile:px-5 mobile:px-5 tablet:px-10 laptop:px-10 desktop:px-10 py-5 col-span-full h-fit row-span-1 flex flex-row justify-between items-center w-full">
                    <Link to="/">
                        <ArrowBackIcon />
                    </Link>
                    <Link to={"/"} className="">
                        <HomeIcon />
                    </Link>
                </div>
                <div className="flex smallMobile:flex-col mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row justify-between items-center w-full smallMobile:h-1/5 mobile:h-1/5 tablet:h-full laptop:h-full desktop:h-full">
                    <div className="flex flex-col justify-start items-start smallMobile:w-full mobile:w-full tablet:w-1/4 laptop:w-1/4 desktop:w-1/4 gap-5 py-5 smallMobile:px-0 mobile:px-0 tablet:px-2 laptop:px-2 desktop:px-2 bg-white text-black h-full">
                        <div
                            id="accounts-tab-div"
                            className="scrollbar-container smallMobile:text-xs mobile:text-xs tablet:text-base laptop:text-base desktop:text-base flex smallMobile:flex-row mobile:flex-row tablet:flex-col laptop:flex-col desktop:flex-col justify-start items-start w-full h-full gap-3 px-3 smallMobile:py-0 mobile:py-0 tablet:py-1 laptop:py-1 desktop:py-1 smallMobile:overflow-y-hidden mobile:overflow-y-hidden tablet:overflow-y-scroll laptop:overflow-y-scroll desktop:overflow-y-scroll smallMobile:overflow-x-scroll mobile:overflow-x-scroll tablet:overflow-x-hidden laptop:overflow-x-hidden desktop:overflow-x-hidden"
                        >
                            <Tabs
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
                        </div>
                    </div>
                    <div className="flex flex-row justify-start items-start smallMobile:w-full mobile:w-full tablet:w-3/4 laptop:w-3/4 desktop:w-3/4 smallMobile:px-0 mobile:px-0 tablet:px-10 laptop:px-10 desktop:px-10 py-5 overflow-x-hidden overflow-y-hidden shadow-[inset_0_10px_10px_rgba(230,230,230,1)] smallMobile:rounded-t mobile:rounded-t tablet:rounded-tl laptop:rounded-tl desktop:rounded-tl smallMobile:h-4/5 mobile:h-4/5 tablet:h-full laptop:h-full desktop:h-full">
                        <div className="smallMobile:w-full mobile:w-full tablet:w-2/3 laptop:w-2/3 desktop:w-2/3 h-full">
                            <Content tab={currentTab} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
