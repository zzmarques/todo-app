import { TfiClose } from "react-icons/tfi";
import "../../sass/components/_Todo.scss";


const Todo = () => {
    return (
        <div className="todo">
            <div className="container-mtn">
                <div className="mark"></div>

                <div className="container-name">
                    <span className="todo-name">Complete online JavaScript course</span>
                </div>
            </div>

            <div className="btn-ex">
                <TfiClose />
            </div>
        </div>
    );
};

export default Todo;