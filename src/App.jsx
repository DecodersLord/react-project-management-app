import Sidebar from "./Components/Sidebar";

function App() {
    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                React Project Management
            </h1>
            <div className="flex flex-row">
                <Sidebar />
            </div>
        </>
    );
}

export default App;
