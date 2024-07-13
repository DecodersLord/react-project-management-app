import { useState } from "react";

export default function Sidebar({ projects, selectProject }) {
    return (
        <aside className="bg-black w-64 text-white text-2xl rounded-lg h-screen">
            <h2 className="p-6">Your Project</h2>
            <ul>
                {projects?.map((project) => (
                    <li key={project.id || project.title}>
                        <button
                            className="bg-gray-800 m-2 rounded-md w-fit px-2 py-2 text-sm"
                            onClick={() => selectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                ))}
                <button className="bg-green-800 flex m-6 rounded-md w-fit px-2 py-2 text-sm">
                    + Create Project
                </button>
            </ul>
        </aside>
    );
}
