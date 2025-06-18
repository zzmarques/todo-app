import "../../sass/components/_CardTodo.scss";
import type { TodoType } from "../../types/todo";
import BtnDelete from "../BtnDelete";
import Todo from "../Todo";


interface TodoListProps {
    todos: TodoType[];
}

const CardTodo = ({ todos }: TodoListProps) => {
    return (
        <section className="card-todo">

            <div className="container-card-todos">
                {todos.map((task, index) => (
                    <Todo key={index} task={task} />
                ))}
            </div>

            <div className="container-footer">
                <span className="sub">5 items left</span>

                <BtnDelete />
            </div>
        </section>
    );
};

export default CardTodo;