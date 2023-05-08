import React, { useState } from "react";
import NavBar from "../../../components/user/customer/NavBar";
import Footer from "../../../components/user/customer/Footer";
import Button from "../../../components/layouts/button/Button";
import ContactUsBanner from "../../../components/layouts/banners/ContactUsBanner";

export default function Ride() {

    //Monitors state of input
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [PhoneError, setPhoneError] = useState("");
    const [pick, setPickup] = useState("");
    const [PickupError, setPickupError] = useState("");
	const [dest, setDropoff] = useState("");
    const [DropoffError, setDropoffError] = useState("");
    const [pay_mode, setPayment] = useState("");
    const [PaymentError, setPaymentError] = useState("");
    const [car_type, setCarType] = useState("");
    const [carTypeError, setCarTypeError] = useState("");

    return (
        <>
            <NavBar />
            <div className="flex flex-row items-center justify-center w-full h-screen">
                <div className="flex flex-col items-start justify-start gap-5 smallMobile:overflow-y-hidden mobile:overflow-y-hidden tablet:overflow-y-scroll laptop:overflow-y-scroll desktop:overflow-y-scroll smallMobile:w-full mobile:w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2 h-full pt-32 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                    <h1 className="text-[2rem] font-bold uppercase">
                        Ride with us
                    </h1>

                    <form
                        className="flex flex-col justify-center items-center gap-10"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="flex flex-col items-start justify-center gap-5 w-full flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-5 flex-wrap">
                                <input
                                    type="text"
                                    className="border-b-[2px] border-solid border-black focus:outline-none"
                                    name="customer_name"
                                    placeholder="First Name"
                                />
                                <input
                                    type="text"
                                    className="border-b-[2px] border-solid border-black focus:outline-none"
                                    name="customer_name"
                                    placeholder="Last Name"
                                />
                            </div>
                            <input
                                type="email"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_email"
                                placeholder="Your Email"
                            />
                            <input
                                type="tel"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_contact_phone"
                                placeholder="Your Phone"
                            />
                            <input
                                type="text"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_pickup_location"
                                placeholder="Your Pickup Address"
                            />
                            <input
                                type="text"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_dropoff_location"
                                placeholder="Your Drop-off Address"
                            />
                            <div className="flex flex-col items-start justify-start gap-5">
                                <h2 className="text-2xl font-semibold">
                                    Payment method
                                </h2>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <div className="flex flex-row items-center justify-start gap-5">
                                        <input
                                            type="radio"
                                            name="customer_payment_method"
                                            className="hover:cursor-pointer"
                                        />
                                        <label htmlFor="customer_payment_method">
                                            Cash
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-5">
                                        <input
                                            type="radio"
                                            name="customer_payment_method"
                                            className="hover:cursor-pointer"
                                        />
                                        <label htmlFor="customer_payment_method">
                                            Debit
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-5">
                                        <input
                                            type="radio"
                                            name="customer_payment_method"
                                            className="hover:cursor-pointer"
                                        />
                                        <label htmlFor="customer_payment_method">
                                            Credit
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-start gap-5">
                                <h2 className="text-2xl font-semibold">
                                    Car type
                                </h2>
                                <div className="flex flex-col items-start justify-start gap-1">
                                    <div className="flex flex-row items-center justify-start gap-5">
                                        <input
                                            type="radio"
                                            name="customer_car_type"
                                            className="hover:cursor-pointer"
                                        />
                                        <label htmlFor="customer_car_type">
                                            Automatic
                                        </label>
                                    </div>
                                    <div className="flex flex-row items-center justify-start gap-5">
                                        <input
                                            type="radio"
                                            name="customer_car_type"
                                            className="hover:cursor-pointer"
                                        />
                                        <label htmlFor="customer_car_type">
                                            Manual
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            text={"Request ride"}
                            name="request_button"
                            color="#ffffff"
                            background="#e64c1b"
                        />
                    </form>
                </div>
                <div className="h-full w-1/2 smallMobile:hidden mobile:hidden tablet:block laptop:block desktop:block">
                    <ContactUsBanner />
                </div>
            </div>
            <Footer />
        </>
    );
}
