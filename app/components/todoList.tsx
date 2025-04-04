// components/TodoList.tsx

import React from "react";
import TodoItem from "./todoItem";
import { ITodo } from "../../lib/services/todo/todo.model";

interface TodoListProps {
  todos: ITodo[];
  onDelete: (id: string) => void;
  onEdit: (id: string, task: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;
