import "../../sass/components/_CardTodo.scss";
import Todo from "../Todo";


const CardTodo = () => {
    return (
        <section className="card-todo">

            <div className="container-card-todos">
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
                <Todo/>
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