import NavBar from "@/components/user/customer/NavBar";
import Footer from "@/components/user/customer/Footer";
import Card from "@/components/layouts/cards/LinkCard";
import Form from "@/components/layouts/form/Form";
import Loader from "@/components/app/Loaders/Loader-FS";

import React from "react";
import axios from "axios";
import Image from "next/image";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import {
    Button as MuiButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";

const CONTACT_FORM_URL = "/api/contact/";

export default function Index() {
    const router = useRouter();
    let cookie = new Cookies();

    React.useEffect(() => {
        document.title = "We-DD | Home";
    }, []);

    const [contactUser, setContactUser] = React.useState({
        yourName: "",
        yourEmail: "",
        yourMessage: "",
    });
    const [contactDialogOpen, setContactDialogOpen] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [dialogTitle, setDialogTitle] = React.useState("");
    const [dialogContent, setDialogContent] = React.useState("");
    const [pickAddress, setPickAddress] = React.useState("");
    const [dropAddress, setDropAddress] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleQuickForm = (e) => {
        e.preventDefault();

        if (pickAddress !== "" && dropAddress !== "") {
            // Calculate the expiration time for the cookie (5 minutes in milliseconds)
            cookie.set("pickAddress", pickAddress, {
                expires: new Date(new Date().getTime() + 5 * 60 * 1000),
            });
            cookie.set("dropAddress", dropAddress, {
                expires: new Date(new Date().getTime() + 5 * 60 * 1000),
            });

            router.replace("/ride?redirect=quickform");
        }
    };

    const handleSend = (e) => {
        e.preventDefault();

        if (
            contactUser.yourName === "" ||
            contactUser.yourEmail === "" ||
            contactUser.yourMessage === ""
        ) {
            window.alert(
                "All fields are mandatory. Please fill out all of them."
            );
            return;
        }

        setLoading(true);

        let contactFormBody = JSON.stringify(contactUser);

        axios
            .post(CONTACT_FORM_URL, contactFormBody, {
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
            })
            .catch((error) => console.log(error))
            .finally(() => {
                setContactDialogOpen(false);
                setOpenDialog(true);
                setContactUser({
                    yourName: "",
                    yourEmail: "",
                    yourMessage: "",
                });
                setLoading(false);
            });
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        router.replace("/");
    };

    return (
        <>
            <NavBar />
            <section
                id="homepage"
                className="overflow-x-hidden flex flex-col gap-10 bg-gray-100"
            >
                <Image
                    src="/Home.jpg"
                    alt="Calgary downtown night skyline"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="flex flex-row justify-between items-center w-full smallMobile:px-[2rem] mobile:px-[2rem] tablet:px-[3rem] laptop:px-[4rem] desktop:px-[4rem] h-[98vh] bg-no-repeat bg-right bg-cover">
                    <div className="flex flex-col justify-center items-center gap-10 w-[50dvw] bg-[rgb(255_255_255_/_60%)] p-5 rounded-[5px] backdrop-blur-[5px] smallMobile:hidden tablet:hidden laptop:hidden desktop:block largeDesktop:block">
                        <h1 className="text-center text-black smallMobile:text-[0.75rem] mobile:text-[1.5rem] tablet:text-[2rem] laptop:text-[3rem] desktop:text-[2.5rem] largeDesktop:text-[3.5rem] font-extrabold">
                            We are <br /> Designated Drivers
                        </h1>
                    </div>
                    <div className="smallMobile:w-full mobile:w-full tablet:w-full laptop:w-full desktop:w-[50vw] largeDesktop:w-[50vw] flex flex-row justify-center items-center">
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
                                        handler: (e) =>
                                            setPickAddress(e.target.value),
                                    },
                                    {
                                        key: "dropoff_location",
                                        type: "text",
                                        name: "dropoff_location",
                                        placeholder: "Enter drop off location",
                                        handler: (e) =>
                                            setDropAddress(e.target.value),
                                    },
                                ],
                            }}
                            formButton={"Proceed"}
                            handlers={{
                                formHandler: handleQuickForm,
                            }}
                        />
                    </div>
                </div>

                {/* How It Works section */}
                <div className="container mx-auto py-12 px-4 md:px-8">
                    <div className="flex flex-row justify-center items-center w-full gap-5">
                        <div className="h-[2px] w-[30%] inline-block bg-black"></div>
                        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                            How It Works
                        </h2>
                        <div className="h-[2px] w-[30%] inline-block bg-black"></div>
                    </div>
                    <p className="text-gray-700 mb-8 text-center">
                        Our designated drivers drive you to your destination
                        safely and comfortably. Just follow these simple steps
                        to get started:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 text-center border-[2px] border-solid rounded-[5px]">
                            <div className="text-4xl text-blue-600 mb-2">1</div>
                            <p className="font-semibold">
                                Enter your pick-up, drop-off addresses and other
                                required details.
                            </p>
                        </div>
                        <div className="bg-white p-4 text-center border-[2px] border-solid rounded-[5px]">
                            <div className="text-4xl text-blue-600 mb-2">2</div>
                            <p className="font-semibold">
                                Get a call back from us and confirm the ride.
                            </p>
                        </div>
                        <div className="bg-white p-4 text-center border-[2px] border-solid rounded-[5px]">
                            <div className="text-4xl text-blue-600 mb-2">3</div>
                            <p className="font-semibold">
                                Hope in and enjoy the ride!
                            </p>
                        </div>
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
                                description="At We-DD, we are passionate about revolutionizing transportation and providing our clients with the best designated driver and taxi services."
                                link="/about"
                            />
                            <Card
                                head="Services"
                                description="We-DD specializes in tailoring transportation solutions to suit your specific requirements."
                                link="/services"
                            />
                            <Card
                                head="Ride with us"
                                description="We believe that exceptional transportation services. Our focus on people over profit allows us to keep our prices competitive without compromising on quality. "
                                link="/ride"
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Us section */}
                <div className="container mx-auto py-12 px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 mb-8 text-center">
                        Have questions or need assistance? Contact our customer
                        support team.
                    </p>
                    <div className="flex items-center justify-center">
                        <div
                            className="bg-theme-blue text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 hover:cursor-pointer"
                            onClick={() => setContactDialogOpen(true)}
                        >
                            Get in touch
                        </div>
                    </div>
                    <Dialog
                        open={contactDialogOpen}
                        onClose={() => setContactDialogOpen(false)}
                    >
                        <DialogTitle>Send us your questions</DialogTitle>
                        <DialogContent>
                            {loading ? <Loader /> : null}

                            <TextField
                                margin="dense"
                                name="customer-contact-name"
                                label="Name"
                                type="text"
                                value={contactUser.yourName}
                                onChange={(e) =>
                                    setContactUser({
                                        ...contactUser,
                                        yourName: e.target.value,
                                    })
                                }
                                fullWidth
                                required
                            />
                            <TextField
                                margin="dense"
                                name="customer-contact-email"
                                label="Email"
                                type="email"
                                value={contactUser.yourEmail}
                                onChange={(e) =>
                                    setContactUser({
                                        ...contactUser,
                                        yourEmail: e.target.value,
                                    })
                                }
                                fullWidth
                                required
                            />

                            <TextField
                                margin="dense"
                                name="customer-contact-message"
                                label="Your message"
                                type="text"
                                value={contactUser.yourMessage}
                                onChange={(e) =>
                                    setContactUser({
                                        ...contactUser,
                                        yourMessage: e.target.value,
                                    })
                                }
                                fullWidth
                                required
                            />

                            <DialogActions>
                                <MuiButton
                                    onClick={() => setContactDialogOpen(false)}
                                >
                                    {" "}
                                    Cancel{" "}
                                </MuiButton>
                                <MuiButton onClick={handleSend}>Send</MuiButton>
                            </DialogActions>
                        </DialogContent>
                    </Dialog>
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
