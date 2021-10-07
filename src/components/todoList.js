import ToDoItem from './todoItem';

import {
    useRecoilState
} from 'recoil';
import { todoState } from '../recoilStateStore';

const ToDoList = () => {
    const [todos] = useRecoilState(todoState);
    return (
        <ul className="todo-list">
            {todos.map((todo, index) => {
                return (
                    <ToDoItem
                        {...todo}
                        key={index}
                        index={index}
                    />
                );
            })}
        </ul>
    );
};

export default ToDoList;
