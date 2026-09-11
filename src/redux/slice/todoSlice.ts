import { createSlice } from "@reduxjs/toolkit"

export type TodoData = {
    id: string,
    title: string
}

export type ListTodoData = {
    todos: Array<TodoData>
}

const state: ListTodoData = {
    todos: []
}

const slice = createSlice({
    name: 'todo',
    initialState: state,
    reducers: {
        add: (state, action) => { state.todos.push(action.payload) }
    }
})


export default slice.reducer;
export const { add } = slice.actions