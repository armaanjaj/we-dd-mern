import React, { useEffect } from "react";
import NavBar from "@/components/user/customer/NavBar";
import Footer from "@/components/user/customer/Footer";

export default function TermsAndPrivacy() {
    useEffect(() => {
        document.title = "We-DD | Privacy and Terms";
    }, []);

    return (
        <>
            <NavBar />
            <section className="h-full pt-10 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div className="text-[#032d60] font-bold text-4xl capitalize py-10">
                    Welcome to We-DD Privacy policy
                </div>
                <div className="flex flex-col justify-start items-start gap-5">
                    <div>
                        <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                            Privacy Terms:
                        </div>
                        <div className="text-lg">
                            <ol>
                                <li>
                                    ● All information provided by the user will
                                    be kept confidential and will not be shared
                                    with any third-party unless required by law.
                                </li>
                                <li>
                                    ● The user&apos;s personal information will be
                                    used solely for the purpose of providing the
                                    requested taxi services.
                                </li>
                                <li>
                                    ● The user&apos;s payment information will be
                                    securely stored and processed by a
                                    third-party payment processor.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div>
                        <div className="py-[15px] text-[#032d60] font-bold text-2xl">
                            Terms and Conditions:
                        </div>
                        <div className="text-lg">
                            <ol>
                                <li>
                                    1. The user must provide accurate and
                                    complete information in the booking form.
                                </li>
                                <li>
                                    2. The user must pay the full fare for the
                                    booked taxi services.
                                </li>
                                <li>
                                    3. The taxi service provider is not
                                    responsible for any delays or cancellations
                                    due to unforeseen circumstances such as
                                    traffic, weather, or road closures.
                                </li>
                                <li>
                                    4. The terms and conditions may be updated
                                    from time to time and the user will be
                                    notified of any changes.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="text-base">
                        The above Privacy Terms and Terms and Conditions apply
                        to all users of our taxi booking website. By using our
                        website, you agree to the terms and conditions outlined
                        above. If you do not agree with these terms, please do
                        not use our website. If you have any questions or
                        concerns regarding our Privacy Terms or Terms and
                        Conditions, please contact us at{" "}
                        <a className="text-theme-blue" href="mailto:wedd.service@gmail.com">
                            wedd.service@gmail.com
                        </a>
                        .
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
