import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/layouts/button/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

function NavBar({ isLoginIn }) {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [accountMenu, setAccountMenu] = useState(false);

    return (
        // use w-[95vw] left-[2vw] top-[2vh] rounded-[5px] -> for floating navbar
        // use w-full -> for typicall navbar
        <nav className="w-[95vw] left-[2vw] top-[2vh] rounded-md fixed smallMobile:h-[1rem] mobile:h-[3.5rem] tablet:h-[3rem] laptop:h-[4rem] desktop:h-[4rem] bg-[rgb(255_255_255_/_100%)] z-[999] backdrop-blur-[8px] shadow-[0px_1px_30px_0px_#2b2b2bd1]">
            <div className="text-[#e64c1b] flex flex-row justify-between items-center relative h-full smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div>
                    <Link
                        to="/"
                        className="smallMobile:text-[0.5rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[2rem] desktop:text-[2rem] w-full cursor-pointer no-underline font-extrabold"
                    >
                        We-DD
                    </Link>
                </div>

                <div className="flex flex-row justify-evenly items-center relative gap-5 font-bold smallMobile:hidden mobile:hidden tablet:hidden laptop:flex desktop:flex">
                    <div className="flex flex-row justify-evenly items-center relative gap-10">
                        <Link to="/">Home</Link>
                        <Link to="/ride">Ride</Link>
                        <Link to="/about">About</Link>
                        <Link to="/services">Services</Link>
                    </div>
                    <div className="border-x-[#bfbec1] border-[1px] h-[4.5vh]"></div>
                    <div className="flex flex-row justify-between items-center gap-5">
                        {isLoginIn ? (
                            <>
                                <button
                                    onClick={() => setAccountMenu(!accountMenu)}
                                    className="hover:cursor-pointer"
                                >
                                    {accountMenu ? (
                                        <CloseIcon className="scale-[120%]" />
                                    ) : (
                                        <AccountCircleTwoToneIcon className="scale-[120%]" />
                                    )}
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/auth/login">Log in</Link>
                                <Link to="/auth/signup">
                                    <Button
                                        background={"#e64c1b"}
                                        color={"#ffffff"}
                                        text={"Sign up"}
                                    />
                                </Link>
                            </>
                        )}
                    </div>
                    {accountMenu && (
                        <div className="absolute bg-[#002d72] rounded-[5px] text-white flex flex-col justify-center items-center smallMobile:top-[7vh] mobile:top-[8vh] tablet:top-[9vh] laptop:top-[9vh] desktop:top-[9vh] left-0 w-[100%] h-fit shadow-[0_8px_10px_rgba(0,0,0,0.2)]">
                            <Link
                                to={"/accounts"}
                                className="p-4 text-[1rem] w-[95%] transition-[1s] rounded-[10px] my-1 hover:bg-[#081f41]"
                            >
                                <div className="flex gap-5">
                                    <div className="flex flex-col justify-start items-center">
                                        <AccountCircleTwoToneIcon />
                                    </div>
                                    <div className="flex flex-col justify-start items-start gap-1">
                                        <span>My Account</span>
                                        <span className="text-[0.75rem]">
                                            armaan.jaj@gmail.com
                                        </span>
                                    </div>
                                </div>
                            </Link>
                            <Link
                                to={"/logout"}
                                className="p-4 text-[1rem] w-[95%] transition-[1s] rounded-[10px] my-1 hover:bg-[#081f41]"
                            >
                                Log out
                            </Link>
                        </div>
                    )}
                </div>
                {/* Hamburger Menu code */}
                <div className="mobile-navbar-links flex-col justify-start items-start no-underline cursor-pointer smallMobile:flex mobile:flex tablet:flex laptop:hidden desktop:hidden">
                    <div className="flex flex-row justify-between items-center gap-5">
                        <div>
                            {!isLoginIn && (
                                <Link to={"/auth/login"}>
                                    <Button
                                        background={"#e64c1b"}
                                        color={"#ffffff"}
                                        text={"Log in"}
                                    />
                                </Link>
                            )}
                        </div>
                        <div
                            onClick={() => {
                                setMobileMenu(!mobileMenu);
                            }}
                        >
                            {mobileMenu ? <CloseIcon /> : <DehazeIcon />}
                        </div>
                    </div>
                    {mobileMenu && (
                        <div className="absolute bg-[#002d72] rounded-[5px] text-white flex flex-col justify-center items-center smallMobile:top-[7vh] mobile:top-[8vh] tablet:top-[10.5vh] laptop:top-[10.5vh] desktop:top-[10.5vh] left-0 w-[100%] tablet:h-[98vh] shadow-[0_8px_10px_rgba(0,0,0,0.2)]">
                            <Link
                                to={"/"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                Home
                            </Link>
                            <Link
                                to={"/ride"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                Ride
                            </Link>
                            <Link
                                to={"/about"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                About
                            </Link>
                            <Link
                                to={"/services"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                Services
                            </Link>
                            {isLoginIn ? (
                                <>
                                    <Link
                                        to={"/logout"}
                                        className="p-4 text-[1rem] w-[90%]"
                                    >
                                        Log out
                                    </Link>
                                    <Link
                                        to={"/accounts"}
                                        className="p-4 text-[1rem] w-[90%]"
                                    >
                                        <div className="flex gap-5">
                                            <div className="flex flex-col justify-start items-center">
                                                <AccountCircleTwoToneIcon />
                                            </div>
                                            <div className="flex flex-col justify-start items-start gap-1">
                                                <span>My Account</span>
                                                <span className="text-[0.75rem]">
                                                    armaan.jaj@gmail.com
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to={"/auth/signup"}
                                        className="p-4 text-[1rem] w-[90%]"
                                    >
                                        Sign up
                                    </Link>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
