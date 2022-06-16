import { FC } from "react";
import { TodoItem } from "./TodoItem";
import { ITodo } from "./Card";
interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}
const TodoList: FC<ITodoListProps> = (props) => {
  const { items, toggleTodo, removeTodo } = props;
  return (
    <div>
      {props.items.map((el) => (
        <TodoItem 
        key={el.id} {...el} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
      ))}
    </div>
  );
};
export { TodoList };
