
// components/TodoItem.tsx

import React from "react";

interface TodoItemProps {
  id: string;
  task: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, task: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, task, onDelete, onEdit }) => {
  return (
    <div className="flex justify-between items-center mb-3 p-3 bg-white shadow-lg rounded-lg">
      <span>{task}</span>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(id, task)}
          className="bg-yellow-400 text-white px-3 py-1 rounded-lg"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
