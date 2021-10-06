import { useState } from 'react';
import './styles.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import NewTodoInput from './components/newTodoInput';
import ToDoList from './components/todoList';

import initTodos from './initTodos';
import BulkControls from './components/bulkControls';

export default function App() {
    const [todos, setTodos] = useState(initTodos);
    return (
        <>
            <NewTodoInput setTodos={setTodos} />
            <div>
                <ToDoList todos={todos} setTodos={setTodos} />
                <BulkControls setTodos={setTodos} />
            </div>
        </>
    );
}
