import React, { useState } from 'react'

function Counter(props) {

    // let count = 0;
    const [count, setCount] = useState(0);


    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p> {count} </p>
            <button onClick={() => setCount(count + 1)
                }>Increment</button>

        </div>
    )
}

export default Counter;