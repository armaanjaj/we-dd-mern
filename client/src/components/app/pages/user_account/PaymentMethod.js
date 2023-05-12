import React from "react";

export default function PaymentMethod() {
    return (
        <div className="border border-gray-300 px-10 py-8 rounded flex flex-col justify-start items-start gap-8 w-full">
            <div
                after=""
                className="text-4xl font-extrabold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
            >
                Payment methods
            </div>
            <div>
                No payment methods available now
            </div>
        </div>
    );
}
