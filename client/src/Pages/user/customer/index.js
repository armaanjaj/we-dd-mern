import React, { useEffect, useState } from "react";
import homeImage from "../../../images/Home.jpg";
import NavBar from "../../../components/user/customer/NavBar";
import Footer from "../../../components/user/customer/Footer";
import Card from "../../../components/layouts/cards/LinkCard";
import Button from "../../../components/layouts/button/Button";
import Form from "../../../components/layouts/form/Form";

export default function Index() {

    useEffect(()=>{
        document.title = "We-DD | Home"
    }, []);

    return (
        <>
            <NavBar />
            <section
                id="homepage"
                className="overflow-x-hidden flex flex-col gap-10"
            >
                <div
                    className="flex flex-row justify-between items-center w-full smallMobile:px-[2rem] mobile:px-[2rem] tablet:px-[3rem] laptop:px-[4rem] desktop:px-[4rem] h-[98vh] bg-no-repeat bg-right bg-cover"
                    style={{ backgroundImage: `url(${homeImage})` }}
                >
                    <div className="flex flex-col justify-center items-center gap-10 w-[50dvw] bg-[rgb(255_255_255_/_60%)] p-5 rounded-[5px] backdrop-blur-[5px] smallMobile:hidden tablet:hidden laptop:hidden desktop:block largeDesktop:block">
                        <h1 className="text-center text-black smallMobile:text-[0.75rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[3rem] desktop:text-[2.5rem] largeDesktop:text-[3.5rem] font-extrabold">
                            We are <br/> Designated Drivers
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
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni officiis..."
                                link="/about"
                            />
                            <Card
                                head="Services"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni officiis..."
                                link="/services"
                            />
                            <Card
                                head="Ride with us"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni officiis..."
                                link="/ride"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
