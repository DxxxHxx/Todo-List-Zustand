import { useTodoStore } from "@/store/todoState";
import TodoItem from "./TodoItem";
import { useSearchParams } from "react-router-dom";
import { ITodo, TodoStatus } from "@/types/interface";

export default function TodoList() {
  const todos = useTodoStore.use.todos();
  const [searchParams] = useSearchParams();
  const param = searchParams.get("status");

  const filterTodoList = (status: TodoStatus) => {
    const filteredList: ITodo[] = todos.filter(
      (todo) => todo.status === status
    );
    return filteredList.map((item) => <TodoItem {...item} key={item.id} />);
  };

  const renderTodoList = () => {
    if (!param || param === "todo") {
      return filterTodoList(TodoStatus.Todo);
    } else if (param === "doing") {
      return filterTodoList(TodoStatus.Doing);
    } else {
      return filterTodoList(TodoStatus.Done);
    }
  };

  return <ul className="flex flex-col p-2 gap-y-3">{renderTodoList()}</ul>;
}
