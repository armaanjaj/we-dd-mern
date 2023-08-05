import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import PinDropTwoToneIcon from "@mui/icons-material/PinDropTwoTone";

export default function ContactUsBanner() {
    return (
        <div className="flex flex-col justify-start items-start gap-10 h-full pt-32 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem] text-white bg-gradient-to-t from-[#002d72] to-[#e64c1b]">
            <div className="flex flex-col justify-center items-start gap-5">
                <h1 className="uppercase font-bold">Visit Team We-DD</h1>
                <p>
                At We-DD, we are passionate about revolutionizing transportation and providing our clients with the best designated driver and taxi services. We believe that a safe and enjoyable journey is not just a necessity but a right for everyone. With this vision in mind, we have crafted a private, customer-centric shuttle service that caters to a variety of needs, ensuring you reach your destination with comfort and convenience.
                </p>
            </div>
            <hr />
            <div className="flex flex-row justify-evenly items-start w-full">
                <div className="flex flex-row justify-between items-start gap-5">
                    <div className="flex flex-col justify-start items-center rounded-full border-solid border-2 p-5">
                        <PhoneIcon />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h2 className="uppercase font-semibold">
                                Toll Free
                            </h2>
                            <p>+1-(123)-456-7890</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h2 className="uppercase font-semibold">
                                Landline
                            </h2>
                            <p>+1-(123)-456-7890</p>
                        </div>
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h2 className="uppercase font-semibold">
                                Email
                            </h2>
                            <p>wedd.service@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-start gap-5">
                    <div className="flex flex-col justify-start items-center rounded-full border-solid border-2 p-5">
                        <PinDropTwoToneIcon />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-5">
                        <div className="flex flex-col justify-center items-start gap-5">
                            <h2 className="uppercase font-semibold">
                                Address
                            </h2>
                            <p>146 Cramond Pl SE #146, Calgary, AB T3M 1C3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
