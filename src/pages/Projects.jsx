import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, SetProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => SetProjects(data));
  }, []);
  return (
    <>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id} style={{ marginBottom: "20px" }}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </>
  );
}
