import './styles.css';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

import NewTodoInput from './components/newTodoInput';
import ToDoList from './components/todoList';

import BulkControls from './components/bulkControls';

export default function App() {
    return (
        <>
            <NewTodoInput />
            <div>
                <ToDoList />
                <BulkControls />
            </div>
        </>
    );
}
