const RemoveTodo = ({ setTodos, index }) => {
    return (
        <button
            className="destroy"
            onClick={() => {
                setTodos((curr) => {
                    return curr.filter((iten, i) => i !== index);
                });
            }}
        />
    );
};

export default RemoveTodo;
