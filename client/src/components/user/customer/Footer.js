import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
    return (
        // Semantic tag
        <footer className="w-full h-full bg-theme-blue">
            {/* Main/parent body */}
            <div className="text-white flex flex-col justify-center items-start gap-10 relative h-full py-14 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div className="flex flex-col justify-center items-start gap-5">
                    <Link
                        to="/"
                        className="smallMobile:text-[0.5rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[2rem] desktop:text-[2rem] w-fit cursor-pointer no-underline font-extrabold"
                    >
                        We-DD
                    </Link>
                    <p>
                        At We-DD, we are passionate about revolutionizing
                        transportation and providing our clients with the best
                        designated driver and taxi services. We believe that a
                        safe and enjoyable journey is not just a necessity but a
                        right for everyone. With this vision in mind, we have
                        crafted a private, customer-centric shuttle service that
                        caters to a variety of needs, ensuring you reach your
                        destination with comfort and convenience.
                    </p>
                </div>

                {/* Links & form section */}
                <div className="w-full flex flex-row justify-start items-start gap-40 font-bold">
                    <div className="w-full flex justify-between items-start gap-7 smallMobile:flex-col mobile:flex-col tablet:flex-row laptop:flex-row desktop:flex-row">
                        <div className="w-full flex flex-row justify-start items-start gap-28">
                            <div className="flex flex-col justify-center items-start gap-7">
                                <h2 className="text-[1.25rem]">Company</h2>
                                <div className="text-[0.75rem] flex flex-col justify-center items-start gap-3">
                                    <Link id="" to="/about">
                                        About us
                                    </Link>
                                    <Link id="" to="/ride">
                                        Ride
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-start gap-7">
                                <h2 className="text-[1.25rem]">Travel</h2>
                                <div className="text-[0.75rem] flex flex-col justify-center items-start gap-3">
                                    <Link id="" to="/services">
                                        Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Socials */}
                <div className="w-full flex flex-row justify-start items-center gap-10">
                    <FacebookIcon />
                    <TwitterIcon />
                    <YouTubeIcon />
                    <InstagramIcon />
                </div>

                {/* Company name & privay terms */}
                <div className="w-full flex flex-row justify-between items-center text-[0.75rem]">
                    {new Date().getFullYear()} We-DD
                    <div className="flex flex-row justify-between items-center gap-5 flex-nowrap">
                        <Link to="/privacy-and-terms">Terms and Privacy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
