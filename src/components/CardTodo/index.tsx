import { useState } from "react";
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

    const [filter, setFilter] = useState<"all" | "active" | "completed" | "">("");

    const remainingTodos: number = todos.filter(todo => !todo.isActive).length;

    const filteredTasks = todos.filter((task) => {
        if (filter === "all") return true;
        if (filter === "active") return !task.isActive;
        if (filter === "completed") return task.isActive;
        return true;
    });

    return (
        <section className="card-todo">

            <div className="container-card-toados">
                {filteredTasks.map((todo) => (
                    <Todo 
                        key={todo.id}
                        task={todo}
                        onToggle={() => onToggleTodo(todo.id)}
                        onDelete={() => onDeleteTodo(todo.id)}
                    />
                ))}
            </div>

            <div className="container-footer">
                <span className="sub">{remainingTodos} items left</span>
                
                <AsideNav 
                    version="desk"
                    onChangeFilter={setFilter}
                    currentFilter={filter} 
                />
                

                <BtnDelete onClearCompleted={onClearCompleted}/>
            </div>
        </section>
    );
};

export default CardTodo;