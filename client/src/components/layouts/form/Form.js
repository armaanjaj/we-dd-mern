import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import CardShadow from "../cards/CardShadow";

function Form({ formHead, formFoot = null, formData, formButton, handlers }) {
    return (
        <CardShadow>
            <div className="flex flex-col items-center py-5 smallMobile:px-[1rem] mobile:px-[1rem] tablet:px-[3rem] laptop:px-[5rem] desktop:px-[5rem] gap-5">
                <h2 className="text-[2rem] font-bold">{formHead}</h2>

                <form
                    className="flex flex-col justify-center items-center gap-5"
                    onSubmit={handlers?.formHandler ? handlers.formHandler : e=>e.preventDefault()}
                >
                    {formData.inputs.map((input) => (
                        <div
                            key={input.key}
                            className="fieldDiv py-[0.5rem] px-0"
                        >
                            <input
                                type={input.type}
                                className="fields border-b-[1.5px] border-solid border-black text-[14px] py-[14px] px-[16px] w-[20.5rem] focus:outline-none"
                                name={input.name}
                                placeholder={input.placeholder}
                                onChange={input.handler}
                                required
                            />
                            {input.error && (
                                <div className="warning font-extrabold text-[11px] text-red-500">
                                    <p>{input.error}</p>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="fieldDiv py-[0.5rem] px-0">
                        <Button
                        type="submit"
                        text={formButton}
                        name="request_button"
                        color="#ffffff"
                        background="#e64c1b"
                        />
                    </div>
                    {formFoot && (
                        <div className="auth-form-help-links flex flex-col justify-start items-start ml-[-40%] font-normal text-[13px]">
                            {formButton === "Log in" ? (
                                <>
                                    <div className="fieldDiv py-[0.5rem] px-0">
                                        <Link
                                            to={"/forgotpassword"}
                                            className="auth-form-forgotpassword no-underline p-0 text-black border-0"
                                            target="_blank"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <div className="fieldDiv py-[0.5rem] px-0">
                                        <Link
                                            to={"/auth/signup"}
                                            className="links no-underline text-black border-0"
                                        >
                                            Don't have an account?{" "}
                                            <span className="text-[#2d8cb8]">
                                                Sign up
                                            </span>
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="fieldDiv py-[0.5rem] px-0">
                                        <Link
                                            to={"/auth/login"}
                                            className="links no-underline text-black border-0"
                                        >
                                            Already have an account?{" "}
                                            <span>Log in</span>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </CardShadow>
    );
}

export default Form;
