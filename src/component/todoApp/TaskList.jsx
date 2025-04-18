import {useState} from 'react';

export default function TaskList({
    todos,
    onChangeTodo,
    onDeleteTodo
}) {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    <Task
                        todo={todo}
                        onChange={onChangeTodo}
                        onDelete={onDeleteTodo}
                    />
                </li>
            ))}
        </ul>
    );
}

function Task({todo, onChange, onDelete}) {
    const [isEditing, setIsEditing] = useState(false);
    let todoContext;
    if(isEditing) {
        todoContext = (
            <>
                <input
                    value={todo.title}
                    onChange={e => {
                        onChange({
                            ...todo,
                            title: e.target.value
                        }); 
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        todoContext = (
            <>
                {todo.title}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        )
    }

    return (
        <label>
            <input
                type="checkbox"
                checked={todo.done}
                onChange={e => {
                    onChange({
                        ...todo,
                        done: e.target.checked
                    });
                }}
            />
            {todoContext}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    );
}