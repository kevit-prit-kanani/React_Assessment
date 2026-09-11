import { useState } from "react";

export function ToggleParagraph() {
    const [toggle, setToggle] = useState(true)

    return (
        <>
            <button onClick={() => { setToggle(!toggle) }}>
                {toggle ? "hide" : "Show"}
            </button>
            {toggle && <p> This paragraph will toggle</p>}
        </>
    )

}