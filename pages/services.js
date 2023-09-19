import NavBar from "@/components/user/customer/NavBar";
import Footer from "@/components/user/customer/Footer";
import Button from "@/components/layouts/button/Button";
import Loader from "@/components/app/Loaders/Loader-FS";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button as MuiButton,
} from "@mui/material";

const SERVICES_FORM_URL = "/api/services/";

function Services() {
    React.useEffect(() => {
        document.title = "We-DD | Request a service";
    }, []);


    const router = useRouter();

    const [user, setUser] = React.useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        province: "",
        postalCode: "",
        serviceType: [],
        questionsComments: "",
    });
    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogTitle, setDialogTitle] = React.useState("");
    const [dialogContent, setDialogContent] = React.useState("");
    const [showLoader, setShowLoader] = React.useState(false);

    function handleCheckboxChange(e, value) {
        const checked = e.target.checked;
        setUser((prevUser) => ({
            ...prevUser,
            serviceType: checked
                ? [...prevUser.serviceType, value]
                : prevUser.serviceType.filter((service) => service !== value),
        }));
    }

    const handleServiceSubmit = (e) => {
        e.preventDefault();

        if (user.serviceType.length === 0) {
            window.alert("Please select the type of service you want.");
            return;
        }

        let servicesFormBody = JSON.stringify(user);

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
        router.replace("/");
    };

    return (
        <>
            {/* Loader */}
            {showLoader === true && <Loader />}

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
                                    value={user.fName}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            fName: e.target.value,
                                        })
                                    }
                                    required
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
                                    value={user.lName}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            lName: e.target.value,
                                        })
                                    }
                                    required
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
                                    value={user.email}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            email: e.target.value,
                                        })
                                    }
                                    required
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
                                    value={user.phone}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            phone: e.target.value,
                                        })
                                    }
                                    required
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
                                        value={user.street}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                street: e.target.value,
                                            })
                                        }
                                        required
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
                                        value={user.city}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                city: e.target.value,
                                            })
                                        }
                                        required
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
                                        value={user.province}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                province: e.target.value,
                                            })
                                        }
                                        required
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
                                        value={user.postalCode}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                postalCode: e.target.value,
                                            })
                                        }
                                        required
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
                                                checked={user.serviceType.includes(
                                                    "Shuttle Service"
                                                )}
                                                onChange={(e) =>
                                                    handleCheckboxChange(
                                                        e,
                                                        "Shuttle Service"
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
                                                checked={user.serviceType.includes(
                                                    "Chauffeur Service"
                                                )}
                                                onChange={(e) =>
                                                    handleCheckboxChange(
                                                        e,
                                                        "Chauffeur Service"
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
                                                checked={user.serviceType.includes(
                                                    "Apply to be a Driver"
                                                )}
                                                onChange={(e) =>
                                                    handleCheckboxChange(
                                                        e,
                                                        "Apply to be a Driver"
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
                                        Questions/Comments (OPTIONAL)
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded p-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="questionsComments"
                                        rows={4}
                                        cols={60}
                                        value={user.questionsComments}
                                        onChange={(e) =>
                                            setUser({
                                                ...user,
                                                questionsComments:
                                                    e.target.value,
                                            })
                                        }
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
                    <MuiButton
                        onClick={handleCloseDialog}
                        color="primary"
                        autoFocus
                    >
                        OK
                    </MuiButton>
                </DialogActions>
            </Dialog>
        </>
    );
}
export default Services;
