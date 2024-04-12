import { useTodoStore } from "@/store/todoState";
import TodoList from "./todoList/TodoList";
import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ITodo, TodoStatus } from "@/types/interface";

export default function MainField() {
  const [fold, setFold] = useState(false);
  const [searchParams] = useSearchParams();
  const param = searchParams.get("status");
  const todos = useTodoStore.use.todos();

  const getStatusCount = (status: TodoStatus) => {
    const filteredList: ITodo[] = todos.filter(
      (todo) => todo.status === status
    );
    return filteredList.length;
  };

  return (
    <div className="flex flex-col my-3 gap-y-3 ">
      <div className="flex items-center justify-between px-4 py-2 font-bold md:text-xl md:px-7 md:justify-end md:gap-x-5">
        <span>To do : {getStatusCount(TodoStatus.Todo)}</span>
        <span>Doing : {getStatusCount(TodoStatus.Doing)}</span>
        <span>Done : {getStatusCount(TodoStatus.Done)}</span>
      </div>

      <div className="flex items-center justify-between px-2 py-2 border-b-2 md:px-5">
        <div className="flex items-center justify-center gap-x-2 md:gap-x-5">
          <Link to={"/?status=todo"}>
            <button
              className={`${
                !param || (param === "todo" && "bg-[rgba(255,255,255,0.2)]")
              } button`}
            >
              To do
            </button>
          </Link>
          <Link to={"/?status=doing"}>
            <button
              className={`${
                param === "doing" && "bg-[rgba(255,255,255,0.2)]"
              } button`}
            >
              Doing
            </button>
          </Link>
          <Link to={"/?status=done"}>
            <button
              className={`${
                param === "done" && "bg-[rgba(255,255,255,0.2)]"
              } button`}
            >
              Done
            </button>
          </Link>
        </div>
        <button onClick={() => setFold((prev) => !prev)} className="button">
          {fold ? "Unfold" : "Fold"}
        </button>
      </div>

      {!fold && <TodoList />}
    </div>
  );
}
