import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './../slice/todoSlice'

export const todoStore = configureStore({
  reducer: todoReducer,
})

export type TodoRootState = ReturnType<typeof todoStore.getState>
export type TodoAppDispatch = typeof todoStore.dispatch