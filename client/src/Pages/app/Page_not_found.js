import React from "react";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Button from "../../components/layouts/button/Button";

export default function PageNotFound() {
    document.title = "404 | Page not found";

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="flex flex-row justify-center items-center text-4xl font-bold mb-4"> <span>Error 404</span>&nbsp;&nbsp;<SentimentVeryDissatisfiedIcon className="scale-125" /></h1>
            <p className="text-lg text-gray-700 mb-8">
                <span>Looks like the page your are looking for doesn't exist.</span>
            </p>
            <a href="/">
                <Button
                    background={"#E64C1B"}
                    color={"#ffffff"}
                    text={"Return Home"}
                    name={"home_button"}
                />
            </a>
        </div>
    );
}
