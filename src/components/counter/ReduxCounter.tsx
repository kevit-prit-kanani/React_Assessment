import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, counter } from '../../store/store'

export function ReduxCounter() {
    const count = useSelector((state: counter) => state.count)
    const dispatch = useDispatch<AppDispatch>()

    function handleReduxIncrement() {
        dispatch({ type: 'counter/increment' })
    }

    function handleReduxDecrement() {
        dispatch({ type: 'counter/decrement' })
    }

    return (
        <section id="center">
            <h3>Task 2: Redux Counter</h3>
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className="counter"
                    onClick={handleReduxDecrement}
                >
                    -
                </button>

                <button type="button" className="counter">
                    {count}
                </button>

                <button
                    type="button"
                    className="counter"
                    onClick={handleReduxIncrement}
                >
                    +
                </button>
            </div>
        </section>
    )
}