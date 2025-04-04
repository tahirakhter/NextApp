// pages/todo.tsx

"use client"; // This marks the file as a client component

import { useState, useEffect } from "react";
import { fetchTodos, addTodo, deleteTodo, updateTodo, ITodo } from "../lib";
import AddTodo from "../app/components/addTodo";
import TodoList from "../app/components/todoList";
import React from "react";
import '../app/globals.css';

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [editTask, setEditTask] = useState<ITodo | null>(null);
  const [editedText, setEditedText] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    getTodos();
  }, []);

  const handleAdd = async (task: string) => {
    const addedTodo = await addTodo(task);
    setTodos([...todos, addedTodo]);
  };

  const handleDelete = async (id: string) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: string, task: string) => {
    setEditTask({ id, task });
    setEditedText(task);
  };

  const handleSaveEdit = async () => {
    if (editedText && editTask) {
      const updatedTodo = await updateTodo({id: editTask.id, task: editedText});
      setTodos(
        todos.map((todo) =>
          todo.id === updatedTodo.id ? updatedTodo : todo
        )
      );
      setEditTask(null);
      setEditedText("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <AddTodo onAdd={handleAdd} />

        {editTask && (
          <div className="mb-4">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="px-4 py-2 border rounded-lg shadow-sm w-full"
            />
            <button
              onClick={handleSaveEdit}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Save Edit
            </button>
          </div>
        )}

        <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default TodoPage;
