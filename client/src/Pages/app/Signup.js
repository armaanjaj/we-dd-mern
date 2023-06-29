import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/layouts/button/Button";
import NavBar from "../../components/user/customer/NavBar";

export default function SignUp() {
    return (
        <>
            <NavBar />
            <div className="flex flex-row justify-center items-center h-screen mx-5">
                <div className="flex flex-col justify-start items-center gap-5 py-10 px-8 smallMobile:w-full mobile: w-full tablet:w-2/3 laptop:w-1/3 desktop:w-1/3 largeDesktop:w-3/12 smallMobile:border-none mobile:border-none tablet:border-solid laptop:border desktop:border rounded">
                    <h1 className="text-2xl font-bold">Sign Up</h1>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        type="name"
                        placeholder="Enter your name"
                    />
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <Button
                        background={"#e64c1b"}
                        color={"#ffffff"}
                        text={"Continue"}
                        name={"login_submit"}
                        type={"submit"}
                    />
                    <div className="flex flex-col items-start justify-start w-full text-sm gap-2">
                        <div>
                            Already a customer?{" "}
                            <Link to={"/auth/signin"} className="text-blue-600">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
