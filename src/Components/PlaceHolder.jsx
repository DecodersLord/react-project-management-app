export default function PlaceHolder({ createProject }) {
    return (
        <>
            <div className="flex flex-col mx-auto my-20">
                <h1 className="font-extrabold text-center text-4xl">
                    No Project Selected
                </h1>
                <p className="font-bold text-center text-2xl mt-4">
                    Select a project from the sidebar
                </p>
                <p className="font-extrabold text-center text-4xl mt-4">OR</p>
                <button
                    className="bg-green-800 flex mx-auto rounded-md w-fit px-2 py-2 text-sm my-6"
                    onClick={() => createProject(true)}
                >
                    + Create A new Project
                </button>
            </div>
        </>
    );
}
