import React, { useState } from 'react';

import {
    useRecoilState
} from 'recoil';

import { todoState } from '../recoilStateStore';

const NewTodoInput = () => {
    const [newTodo, setNewTodo] = useState('');
    const [, setTodos] = useRecoilState(todoState);

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
