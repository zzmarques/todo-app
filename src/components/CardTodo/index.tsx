import { TfiClose } from "react-icons/tfi";
import "../../sass/components/_CardTodo.scss";


const CardTodo = () => {
    return (
        <section className="card-todo">

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

            <div className="container-footer">
                <span className="sub">5 items left</span>

                <div className="btn-clear">
                    <span className="sub">Clear Completed</span>
                </div>
            </div>
        </section>
    );
};

export default CardTodo;