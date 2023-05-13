import { Button } from "@mui/material";
import React, { useState } from "react";

export default function PersonalInformationForm({
    name,
    email,
    phone,
    address,
    onFormSubmit,
}) {
    const [formData, setFormData] = useState({ name, email, phone, address });

    const [editMode, setEditMode] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="px-10 py-8 rounded flex flex-col justify-start items-start gap-5 w-full">
                <div
                    after=""
                    className="text-4xl font-extrabold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
                >
                    Personal Information
                </div>
                <div className="w-full">
                    <label
                        className="block text-gray-700 font-bold mb-2 text-sm"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-full">
                    <label
                        className="block text-gray-700 font-bold mb-2 text-sm"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-full">
                    <label
                        className="block text-gray-700 font-bold mb-2 text-sm"
                        htmlFor="phone"
                    >
                        Phone
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="w-full">
                    <label
                        className="block text-gray-700 font-bold mb-2 text-sm"
                        htmlFor="address"
                    >
                        Address
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Enter your default home address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center justify-start w-full">
                    <Button
                        onClick={() => setEditMode(true)}
                        variant="contained"
                        style={{ backgroundColor: "#002d72" }}
                    >
                        Update profile
                    </Button>
                </div>
            </div>
        </form>
    );
}
