import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Input from "./Input";

export default function CreateProject({ handleAddNewProject }) {
    const [projectValues, setProjectValues] = useState({
        id: uuidv4(),
        title: "",
        description: "",
        "due-date": "",
    });

    function handleChange(inputIdentifier, newValue) {
        setProjectValues((prevProjectValues) => {
            return {
                ...prevProjectValues,
                [inputIdentifier]: newValue,
            };
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(projectValues);

        handleAddNewProject(projectValues);
    }

    return (
        <form
            action=""
            className="flex flex-col h-fit w-9/12 justify-center ml-2 mr-auto mt-20 p-8 font-medium"
            onSubmit={handleSubmit}
        >
            <legend className="text-4xl mx-auto font-bold">
                Create New Project
            </legend>
            <Input
                label="Title"
                type="text"
                name="title"
                id="title"
                value={projectValues.title}
                onChange={(e) => handleChange("title", e.target.value)}
            />
            <Input
                label="Description"
                textarea
                type="text"
                name="Description"
                id="Description"
                value={projectValues.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="bg-zinc-200 focus:border-b-2 focus:outline-none focus:border-b-black"
            />
            <Input
                label="Due-Date"
                type="date"
                name="title"
                id="title"
                value={projectValues["due-date"]}
                onChange={(e) => handleChange("due-date", e.target.value)}
                className="bg-zinc-200 focus:border-b-2 focus:outline-none focus:border-b-black"
            />
            <div className="flex flex-row space-x-4 my-4 justify-end text-lg">
                <button className="font-bold">Cancel</button>
                <button
                    className="bg-black text-white font-bold rounded-lg px-4"
                    type="submit"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
