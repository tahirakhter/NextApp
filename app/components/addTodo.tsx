// components/TodoInput.tsx

import React, { useState } from "react";

interface TodoInputProps {
  onAdd: (task: string) => void;
}

const AddTodo: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [newTask, setNewTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = () => {
    if (newTask.trim()) {
      onAdd(newTask);
      setNewTask(""); // Clear input after adding task
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        className="px-4 py-2 border rounded-lg shadow-sm w-full"
        placeholder="Add a new task"
      />
      <button
        onClick={handleSubmit}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
