import { useState, type FormEvent } from "react";
import "../../sass/components/_CreateTodo.scss";
import Mark from "../Mark";

type CreateTodoProps = {
    onAddTodo: (name: string) => void;
    onToggleAll: () => void;
    allCompleted: boolean;
};

const CreateTodo = ({ onAddTodo, onToggleAll, allCompleted }: CreateTodoProps) => {

    const [input, setInput] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        onAddTodo(input.trim());
        setInput("");
    };


    return (
        <section className="container-create-todo">
            <Mark isActive={allCompleted} onToggle={onToggleAll}/>
            <form className="container-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="Create a new todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </form>
        </section>
    );
};

export default CreateTodo;