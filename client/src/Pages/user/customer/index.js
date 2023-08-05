import React, { useEffect, useState } from "react";
import homeImage from "../../../images/Home.jpg";
import NavBar from "../../../components/user/customer/NavBar";
import Footer from "../../../components/user/customer/Footer";
import Card from "../../../components/layouts/cards/LinkCard";
import Button from "../../../components/layouts/button/Button";
import Form from "../../../components/layouts/form/Form";

export default function Index() {
    useEffect(() => {
        document.title = "We-DD | Home";
    }, []);

    return (
        <>
            <NavBar />
            <section
                id="homepage"
                className="overflow-x-hidden flex flex-col gap-10 bg-gray-100"
            >
                <div
                    className="flex flex-row justify-between items-center w-full smallMobile:px-[2rem] mobile:px-[2rem] tablet:px-[3rem] laptop:px-[4rem] desktop:px-[4rem] h-[98vh] bg-no-repeat bg-right bg-cover"
                    style={{ backgroundImage: `url(${homeImage})` }}
                >
                    <div className="flex flex-col justify-center items-center gap-10 w-[50dvw] bg-[rgb(255_255_255_/_60%)] p-5 rounded-[5px] backdrop-blur-[5px] smallMobile:hidden tablet:hidden laptop:hidden desktop:block largeDesktop:block">
                        <h1 className="text-center text-black smallMobile:text-[0.75rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[3rem] desktop:text-[2.5rem] largeDesktop:text-[3.5rem] font-extrabold">
                            We are <br /> Designated Drivers
                        </h1>
                    </div>
                    <div className="w-[50vw] flex flex-row justify-center items-center">
                        {/* Form */}
                        <Form
                            formHead={"Request your ride"}
                            formData={{
                                inputs: [
                                    {
                                        key: "pickup_location",
                                        type: "text",
                                        name: "pickup_location",
                                        placeholder: "Enter pick up location",
                                        // handler: (e) => setEmail(e.target.value),
                                        // error: emailError,
                                    },
                                    {
                                        key: "dropoff_location",
                                        type: "text",
                                        name: "dropoff_location",
                                        placeholder: "Enter drop off location",
                                        // handler: (e) => setPassword(e.target.value),
                                        // error: passwordError,
                                    },
                                ],
                            }}
                            formButton={"Request"}
                            handlers={
                                {
                                    // formHandler: handleLogin,
                                }
                            }
                        />
                    </div>
                </div>

                {/* How It Works section */}
                <div className="container mx-auto py-12 px-4 md:px-8">
                    <div className="flex flex-row justify-center items-center w-full gap-5">
                        <div className="h-[2px] w-[30%] inline-block bg-black"></div>
                        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                            How It Works
                        </h2>
                        <div className="h-[2px] w-[30%] inline-block bg-black"></div>
                    </div>
                    <p className="text-gray-700 mb-8 text-center">
                        Our designated drivers are available 24/7 to drive you
                        to your destination safely and comfortably. Just follow
                        these simple steps to get started:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 text-center border-[2px] border-solid rounded-[5px]">
                            <div className="text-4xl text-blue-600 mb-2">1</div>
                            <p className="font-semibold">
                                Enter your pick-up and drop-off addresses.
                            </p>
                        </div>
                        <div className="bg-white p-4 text-center border-[2px] border-solid rounded-[5px]">
                            <div className="text-4xl text-blue-600 mb-2">2</div>
                            <p className="font-semibold">
                                Review the estimated fare and choose your ride.
                            </p>
                        </div>
                        <div className="bg-white p-4 text-center border-[2px] border-solid rounded-[5px]">
                            <div className="text-4xl text-blue-600 mb-2">3</div>
                            <p className="font-semibold">
                                Confirm your request and enjoy the ride!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-10">
                    <div className="flex flex-col justify-center items-center gap-5 smallMobile:px-[2rem] mobile:px-[2rem] tablet:px-[3rem] laptop:px-[4rem] desktop:px-[4rem] pb-10">
                        <div className="flex flex-row justify-center items-center w-full gap-5">
                            <div className="h-[2px] w-[30%] inline-block bg-black"></div>
                            <div className="smallMobile:text-[1rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[2rem] desktop:text-[2rem] font-bold">
                                Learn about us
                            </div>
                            <div className="h-[2px] w-[30%] inline-block bg-black"></div>
                        </div>
                        <div className="flex flex-row justify-center items-center flex-wrap gap-5">
                            <Card
                                head="Details"
                                description="At WEDD, we are passionate about revolutionizing transportation and providing our clients with the best designated driver and taxi services."
                                link="/about"
                            />
                            <Card
                                head="Services"
                                description="WEDD specializes in tailoring transportation solutions to suit your specific requirements."
                                link="/services"
                            />
                            <Card
                                head="Ride with us"
                                description="We believe that exceptional transportation services. Our focus on people over profit allows us to keep our prices competitive without compromising on quality. "
                                link="/ride"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Us section */}
                <div className="container mx-auto py-12 px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 mb-8 text-center">
                        Have questions or need assistance? Contact our customer
                        support team 24/7.
                    </p>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-theme-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                            onClick={() =>
                                window.alert(
                                    "Contact information or form can be added here."
                                )
                            }
                        >
                            Get in touch
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
