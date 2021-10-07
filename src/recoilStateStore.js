import { atom, selector } from 'recoil';

import initTodos from './initTodos';

const todoState = atom({
    key: 'todoState', // unique ID (with respect to other atoms/selectors)
    default: initTodos // default value (aka initial value)
});

const fooState = atom({
    key: 'fooState', // unique ID (with respect to other atoms/selectors)
    default: 1 // default value (aka initial value)
});

const barState = atom({
    key: 'barState', // unique ID (with respect to other atoms/selectors)
    default: 2 // default value (aka initial value)
});

const completeCountState = selector({
    key: 'completeCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const todos = get(todoState);

        return todos.filter((todo) => todo.complete).length;
    }
});

const countState = selector({
    key: 'completeCountState', // unique ID (with respect to other atoms/selectors)
    get: ({ get }) => {
        const foo = get(fooState);
        const bar = get(barState);

        return foo + bar;
    }
});

export { todoState, completeCountState };
