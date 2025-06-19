import { useState } from "react";
import "../../sass/components/_TodoMain.scss";
import AsideNav from "../AsideNav";
import CardTodo from "../CardTodo";
import CreateTodo from "../CreateTodo";
import Header from "../Header";
import type { TodoType } from "../../types/todo";

const TodoMain = () => {

    const [todos, setTodos] = useState<TodoType[]>([]);
    const [allCompleted, setAllCompleted] = useState<boolean>(false);

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
                    todos={todos}
                    onToggleTodo={handleToggleTodo}
                    onDeleteTodo={handleDeleteTodo}
                />

                <AsideNav version="mob"/>
            </section>

            <div className="conatiner-text">
                <p>Drag and drop to reorder list</p>
            </div>
        </main>
    );
};

export default TodoMain;