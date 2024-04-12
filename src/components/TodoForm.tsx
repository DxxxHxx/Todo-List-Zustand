import { useTodoStore } from "@/store/todoState";
import React from "react";

export default function TodoForm({
  value,
  onChange,
  onSubmit,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const clearTodo = useTodoStore.use.clearTodo();

  const handleClearClick = () => {
    if (!confirm("리스트의 모든 항목을 삭제하시겠습니까?")) return;
    clearTodo();
  };
  
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full p-3 m-auto md:gap-x-5 md:flex-row gap-y-3"
    >
      <input
        type="text"
        placeholder="Hello World"
        className="w-full px-2 py-1 text-black rounded-lg md:w-1/2"
        value={value}
        onChange={onChange}
        maxLength={15}
      />
      <div className="flex gap-x-3">
        <button className="p-2 text-sm border rounded-lg hover:bg-[rgba(255,255,255,.2)]">
          Add Todo
        </button>
        <button
          type="button"
          className="p-2 text-sm border rounded-lg hover:bg-red-700 hover:text-white"
          onClick={handleClearClick}
        >
          Clear Todo
        </button>
      </div>
    </form>
  );
}
