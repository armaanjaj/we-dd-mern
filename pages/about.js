import React, { useEffect } from "react";
import NavBar from "@/components/user/customer/NavBar";
import Footer from "@/components/user/customer/Footer";
import Image from "next/image";

export default function About() {
    useEffect(() => {
        document.title = "We-DD | About Us";
    }, []);

    return (
        <>
            <NavBar />
            <figure>
                <Image
                    className="w-screen h-full max-h-[70vh] max-w-[100vw] object-cover"
                    src={"/About us page header.jpg"}
                    alt="A depiction of a taxi, used for decoration."
                    height={800}
                    width={1000}
                />
            </figure>
            <section className="h-full pt-10 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div className="text-[#032d60] font-bold text-4xl uppercase py-10">
                    Welcome to We-DD: Your Reliable Transportation Solution
                </div>
                <div className="flex flex-col justify-start items-start">
                    <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                        Who We Are
                    </div>
                    <div className="text-lg">
                        At We-DD, we are passionate about revolutionizing
                        transportation and providing our clients with the best
                        designated driver and taxi services. We believe that a
                        safe and enjoyable journey is not just a necessity but a
                        right for everyone. With this vision in mind, we have
                        crafted a private, customer-centric shuttle service that
                        caters to a variety of needs, ensuring you reach your
                        destination with comfort and convenience.
                    </div>

                    <div>
                        <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                            Our Commitment to Care
                        </div>
                        <div>
                            At the heart of We-DD&apos;s mission lies the commitment
                            to out-caring the competition. We firmly believe
                            that exceptional service is not just about reaching
                            your destination; it&apos;s about the journey itself.
                            That&apos;s why we prioritize care and compassion in
                            everything we do. Our dedicated team of chauffeurs
                            and franchise partners are carefully selected for
                            their values and passion for providing a positive
                            client experience.
                        </div>

                        <div>
                            <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                                Personalized Transportation Solutions
                            </div>
                            <div>
                                <div>
                                    We-DD specializes in tailoring transportation
                                    solutions to suit your specific
                                    requirements. Whether you&#39;re planning a
                                    special event, a We-DDing celebration, a
                                    brewery tour, or need reliable corporate
                                    shuttles, we&#39;ve got you covered. Our secret
                                    sauce lies in our ability to customize our
                                    services to meet your unique preferences,
                                    making your experience with us truly
                                    unforgettable.
                                </div>
                                <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                                    Making Transportation Accessible and
                                    Affordable
                                </div>
                                <div>
                                    At We-DD, we believe that exceptional
                                    transportation services shouldn&#39;t come with
                                    a hefty price tag. Our focus on people over
                                    profit allows us to keep our prices
                                    competitive without compromising on quality.
                                    We strive to make transportation accessible
                                    to all, ensuring that you can rely on us for
                                    an affordable and hassle-free journey.
                                </div>
                                <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                                    Join us at We-DD
                                </div>
                                <div>
                                    Join us at We-DD and experience
                                    transportation like never before. We are not
                                    just a taxi company; we are a team that
                                    cares about you and your journey. Whether
                                    you&#39;re traveling to a special occasion or
                                    just need a designated driver, let We-DD be
                                    your go-to transportation solution. Sit
                                    back, relax, and let us take care of the
                                    rest.
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
