import React, { useState } from 'react' 
function State() {
    const [count, setcount] = useState(0)
    return (
        <>
            <p>You clicked {count} times</p>
            <button className='border p-1 rounded'
                onClick={() => {
                    setcount(count + 1)
                }}>
                Click
                </button>
        </>
    )
}
export default State