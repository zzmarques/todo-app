import { useState } from "react";
import "../../sass/components/_TodoMain.scss";
import AsideNav from "../AsideNav";
import CardTodo from "../CardTodo";
import CreateTodo from "../CreateTodo";
import Header from "../Header";
import type { TodoType } from "../../types/todo";

const TodoMain = () => {

    const [todos, setTodos] = useState<TodoType[]>([]);

    const handleAddTodo = (todo: TodoType) => {
        setTodos((prev) => [...prev, todo]);
    };    
    
    return (
        <main className='todo-main'>
            <Header/>

            <section className="container-todos">
                <CreateTodo onAddTodo={handleAddTodo}/>

                <CardTodo todos={todos}/>

                <AsideNav/>
            </section>

            <div className="conatiner-text">
                <p>Drag and drop to reorder list</p>
            </div>
        </main>
    );
};

export default TodoMain;