import React, { useState } from 'react';

const Counter = () => {
// for testing 

const [count, setCount] = useState(0);

// create an event handler that increases the count by 1
const handleIncreaseCount = () => setCount(count + 1)

// create an event handler that decreases the count by 1
const handleDecreaseCount = () => setCount(count - 1)

return (
<div>
Count: {count} <br/>
<button 
onClick={handleIncreaseCount}>Increase Count</button> | 
<button 
onClick={handleDecreaseCount}>Decrease Count </button>
</div>
)};

export default Counter