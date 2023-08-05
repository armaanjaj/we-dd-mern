import React, { useEffect, useState } from "react";
import NavBar from "../../../components/user/customer/NavBar";
import Footer from "../../../components/user/customer/Footer";
import Button from "../../../components/layouts/button/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button as MuiButton } from "@mui/material";
import Loader from "../../../components/app/Loaders/Loader-FS";

const SERVICES_FORM_URL = "/api/services/serviceRequest"

function Services() {

    let navigate = useNavigate();

    const [openDialog, setOpenDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState("");
    const [dialogContent, setDialogContent] = useState("");
    const [showLoader, setShowLoader] = useState(false);

    useEffect(()=>{
        document.title = "We-DD | Request a service"
    }, []);

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [serviceType, setServiceType] = useState([]);
    const [questionsComments, setQuestionsComments] = useState("");

    function handleCheckboxChange(e, value) {
        const checked = e.target.checked;
        setServiceType(prevServiceTypes => {
            if (checked) return [...prevServiceTypes, value];
            else return prevServiceTypes.filter(service => service !== value);
        });
    }

    const handleServiceSubmit = (e) => {
        e.preventDefault();

        let servicesFormBody = JSON.stringify({
            fName,
            lName,
            email,
            phone,
            street,
            city,
            province,
            postalCode,
            serviceType,
            questionsComments
        });

        setShowLoader(true);

        axios
            .post(SERVICES_FORM_URL, servicesFormBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                if (response.data.success) {
                    setDialogTitle("Success");
                    setDialogContent(response.data.message);
                } else {
                    setDialogTitle("Error");
                    setDialogContent(response.data.message);
                }
                setOpenDialog(true);
            })
            .catch((error) => console.log(error))
            .finally(() => setShowLoader(false));
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        navigate("/");
    };

    return (
        <>

            {/* Loader */}
            {showLoader === true && <Loader/>}

            <NavBar />

            <section className="h-full pt-20 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                <div className="container mx-auto py-8">
                    <h1 className="text-4xl font-bold mb-4 px-3">
                        Request Extra Services
                    </h1>
                    <form onSubmit={handleServiceSubmit}>
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
                                    value={fName}
                                    onChange={(e) => setFName(e.target.value)}
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
                                    value={lName}
                                    onChange={(e) => setLName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-start flex-wrap mb-6">
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
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
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
                                        onChange={(e) => setProvince(e.target.value)}
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
                                        onChange={(e) => setPostalCode(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                        Select the services you are interested
                                        in:
                                    </label>
                                    <div className="mt-2 flex flex-wrap gap-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-gray-600"
                                                checked={serviceType.includes("Shuttle Service")}
                                                onChange={(e) => handleCheckboxChange(e, "Shuttle Service")}
                                            />
                                            <span className="ml-2 text-gray-700">
                                                Shuttle Service
                                            </span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-gray-600"
                                                checked={serviceType.includes("Chauffeur Service")}
                                                onChange={(e) => handleCheckboxChange(e, "Chauffeur Service")}
                                            />
                                            <span className="ml-2 text-gray-700">
                                                Chauffeur Service
                                            </span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-5 w-5 text-gray-600"
                                                checked={serviceType.includes(
                                                    "Apply to be a Driver"
                                                )}
                                                onChange={(e) => handleCheckboxChange(e, "Apply to be a Driver")}
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
                                        Questions/Comments (OPTIONAL)
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="questionsComments"
                                        rows={4}
                                        cols={60}
                                        value={questionsComments}
                                        onChange={(e) => setQuestionsComments(e.target.value)}
                                    />
                                </div>
                                <div className="px-3">
                                    <Button
                                        type="submit"
                                        text={"Send"}
                                        name="services_button"
                                        color="#ffffff"
                                        background="#e64c1b"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <Footer />

            {/* Dialog Box */}
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{dialogContent}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <MuiButton onClick={handleCloseDialog} color="primary" autoFocus>
                        OK
                    </MuiButton>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default Services;
