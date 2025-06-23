import { useState } from "react";
import { useTodoFilter } from "../../hooks/useTodoFilter";
import type { TodoType } from "../../types/todo";
import AsideNav from "../AsideNav";
import CardTodo from "../CardTodo";
import CreateTodo from "../CreateTodo";
import Header from "../Header";
import "../../sass/components/_TodoMain.scss";

const TodoMain = () => {

    const [todos, setTodos] = useState<TodoType[]>([]);
    const [allCompleted, setAllCompleted] = useState<boolean>(false);
    const { filter, setFilter, filteredTasks } = useTodoFilter(todos);

    const handleToggleAll = () => {
        const newStatus = !allCompleted;
        setTodos(prev => prev.map(todo => ({ ...todo, isActive: newStatus })));
        setAllCompleted(newStatus);
    };

    const handleAddTodo = (name: string) => {
        const newTodo: TodoType = {
            id: Date.now(),
            name,
            isActive: false,
        };

        setTodos((prev) => [...prev, newTodo]);
    };

    const handleToggleTodo = (id: number) => {
        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === id ? { ...todo, isActive: !todo.isActive } : todo
            )
        );
    };

    const handleDeleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }; 

    const handleClearCompleted = () => {
        setTodos(prev => prev.filter(todo => !todo.isActive));
    } 
    
    return (
        <main className='todo-main'>
            <Header/>

            <section className="container-todos">
                <CreateTodo 
                    onAddTodo={handleAddTodo} 
                    onToggleAll={handleToggleAll}
                    allCompleted={allCompleted}
                />

                <CardTodo 
                    todos={filteredTasks}
                    onToggleTodo={handleToggleTodo}
                    onDeleteTodo={handleDeleteTodo}
                    onClearCompleted={handleClearCompleted}
                />

                <AsideNav 
                    version="mob" 
                    onChangeFilter={setFilter} 
                    currentFilter={filter}
                />
            </section>

            <div className="conatiner-txt">
                <p>Drag and drop to reorder list</p>
            </div>
        </main>
    );
};

export default TodoMain;