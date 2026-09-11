import { useState } from "react";

export function SimpleCounter() {
    const [simpleCounter, setSimpleCounter] = useState(0)

    function handleIncrement() {
        return setSimpleCounter(simpleCounter + 1)
    }

    function handleDicrement() {
        return setSimpleCounter(simpleCounter - 1)
    }

    return (
        <section id="center">
            <h3>Task 1: Simple Counter</h3>
            <div className="flex items-center gap-4">
                <button
                    type="button"
                    className="counter"
                    onClick={handleDicrement}
                >
                    -
                </button>

                <button
                    type="button"
                    className="counter"
                >
                    {simpleCounter}
                </button>

                <button
                    type="button"
                    className="counter"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </section>
    )

}