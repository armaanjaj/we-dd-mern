import NavBar from "@/components/application/NavBar";
import Footer from "@/components/application/Footer";
import Button from "@/components/layouts/button/Button";
import ContactUsBanner from "@/components/layouts/banners/ContactUsBanner";
import Loader from "@/helpers/Loader-FS";

import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button as MuiButton,
} from "@mui/material";

const RIDE_FORM_URL = "/api/ride";

export default function Ride() {
    const router = useRouter();
    let cookie = new Cookies();

    const [user, setUser] = React.useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
        pick:
            cookie.get("pickAddress") !== undefined
                ? cookie.get("pickAddress")
                : "",
        drop:
            cookie.get("dropAddress") !== undefined
                ? cookie.get("dropAddress")
                : "",
        pay_mode: "",
        car_type: "",
    });
    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogTitle, setDialogTitle] = React.useState("");
    const [dialogContent, setDialogContent] = React.useState("");
    const [showLoader, setShowLoader] = React.useState(false);

    React.useEffect(() => {
        document.title = "We-DD | Request your ride";

        if (!router.isReady) return;

        if (router.query.redirect === "quickform") {
            window.alert("Please fill out other necessary fields too.");
        }
    }, [router.isReady, router.query]);

    const handleRideSubmit = (e) => {
        e.preventDefault();

        if (user.setPayment === "" || user.car_type === "") {
            window.alert("All fields are required.");
            return;
        }

        let rideFormBody = JSON.stringify(user);

        setShowLoader(true);

        axios
            .post(RIDE_FORM_URL, rideFormBody, {
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
            <div className="flex flex-row items-center justify-center w-full h-screen">
                <div className="flex flex-col items-start justify-start gap-5 smallMobile:overflow-y-hidden mobile:overflow-y-hidden tablet:overflow-y-scroll laptop:overflow-y-scroll desktop:overflow-y-scroll smallMobile:w-full mobile:w-full tablet:w-1/2 laptop:w-1/2 desktop:w-1/2 h-full pt-32 pb-20 smallMobile:px-[1rem] mobile:px-[1.5rem] tablet:px-[2rem] laptop:px-[4rem] desktop:px-[4rem]">
                    <h1 className="text-[2rem] font-bold uppercase">
                        Ride with us
                    </h1>

                    <form
                        className="flex flex-col justify-center items-center gap-10"
                        onSubmit={handleRideSubmit}
                    >
                        <div className="flex flex-col items-start justify-center gap-5 w-full flex-wrap">
                            <div className="flex flex-row items-start justify-start gap-5 flex-wrap">
                                <input
                                    type="text"
                                    className="border-b-[2px] border-solid border-black focus:outline-none"
                                    name="customer_name"
                                    placeholder="First Name"
                                    value={user.fName}
                                    onChange={(e) =>
                                        setUser({
                                            ...user,
                                            fName: e.target.value,
                                        })
                                    }
                                    required
                                />
                                <input
                                    type="text"
                                    className="border-b-[2px] border-solid border-black focus:outline-none"
                                    name="customer_name"
                                    placeholder="Last Name"
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
                            <input
                                type="email"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_email"
                                placeholder="Your Email"
                                value={user.email}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        email: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="tel"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_contact_phone"
                                placeholder="Your Phone"
                                value={user.phone}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        phone: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="text"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_pickup_location"
                                placeholder="Your Pickup Address"
                                value={user.pick}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        pick: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                type="text"
                                className="border-b-[2px] border-solid border-black w-full focus:outline-none"
                                name="customer_dropoff_location"
                                placeholder="Your Drop-off Address"
                                value={user.drop}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        drop: e.target.value,
                                    })
                                }
                                required
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
                                            value="Cash"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    pay_mode: e.target.value,
                                                })
                                            }
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
                                            value="Debit"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    pay_mode: e.target.value,
                                                })
                                            }
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
                                            value="Credit"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    pay_mode: e.target.value,
                                                })
                                            }
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
                                            value="Automatic"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    car_type: e.target.value,
                                                })
                                            }
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
                                            value="Manual"
                                            onChange={(e) =>
                                                setUser({
                                                    ...user,
                                                    car_type: e.target.value,
                                                })
                                            }
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
                <div className="h-full w-1/2 smallMobile:hidden mobile:hidden tablet:hidden laptop:block desktop:block">
                    <ContactUsBanner />
                </div>
            </div>
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
