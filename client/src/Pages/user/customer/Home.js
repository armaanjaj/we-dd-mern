import React, { useState } from "react";
import homeImage from "../../../images/Home.jpg";
import NavBar from "../../../components/user/customer/NavBar";
import Footer from '../../../components/user/customer/Footer';
import Card from "../../../components/layouts/cards/LinkCard";
import Button from "../../../components/layouts/button/Button";
import Form from "../../../components/layouts/form/Form";

function Home() {

    const [isLoginIn, setIsLogIn] = useState(true);

    return (
        <>
            <NavBar isLoginIn={isLoginIn}/>
            <section id="homepage" className="overflow-x-hidden">
                <div
                    className="flex flex-col justify-center items-center smallMobile:px-[2rem] mobile:px-[2rem] tablet:px-[3rem] laptop:px-[4rem] desktop:px-[4rem] gap-8 h-[100vh] bg-no-repeat bg-right bg-cover"
                    style={{ backgroundImage: `url(${homeImage})` }}
                >
                    <h1 className="smallMobile:text-[0.75rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[3rem] desktop:text-[3rem] font-extrabold text-white capitalize">
                        We are Designated Drivers
                    </h1>
                    <h3 className="text-[0.75rem] text-black bg-[rgb(255_255_255_/_60%)] p-5 rounded-[5px] backdrop-blur-[8px]">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium magni officiis, quidem, voluptates
                            cum provident sequi est illum labore incidunt ad
                            voluptate accusamus magnam culpa dicta odio
                            accusantium hic dolore. Minima, aspernatur? Quae
                            dicta dolor impedit debitis sunt sint ipsa vitae
                            perspiciatis aperiam, molestiae beatae eos obcaecati
                            numquam iure consequatur! Deleniti labore inventore
                            quidem quos blanditiis perspiciatis, nemo voluptatum
                            dolorem? Architecto ex reprehenderit fugiat
                            distinctio hic vero placeat ducimus perspiciatis
                            voluptas unde pariatur autem? Libero aut sint
                            placeat aliquam eius laborum corporis! Magnam
                            impedit unde voluptatibus quos tempora, ut enim
                            reiciendis?
                        </div>
                    </h3>
                    <div>
                        <Button
                            background={"#e64c1b"}
                            color={"#ffffff"}
                            text={"Book a ride"}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-10">
                    {/* Form */}
                    <div
                        id="form"
                        className="flex flex-row justify-center items-center smallMobile:mt-0 mobile:mt-0 tablet:mt-0 laptop:mt-[-6rem] desktop:mt-[-6rem] smallMobile:px-[2rem] mobile:px-[2rem] tablet:px-[3rem] laptop:px-[4rem] desktop:px-[4rem]"
                    >
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
                                head="Join us"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium magni officiis..."
                                link="/signup"
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

export default Home;
