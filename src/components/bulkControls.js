import { useRecoilValue } from 'recoil';

import { completeCountState, todoState } from '../recoilStateStore';

import {
    useRecoilState
} from 'recoil';

const BulkControls = () => {
    const completeCount = useRecoilValue(completeCountState);
    const [todos, setTodos] = useRecoilState(todoState);

    return (
        <div>
            <button
                onClick={() => {
                    setTodos((curr) => {
                        return curr.map((todo) => {
                            return {
                                ...todo,
                                complete: true
                            };
                        });
                    });
                }}
            >
                Complete All
            </button>
            <span>{completeCount}</span>
        </div>
    );
};

export default BulkControls;
