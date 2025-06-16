import "../../sass/components/_CreateTodo.scss";
import Mark from "../Mark";


const CreateTodo = () => {

    return (
        <section className="container-create-todo">
            <Mark />
            <div className="container-input">
                <input type="text" name="todo" id="todo" placeholder="Create a new todo.."/>
            </div>
        </section>
    );
};

export default CreateTodo;