import Sidebar from "./Components/Sidebar";
import CreateProject from "./Components/CreateProject";

function App() {
    return (
        <>
            <div className="font-arsenal">
                <h1 className="my-8 text-center text-5xl font-bold">
                    React Project Management
                </h1>
                <div className="flex flex-row">
                    <Sidebar />
                    <CreateProject />
                </div>
            </div>
        </>
    );
}

export default App;
