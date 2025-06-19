import { TfiClose } from "react-icons/tfi";
import "../../sass/components/_Todo.scss";
import Mark from "../Mark";
import type { TodoType } from "../../types/todo";

type TodoProps = {
    task: TodoType;
    onToggle: () => void;
    onDelete: () => void;
};

const Todo = ({ task, onToggle, onDelete }: TodoProps) => {
    return (
        <div className={`todo ${task.isActive ? "complete" : ""}`}>
            <div className="container-mtn">
                <Mark isActive={task.isActive} onToggle={onToggle} />

                <div className="container-name">
                    <span className="todo-name">{task.name}</span>
                </div>
            </div>

            <div className="btn-ex" onClick={onDelete}>
                <TfiClose />
            </div>
        </div>
    );
};

export default Todo;