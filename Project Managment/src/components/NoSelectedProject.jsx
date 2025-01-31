import logo from "../../public/favicon.png";
import Button from "./Button";

export default function NoSelectedProject({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-full flex flex-col items-center gap-4 mb-16 md:w-2/3">
      <img className="w-10 animate-spin-slow" src={logo} alt="logo" />
      <h2 className="text-xl text-stone-700 mb-1 font-boldf font-bold">
        No Project Selected
      </h2>

      <p className="text-stone-400 mb-1 mx-4">
        Select a project or get started with a new one
      </p>

      <p className="w-full">
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
