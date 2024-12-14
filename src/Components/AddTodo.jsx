import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="flex flex-col items-center justify-center py-5">
      <h1 className="font-bold text-xl">React Redux Toolkit</h1>

      <form className="mt-5" onSubmit={addTodoHandler}>
        <input
          type="text"
          className="px-3 py-1 border border-gray-300 rounded-md"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="ml-5 text-sm bg-violet-700 text-white px-3 py-2 font-semibold rounded-md hover:bg-violet-950"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
