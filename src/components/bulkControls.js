import { useRecoilValue } from 'recoil';

import { completeCountState } from '../recoilStateStore';

const BulkControls = ({ setTodos }) => {
    const completeCount = useRecoilValue(completeCountState);

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
