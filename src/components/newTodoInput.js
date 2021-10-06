import React, { useState } from 'react';

const NewTodoInput = ({ setTodos }) => {
    const [newTodo, setNewTodo] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setTodos((curr) => {
                return [
                    {
                        text: newTodo,
                        complete: false
                    },
                    ...curr
                ];
            });
            setNewTodo('');
        }
    };

    return (
        <div data-reactid=".0">
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    value={newTodo}
                    onChange={(evt) => setNewTodo(evt.target.value)}
                    onKeyPress={handleKeyPress}
                />
            </header>
        </div>
    );
};

export default NewTodoInput;
