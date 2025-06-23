import { useTodoFilter } from "../../hooks/useTodoFilter";
import type { TodoType } from "../../types/todo";
import AsideNav from "../AsideNav";
import BtnDelete from "../BtnDelete";
import Todo from "../Todo";
import "../../sass/components/_CardTodo.scss";

type CardTodoProps = {
    todos: TodoType[];
    onToggleTodo: (id: number) => void;
    onDeleteTodo: (id: number) => void;
    onClearCompleted: () => void;
};

const CardTodo = ({ todos, onToggleTodo, onDeleteTodo, onClearCompleted }: CardTodoProps) => {

    const { filter, setFilter, filteredTasks } = useTodoFilter(todos);

    const remainingTodos: number = todos.filter(todo => !todo.isActive).length;

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