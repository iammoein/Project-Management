import { useState } from "react";
import Button from "./Button";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEneteredTask] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setEneteredTask(event.target.value);
    setError("");
  }

  function handleClick() {
    if (enteredTask !== "") {
      onAdd(enteredTask);
      setEneteredTask("");
    } else {
      setError("Task cannot be empty");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-50 focus:outline-none focus:border focus:border-orange-500"
        onChange={handleChange}
        value={enteredTask}
      />
      <Button onClick={handleClick}>Add Task</Button>
      {error && <span className="text-orange-500">{error}</span>}
    </div>
  );
}
