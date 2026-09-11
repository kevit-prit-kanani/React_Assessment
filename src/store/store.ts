import { createStore, type Reducer } from 'redux'

export type CounterState = {
  count: number
}

export type CounterAction =
  | { type: 'counter/increment' }
  | { type: 'counter/decrement' }

const initialState: CounterState = {
  count: 0,
}

const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'counter/increment':
      return { ...state, count: state.count + 1 }
    case 'counter/decrement':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

export const store = createStore(counterReducer)

export type counter = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
