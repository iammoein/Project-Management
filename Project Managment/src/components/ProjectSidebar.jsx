import logo from "../assets/logo.png";
import Button from "./Button";

export default function ProjectSidebar({
  onStartAddProject,
  onCancel,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="bg-stone-950 w-full pt-6 px-4 flex flex-col gap-8 md:w-1/5">
      <button onClick={onCancel} className="cursor-default">
        <img className="w-2/5 md:w-3/4" src={logo} alt="" />
      </button>

      <p>
        <Button onClick={onStartAddProject}>Add Project +</Button>
      </p>

      <ul>
        <h2 className="text-white uppercase font-bold mb-4">Your project</h2>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left rounded-md px-2 py-1 my-1 hover:text-stone-100 hover:bg-orange-900";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-orange-900 text-stone-100";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
