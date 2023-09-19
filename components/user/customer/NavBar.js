import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const mobileMenuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)){
            setMobileMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return (
        // use w-[95vw] left-[2vw] top-[2vh] rounded-[5px] -> for floating navbar
        // use w-full -> for typicall navbar
        <nav className="w-full fixed smallMobile:h-[1rem] mobile:h-[3.5rem] tablet:h-[3rem] laptop:h-[4rem] desktop:h-[4rem] bg-[rgb(255_255_255_/_100%)] z-[999] backdrop-blur-[8px] shadow-[0px_1px_30px_0px_#2b2b2bd1]">
            <div className="text-theme-orange flex flex-row justify-between items-center relative h-full smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div>
                    <Link
                        href="/"
                        className="smallMobile:text-[0.5rem] mobile:text-[1.25rem] tablet:text-[2rem] laptop:text-[2rem] desktop:text-[2rem] w-full cursor-pointer no-underline font-extrabold"
                    >
                        We-DD
                    </Link>
                </div>

                <div className="flex flex-row justify-evenly items-center relative gap-5 font-bold smallMobile:hidden mobile:hidden tablet:hidden laptop:flex desktop:flex">
                    <div className="flex flex-row justify-evenly items-center relative gap-10">
                        <Link href="/">Home</Link>
                        <Link href="/ride">Ride</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/services">Services</Link>
                    </div>
                </div>
                {/* Hamburger Menu code */}
                <div className="mobile-navbar-links flex-col justify-start items-start no-underline cursor-pointer smallMobile:flex mobile:flex tablet:flex laptop:hidden desktop:hidden">
                    <div className="flex flex-row justify-between items-center gap-5">
                        <div
                            onClick={() => {
                                setMobileMenu(!mobileMenu);
                            }}
                        >
                            {mobileMenu ? <CloseIcon className="scale-[90%]" /> : <DehazeIcon className="scale-[90%]" />}
                        </div>
                    </div>
                    {mobileMenu && (
                        <div ref={mobileMenuRef} className="absolute bg-theme-blue rounded-[5px] text-white flex flex-col justify-center items-center smallMobile:top-[7vh] mobile:top-[8vh] tablet:top-[5vh] laptop:top-[10.5vh] desktop:top-[10.5vh] left-0 w-[100%] tablet:h-[40vh] shadow-[0_8px_10px_rgba(0,0,0,0.2)]">
                            <Link
                                href={"/"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                Home
                            </Link>
                            <Link
                                href={"/ride"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                Ride
                            </Link>
                            <Link
                                href={"/about"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                About
                            </Link>
                            <Link
                                href={"/services"}
                                className="p-4 text-[1rem] border-b-[1px] border-white border-solid w-[90%]"
                            >
                                Services
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
