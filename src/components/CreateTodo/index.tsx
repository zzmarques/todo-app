import { useState, type FormEvent } from "react";
import "../../sass/components/_CreateTodo.scss";
import Mark from "../Mark";
import type { TodoType } from "../../types/todo";

interface CreateTodoProps {
    onAddTodo: (todo: TodoType) => void;
}

const CreateTodo = ({ onAddTodo }: CreateTodoProps) => {

    const [inputValue, setInputValue] = useState<string>("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newTodo: TodoType = {
            name: inputValue.trim(),
            isActive: true,
        };

        onAddTodo(newTodo);
        setInputValue("");
    };


    return (
        <section className="container-create-todo">
            <Mark />
            <form className="container-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Create a new todo..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </section>
    );
};

export default CreateTodo;