import { TfiClose } from "react-icons/tfi";
import "../../sass/components/_Todo.scss";
import Mark from "../Mark";

interface Task {
    name: string;
    isActive: boolean;
}

interface TodoProps {
    task: Task;
}

const Todo = ({ task }: TodoProps) => {
    return (
        <div className="todo">
            <div className="container-mtn">
                <Mark />

                <div className="container-name">
                    <span className="todo-name">{task.name}</span>
                </div>
            </div>

            <div className="btn-ex">
                <TfiClose />
            </div>
        </div>
    );
};

export default Todo;