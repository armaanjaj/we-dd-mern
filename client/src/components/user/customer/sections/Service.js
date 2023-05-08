import React, { useState } from "react";
import Button from "../../../layouts/button/Button";

export default function Service() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [shuttleService, setShuttleService] = useState(false);
    const [chauffeurService, setChauffeurService] = useState(false);
    const [driverApplication, setDriverApplication] = useState(false);
    const [questionsComments, setQuestionsComments] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // submit the form data to the server here
    };

    return (
        <section className="h-full pt-20 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold mb-4 px-3">
                    Request Extra Services
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="firstName"
                            >
                                First Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="firstName"
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="lastName"
                            >
                                Last Name
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="lastName"
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email Address
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                htmlFor="phoneNumber"
                            >
                                Phone Number
                            </label>
                            <input
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="phoneNumber"
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="street"
                                >
                                    Street
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="street"
                                    type="text"
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="city"
                                >
                                    City
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="city"
                                    type="text"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="province"
                                >
                                    Province
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="province"
                                    type="text"
                                    value={province}
                                    onChange={(e) =>
                                        setProvince(e.target.value)
                                    }
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="postalCode"
                                >
                                    Postal Code
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="postalCode"
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) =>
                                        setPostalCode(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                    Select the services you are interested in:
                                </label>
                                <div className="mt-2 flex flex-wrap gap-4">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-gray-600"
                                            checked={shuttleService}
                                            onChange={(e) =>
                                                setShuttleService(
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-gray-700">
                                            Shuttle Service
                                        </span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-gray-600"
                                            checked={chauffeurService}
                                            onChange={(e) =>
                                                setChauffeurService(
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-gray-700">
                                            Chauffeur Service
                                        </span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-gray-600"
                                            checked={driverApplication}
                                            onChange={(e) =>
                                                setDriverApplication(
                                                    e.target.checked
                                                )
                                            }
                                        />
                                        <span className="ml-2 text-gray-700">
                                            Apply to be a Driver
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-5">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="questionsComments"
                                >
                                    Questions/Comments
                                </label>
                                <textarea
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="questionsComments"
                                    rows={4}
                                    cols={60}
                                    value={questionsComments}
                                    onChange={(e) =>
                                        setQuestionsComments(e.target.value)
                                    }
                                />
                            </div>
                            <div className="px-3">
                                <Button
                                    background={"#e64c1b"}
                                    color={"#FFFFFF"}
                                    text={"Send"}
                                    name={"submit"}
                                    type={"submit"}
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
