import RemoveTodo from './removeTodo';

const ToDoItem = ({ text, complete, index, setTodos }) => {
    return (
        <li>
            <div className="view">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={complete}
                    onChange={() => {
                        setTodos((curr) => {
                            return curr.map((item, i) => {
                                return {
                                    ...item,
                                    complete:
                                        index === i ? !complete : item.complete
                                };
                            });
                        });
                    }}
                />
                <label>{text}</label>
                <RemoveTodo index={index} setTodos={setTodos} />
            </div>
        </li>
    );
};

export default ToDoItem;
