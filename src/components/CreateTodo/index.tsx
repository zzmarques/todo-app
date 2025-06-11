import "../../sass/components/_CreateTodo.scss";


const CreateTodo = () => {

    return (
        <section className="container-create-todo">
            <div className="mark">

            </div>

            <div className="container-input">
                <input type="text" name="todo" id="todo" placeholder="Create a new todo.."/>
            </div>
        </section>
    );
};

export default CreateTodo;