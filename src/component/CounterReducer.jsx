import { useReducer } from "react";

function reducer(state, action) {
    switch(action.type) {
        case 'incremented_age':
            return {age: state.age + 1};
        case 'decremented_age':
            return {age: state.age - 1};
        case 'set_age':
            return {age: 42};
        default:
            throw Error('Unknown action.');
    }
}

export default function CounterReducer() {    
    // state: trạng thái hiện tại
    // dispatch: hàm gửi để các hành động đến reducer
    const [state, dispatch] = useReducer(reducer, {age: 42}); 

    return (
        <>
            <button onClick={() => {
                dispatch({type: 'incremented_age'})
            }}>
                Increment age
            </button>
            <button onClick={() => {
                dispatch({type: 'decremented_age'})
            }}>
                Decrement age
            </button>
            <button onClick={() => {
                dispatch({type: 'set_age'})
            }}>
                Set age
            </button>
            
            <p>Hello! You are {state.age}</p>
        </>
    );
}