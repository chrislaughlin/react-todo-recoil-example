import RemoveTodo from './removeTodo';

import {
    useRecoilState
} from 'recoil';
import { todoState } from '../recoilStateStore';

const ToDoItem = ({ text, complete, index }) => {
    const [, setTodos] = useRecoilState(todoState);

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
