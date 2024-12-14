import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { Trash2 } from "lucide-react";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-center font-semibold">
        Todos List
      </div>
      {todos.map((todo) => (
        <div className="flex items-center justify-center">
          <li
            key={todo.id}
            className="mt-4 flex justify-between  items-center bg-violet-700 px-4 py-2 rounded w-1/2 "
          >
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              {" "}
              <Trash2 className="text-white" size={16} />{" "}
            </button>
          </li>
        </div>
      ))}
    </>
  );
};

export default Todos;
