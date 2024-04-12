import React, { useState } from "react";
import TodoForm from "./../components/TodoForm";
import MainField from "@/components/MainField";
import { useTodoStore } from "@/store/todoState";
import { Link } from "react-router-dom";
import MoveTop from "@/components/MoveTop";

export default function Home() {
  const [todoContent, setTodoContent] = useState("");
  const addTodo = useTodoStore.use.addTodo();

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todoContent) return;
    addTodo(todoContent);
    setTodoContent("");
  };
  return (
    <div className="flex flex-col w-full text-center">
      <Link to={"/"}>
        <h1 className="p-3 my-3 text-4xl border-b-2 md:text-6xl">Todo List</h1>
      </Link>
      <TodoForm
        value={todoContent}
        onChange={handleContentChange}
        onSubmit={handleSubmit}
      />
      <MainField />
      <MoveTop />
    </div>
  );
}
