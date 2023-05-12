import React, { useState } from "react";
import Tabs from "../../components/app/pages/user_account/Tabs";
import ProfilePicture from "../../components/app/pages/user_account/ProfilePicture";
import profilePictureUrl from "../../images/Home.jpg";
import Content from "../../components/app/pages/user_account/Content";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
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
            <div className="grid smallMobile:grid-cols-1 mobile:grid-cols-1 tablet:grid-cols-4 laptop:grid-cols-4 desktop:grid-cols-4 smallMobile:grid-rows-4 mobile:grid-rows-4 tablet:grid-rows-1 laptop:grid-rows-1 desktop:grid-rows-1 gap-0 text-black h-screen">
                <div className="row-span-1 flex flex-col justify-start items-start w-full gap-5 py-5 smallMobile:px-0 mobile:px-0 tablet:px-2 laptop:px-2 desktop:px-2 bg-white text-black">
                    <div className="px-4 flex smallMobile:flex-row mobile:flex-row tablet:flex-col laptop:flex-col desktop:flex-col justify-between items-center w-full">
                        <Link
                            to="/"
                            className="text-[#e64c1b] flex flex-row smallMobile:justify-start mobile:justify-start tablet:justify-center laptop:justify-center desktop:justify-center items-center smallMobile:text-[0.5rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[2rem] desktop:text-[2rem] w-full cursor-pointer no-underline font-extrabold"
                        >
                            We-DD
                        </Link>
                        <div className="flex flex-row justify-center items-center gap-0 smallMobile:py-0 mobile:py-0 tablet:py-5 laptop:py-5 desktop:py-5">
                            <ProfilePicture
                                imageUrl={profilePictureUrl}
                                // onImageChange={handleImageUpload}
                            />
                        </div>
                    </div>
                    <div className="scrollbar-container smallMobile:text-xs mobile:text-xs tablet:text-base laptop:text-base desktop:text-base flex smallMobile:flex-row mobile:flex-row tablet:flex-col laptop:flex-col desktop:flex-col justify-start items-start w-full gap-3 px-3 smallMobile:py-0 mobile:py-0 tablet:py-1 laptop:py-1 desktop:py-1 smallMobile:overflow-y-hidden mobile:overflow-y-hidden tablet:overflow-y-scroll laptop:overflow-y-scroll desktop:overflow-y-scroll smallMobile:overflow-x-scroll mobile:overflow-x-scroll tablet:overflow-x-hidden laptop:overflow-x-hidden desktop:overflow-x-hidden smallMobile:shadow-none mobile:shadow-none tablet:shadow-[inset_0_-10px_10px_rgba(230,230,230,1)] laptop:shadow-[inset_0_-10px_10px_rgba(230,230,230,1)] desktop:shadow-[inset_0_-10px_10px_rgba(230,230,230,1)] rounded">
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
                <div className="col-span-3 row-span-3 px-10 py-5 overflow-x-hidden overflow-y-auto">
                    <div className="smallMobile:w-full mobile:w-full tablet:w-2/3 laptop:w-2/3 desktop:w-2/3">
                        <Content tab={currentTab} />
                    </div>
                </div>
            </div>
        </>
    );
}
