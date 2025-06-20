import "../../sass/components/_CardTodo.scss";
import type { TodoType } from "../../types/todo";
import AsideNav from "../AsideNav";
import BtnDelete from "../BtnDelete";
import Todo from "../Todo";


type CardTodoProps = {
    todos: TodoType[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
    onClearCompleted: () => void;
};

const CardTodo = ({ todos, onToggleTodo, onDeleteTodo, onClearCompleted }: CardTodoProps) => {
    return (
        <section className="card-todo">

            <div className="container-card-todos">
                {todos.map((todo) => (
                    <Todo 
                        key={todo.id}
                        task={todo}
                        onToggle={() => onToggleTodo(todo.id)}
                        onDelete={() => onDeleteTodo(todo.id)}
                    />
                ))}
            </div>

            <div className="container-footer">
                <span className="sub">5 items left</span>
                
                <AsideNav version="desk"/>
                

                <BtnDelete onClearCompleted={onClearCompleted}/>
            </div>
        </section>
    );
};

export default CardTodo;