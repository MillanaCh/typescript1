import { FC, useState, useEffect, useRef } from "react";
import "./App.css";
import { TodoList } from "./components/TodoList";
import { ITodo } from "./components/Card";
const [value, setValue] = useState("");
const [todos, setTodos] = useState<ITodo[]>([]);

const inputRef = useRef<HTMLInputElement>(null);
const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
  setValue(e.target.value);
};
const addTodo = () => {
  if (value) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: value,
        complete: false,
      },
    ]);
    setValue("");
  }
};

const handleDone: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
  if (e.key === "Enter") addTodo();
};

const removeTodo = (id: number): void => {
  setTodos(todos.filter((el) => el.id !== id));
};
const toggleTodo = (id: number): void => {
  setTodos(
    todos.map((el) => {
      if (el.id !== id) return el;
      return {
        ...el,
        complete: !el.complete,
      };
    })
  );
};

useEffect(() => {
  if (inputRef.current) inputRef.current.focus;
}, []);
const App: FC = () => {
  return (
    <div>
      <div>
        <input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          onKeyDown={handleDone}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <TodoList items={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

export { App };
