import Sidebar from "./Components/Sidebar";
import CreateProject from "./Components/CreateProject";
import { useEffect, useState } from "react";
import PlaceHolder from "./Components/PlaceHolder";
import Project from "./Components/Project";

function App() {
    const [projects, setProjects] = useState([]);
    const [isCreateProject, setIsCreateProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/projects")
            .then((response) => response.json())
            .then((fetchedData) => setProjects(fetchedData))
            .catch((error) =>
                console.error("error fetching json data ", error)
            );
    }, []);

    function handleAddNewProject(newProject) {
        fetch("http://localhost:3000/projects", {
            method: "POST",
            body: JSON.stringify(newProject),
            headers: { "content-type": "application/json" },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new error("Failed to update JSON data.");
                }
                console.log("JSON data updated Successfully!!");
                setProjects([...projects, newProject]);
            })
            .catch((error) =>
                console.error("Error updating  JSON Data: ", error)
            );
    }

    function handleProjectSelect(projectId) {
        setIsCreateProject(false);

        console.log(projectId);

        fetch(`http://localhost:3000/projects/${projectId}`)
            .then((response) => response.json())
            .then((selectedProject) => setSelectedProject(selectedProject))
            .catch((error) =>
                console.error("Error updating  JSON Data: ", error)
            );
    }

    return (
        <>
            <div className="font-arsenal">
                <h1 className="my-8 text-center text-5xl font-bold">
                    React Project Management
                </h1>
                <div className="flex flex-row">
                    <Sidebar
                        projects={projects}
                        selectProject={handleProjectSelect}
                    />
                    {isCreateProject ? (
                        <CreateProject
                            handleAddNewProject={handleAddNewProject}
                        />
                    ) : (
                        <PlaceHolder createProject={setIsCreateProject} />
                    )}
                    {selectedProject != "" ? (
                        <Project project={selectedProject} />
                    ) : undefined}
                </div>
            </div>
        </>
    );
}

export default App;
