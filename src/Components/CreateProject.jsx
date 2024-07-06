export default function CreateProject() {
    return (
        <form
            action=""
            className="flex flex-col h-fit w-9/12 justify-center ml-2 mr-auto mt-20 p-8 font-medium"
        >
            <label htmlFor="Title" className="mt-4">
                TITLE
            </label>
            <input
                type="text"
                name="title"
                id="title"
                className="bg-zinc-200 focus:border-b-2 focus:outline-none focus:border-b-black"
            />
            <label htmlFor="Description" className="mt-4">
                DESCRIPTION
            </label>
            <textarea
                type="text"
                name="Description"
                id="Description"
                className="bg-zinc-200 focus:border-b-2 focus:outline-none focus:border-b-black"
            />
            <label htmlFor="Title" className="mt-4">
                DUE DATE
            </label>
            <input
                type="date"
                name="title"
                id="title"
                className="bg-zinc-200 focus:border-b-2 focus:outline-none focus:border-b-black"
            />
            <div className="flex flex-row space-x-4 my-4 justify-end text-lg">
                <button className="font-bold">Cancel</button>
                <button className="bg-black text-white font-bold rounded-lg px-4">
                    Save
                </button>
            </div>
        </form>
    );
}
