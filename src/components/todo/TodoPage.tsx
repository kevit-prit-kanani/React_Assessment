import { Provider, useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { add, type TodoData } from '../../redux/slice/todoSlice'
import { todoStore, type TodoAppDispatch, type TodoRootState } from '../../redux/store/todoStore'

export function TodoPage() {
    return (
        // this will separate the redux counter from this redux toolkit todo. :) 
        <Provider store={todoStore}>
            <TodoPageContent />
        </Provider>
    )
}

function TodoPageContent() {
    const todos = useSelector((state: TodoRootState) => state.todos)
    const [todoTitle, setTodoTitle] = useState('')
    const dispatch = useDispatch<TodoAppDispatch>()

    const addTodo = () => {

        if (!todoTitle) {
            return
        }

        dispatch(
            add({
                id: String(Date.now()),
                title: todoTitle,
            }),
        )

        setTodoTitle('')
    }

    return (
        <>
            <h1>Todos</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter todo title"
                    value={todoTitle}
                    onChange={(e) => setTodoTitle(e.target.value)}
                />
                <button onClick={addTodo} className="bg-blue-500 text-white">
                    Add Todo
                </button>
            </div>
            <ul>
                {todos.map((todo: TodoData) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}