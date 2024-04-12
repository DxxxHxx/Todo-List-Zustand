import { useTodoStore } from "@/store/todoState";
import { ITodo, TodoStatus } from "@/types/interface";
import { Trash2 } from "lucide-react";
import React from "react";

export default function TodoItem(props: ITodo) {
  const removeTodo = useTodoStore.use.removeTodo();
  const setTodoStatus = useTodoStore.use.setTodoStatus();
  const todos = useTodoStore.use.todos();
  const todo = todos.find((item) => item.id === props.id);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTodoStatus(props.id, e.currentTarget.value as TodoStatus);
  };

  const handleItemDelete = () => {
    if (!confirm(`${props.content} (${todo?.status})를 삭제합니다.`)) return;
    removeTodo(props.id);
  };
  return (
    <li
      key={props.id}
      className="flex items-center justify-between px-2 py-2 border rounded-lg md:px-5 gap-x-3"
    >
      <div className="flex items-center justify-start w-2/3 ">
        <span
          className={`${
            todo?.status === TodoStatus.Done ? "line-through decoration-2" : ""
          } md:text-xl`}
        >
          {props.content}
        </span>
      </div>

      <div className="flex items-center gap-x-3">
        <select
          onChange={handleStatusChange}
          className="bg-transparent md:px-3 "
          value={todo?.status}
        >
          <option value={TodoStatus.Todo}>To Do</option>
          <option value={TodoStatus.Doing}>Doing</option>
          <option value={TodoStatus.Done}>Done</option>
        </select>
        <button onClick={handleItemDelete}>
          <Trash2 className="text-red-500 size-5" />
        </button>
      </div>
    </li>
  );
}
