import React, { useState } from "react";

export default function TripHistory() {
    const [tripHistory, setTripHistory] = useState([]);

    return (
        <div className="px-10 py-8 rounded flex flex-col justify-start items-start gap-8 w-full">
            <div
                after=""
                className="text-4xl font-extrabold w-full after:content-[attr(after)] after:block after:w-full after:h-[1px] after:bg-gray-200 after:rounded after:mt-1"
            >
                Trip history
            </div>
            {tripHistory ? (
                <div>No saved records found</div>
            ) : (
                tripHistory.map((item, key) => <div>1</div>)
            )}
        </div>
    );
}
