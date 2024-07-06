export default function Sidebar() {
    return (
        <aside className="bg-black w-64 text-white text-2xl rounded-lg h-screen left-0">
            <h2 className="p-6">Your Project</h2>
            <button className="bg-gray-800 m-6 rounded-md w-fit px-2 py-2 text-sm">
                + Create new Project
            </button>
        </aside>
    );
}
