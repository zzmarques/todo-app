import "../../sass/components/_TodoMain.scss";
import CreateTodo from "../CreateTodo";
import Header from "../Header";

const TodoMain = () => {
    
    return (
        <main className='todo-main'>
            <Header/>

            <CreateTodo/>
        </main>
    );
};

export default TodoMain;