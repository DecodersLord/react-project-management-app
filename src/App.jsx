import Sidebar from "./Components/Sidebar";
import CreateProject from "./Components/CreateProject";

function App() {
    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                React Project Management
            </h1>
            <div className="flex flex-row">
                <Sidebar />
                <CreateProject />
            </div>
        </>
    );
}

export default App;
