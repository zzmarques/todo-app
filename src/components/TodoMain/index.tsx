import "../../sass/components/_TodoMain.scss";
import CardTodo from "../CardTodo";
import CreateTodo from "../CreateTodo";
import Header from "../Header";

const TodoMain = () => {
    
    return (
        <main className='todo-main'>
            <Header/>

            <section className="container-todos">
                <CreateTodo/>

                <CardTodo/>
            </section>
        </main>
    );
};

export default TodoMain;