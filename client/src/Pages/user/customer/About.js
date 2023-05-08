import React from "react";
import figure1 from "../../../images/About us page header.jpg";
import NavBar from "../../../components/user/customer/NavBar";
import Footer from "../../../components/user/customer/Footer";

export default function About() {
    return (
        <>
            <NavBar />
            <div className="figure-1-div">
                <figure>
                    <img className="w-screen h-full max-h-[70vh] max-w-[100vw] object-cover" src={figure1} />
                </figure>
            </div>
            <section className="h-full pt-10 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div className="text-[#032d60] font-bold text-6xl uppercase py-10">
                    About Us
                </div>
                <div className="flex flex-col justify-start items-start">
                    <div className="py-[15px] text-[#032d60] font-bold text-4xl">
                        Bringing people together changes everything.
                    </div>
                    <div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quos reprehenderit officia corporis assumenda
                        cupiditate, voluptate consequatur praesentium nemo unde,
                        porro eveniet accusamus fugit, autem id? Qui animi
                        veritatis doloribus aliquam?
                    </div>

                    <div>
                        <div className="py-[15px] text-[#032d60] font-bold text-3xl">
                            Travel
                        </div>
                        <div className="text-xl">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Quos reprehenderit officia
                                corporis assumenda cupiditate, voluptate
                                consequatur praesentium nemo unde, porro eveniet
                                accusamus fugit, autem id? Qui animi veritatis
                                doloribus aliquam?
                            </p>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Quos reprehenderit officia
                                corporis assumenda cupiditate, voluptate
                                consequatur praesentium nemo unde, porro eveniet
                                accusamus fugit, autem id? Qui animi veritatis
                                doloribus aliquam? Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Quos reprehenderit
                                officia corporis assumenda cupiditate, voluptate
                                consequatur praesentium nemo unde, porro eveniet
                                accusamus fugit, autem id? Qui animi veritatis
                                doloribus aliquam? Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Quos reprehenderit
                                officia corporis assumenda cupiditate, voluptate
                                consequatur praesentium nemo unde, porro eveniet
                                accusamus fugit, autem id? Qui animi veritatis
                                doloribus aliquam? Lorem ipsum, dolor sit amet
                                consectetur adipisicing elit. Quos reprehenderit
                                officia corporis assumenda cupiditate, voluptate
                                consequatur praesentium nemo unde, porro eveniet
                                accusamus fugit, autem id? Qui animi veritatis
                                doloribus aliquam?
                            </p>
                        </div>

                        <div className="">
                            <div className="py-[15px] text-[#032d60] font-bold text-3xl">
                                We believe business is the greatest platform for
                                change.
                            </div>
                            <div className="text-xl">
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quos reprehenderit officia
                                    corporis assumenda cupiditate, voluptate
                                    consequatur praesentium nemo unde, porro
                                    eveniet accusamus fugit, autem id? Qui animi
                                    veritatis doloribus aliquam?
                                </div>
                                <div>
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Quos reprehenderit officia
                                    corporis assumenda cupiditate, voluptate
                                    consequatur praesentium nemo unde, porro
                                    eveniet accusamus fugit, autem id? Qui animi
                                    veritatis doloribus aliquam?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
