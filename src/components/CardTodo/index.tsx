import "../../sass/components/_CardTodo.scss";
import BtnDelete from "../BtnDelete";
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

                <BtnDelete />
            </div>
        </section>
    );
};

export default CardTodo;