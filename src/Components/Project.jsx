import { useState } from "react";

export default function Project() {
    function getDateDiff(date1, date2) {
        const dateDiff = date2.getTime() - date1.getTime();

        return Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    }

    return (
        <>
            <div className="flex flex-col w-screen overflow-x:hidden">
                <div className="flex flex-row h-fit">
                    <div className="flex flex-col mx-12 my-12 w-1/2 flex-grow">
                        <h1 className="font-bold text-4xl">Project Title</h1>
                        <p className="font-semibold text-xl mt-6">
                            Project description
                        </p>
                        <p className="text-lg mt-6">
                            {getDateDiff(new Date(), new Date("2024-08-01"))}
                        </p>
                    </div>
                    <div className="flex flex-col w-1/2 my-12">
                        <button className="bg-green-600 rounded-md w-fit py-2 px-4 absolute right-28">
                            Edit Project Info
                        </button>
                        <button className="bg-green-600 rounded-md w-fit py-2 px-4 absolute right-28 mt-16">
                            Add Tasks
                        </button>
                    </div>
                </div>
                <hr className="w-11/12 h-1 my-8 ml-12 bg-gray-200 border-0 rounded dark:bg-gray-700" />
            </div>
        </>
    );
}
