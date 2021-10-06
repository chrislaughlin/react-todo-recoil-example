import ToDoItem from './todoItem';

const ToDoList = ({ todos, setTodos }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => {
                return (
                    <ToDoItem
                        {...todo}
                        key={index}
                        index={index}
                        setTodos={setTodos}
                    />
                );
            })}
        </ul>
    );
};

export default ToDoList;
