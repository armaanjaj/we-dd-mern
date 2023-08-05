import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailToneIcon from "@mui/icons-material/EmailTwoTone";

export default function ContactUsBanner() {
    return (
        <div className="flex flex-col justify-start items-start gap-10 h-full pt-32 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem] text-white bg-gradient-to-t from-[#002d72] to-[#e64c1b]">
            <div className="flex flex-col justify-center items-start gap-5">
                <h1 className="font-bold">TEAM We-DD</h1>
                <p>
                    At We-DD, we are passionate about revolutionizing
                    transportation and providing our clients with the best
                    designated driver and taxi services. We believe that a safe
                    and enjoyable journey is not just a necessity but a right
                    for everyone. With this vision in mind, we have crafted a
                    private, customer-centric shuttle service that caters to a
                    variety of needs, ensuring you reach your destination with
                    comfort and convenience.
                </p>
            </div>
            <hr />
            <div className="flex flex-row justify-evenly items-start w-full">
                <div className="flex flex-row justify-between items-start gap-5">
                    <a href="Tel:403-201-8223">
                        <div className="flex flex-col justify-start items-center rounded-full border-solid border-2 p-5 hover:bg-white hover:text-black transition duration-300">
                            <PhoneIcon />
                        </div>
                    </a>
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h2 className="uppercase font-semibold">
                                Phone number
                            </h2>
                            <p>
                                <a href="Tel:403-201-8223">+1-(403)-201-8223</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start gap-5">
                    <a href="mailto:wedd.service@gmail.com">
                        <div className="flex flex-col justify-start items-center rounded-full border-solid border-2 p-5 hover:bg-white hover:text-black transition duration-300">
                            <EmailToneIcon />
                        </div>
                    </a>
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h2 className="uppercase font-semibold">Email</h2>
                            <p>
                                <a href="mailto:wedd.service@gmail.com">
                                    wedd.service@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
