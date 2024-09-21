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
        fetch("https://api.jsonbin.io/v3/b/6693645cacd3cb34a865e0bb")
            .then((response) => response.json())
            .then((record) => {
                setProjects(record.record.projects);
            })
            .catch((error) =>
                console.error("error fetching json data ", error)
            );
    }, []);

    function handleAddNewProject(newProject) {
        const body = {
            projects: [...projects, newProject],
        };

        fetch("https://api.jsonbin.io/v3/b/6693645cacd3cb34a865e0bb", {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json",
                "X-Master-Key": import.meta.env.VITE_APP_API_KEY,
                "X-Access-Key": import.meta.env.VITE_APP_ACCESS_KEY,
            },
        })
            .then((response) => {
                console.log(response);
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

        fetch("https://api.jsonbin.io/v3/b/6693645cacd3cb34a865e0bb")
            .then((response) => response.json())
            .then((record) => {
                setSelectedProject(
                    record.record.projects.find(
                        (project) => project.id === projectId
                    )
                );
            })
            .catch((error) =>
                console.error("error fetching json data ", error)
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
                        createProject={setIsCreateProject}
                    />
                    {isCreateProject && (
                        <CreateProject
                            handleAddNewProject={handleAddNewProject}
                        />
                    )}
                    {!isCreateProject && selectedProject != "" && (
                        <Project project={selectedProject} />
                    )}
                    {!isCreateProject && selectedProject == "" && (
                        <PlaceHolder createProject={setIsCreateProject} />
                    )}
                </div>
            </div>
        </>
    );
}

export default App;
