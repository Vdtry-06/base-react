import {useState} from 'react';
import AddTodo from './todoApp/AddTodo';
import TaskList from './todoApp/TaskList';

let nextId = 3;
const initialTodos = [
    {id: 0, title: 'Milk', done: true},
    {id: 1, title: 'Tea', done: false},
    {id: 2, title: 'Snack', done: true},
];

export default function TaskApp() {
    const [todos, setTodos] = useState(initialTodos);   

    function handleAddTodo(title) {
        setTodos([
            ...todos,
            {
                id: nextId++,
                title: title,
                done: false
            }
        ]);
    }

    function handleChangeTodo(nextTodo) {
        setTodos(todos.map(t => {
            if(t.id === nextTodo.id) {
                return nextTodo;
            } else {
                return t;
            }
        })
        );
    }

    function handleDeleteTodo(todoId) {
        setTodos(
            todos.filter(t => t.id !== todoId)
        );
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList 
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    );
}