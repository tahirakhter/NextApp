import { API_URL } from "./todo.constants";
import { ITodo } from "./todo.model";

export const fetchTodos = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export const addTodo = async (task: string) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: Date.now().toString(), // Generate a unique ID
      task,
    }),
  });
  const data = await res.json();
  return data;
};

export const deleteTodo = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
};

export const updateTodo = async (todo: ITodo) => {
  const {id, task } = todo;
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  return data;
};
