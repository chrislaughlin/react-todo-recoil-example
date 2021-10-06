import { atom, selector } from 'recoil';

import initTodos from './initTodos';

const todoState = atom({
    key: 'todoState', // unique ID (with respect to other atoms/selectors)
    default: initTodos // default value (aka initial value)
});

const completeCountState = selector({
    key: 'completeCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const todos = get(todoState);

        return todos.filter((todo) => todo.complete).length;
    }
});

export { todoState, completeCountState };
