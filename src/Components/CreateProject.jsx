export default function CreateProject() {
    return (
        <form
            action=""
            className="flex flex-col bg-gray-400 w-96 h-fit justify-center mx-auto mt-20 p-8"
        >
            <label htmlFor="Title" className="mt-4">
                Title
            </label>
            <input type="text" name="title" id="title" />
            <label htmlFor="Description" className="mt-4">
                Description
            </label>
            <input type="text" name="Description" id="Description" />
            <label htmlFor="Title" className="mt-4">
                Due Date
            </label>
            <input type="date" name="title" id="title" />
        </form>
    );
}
