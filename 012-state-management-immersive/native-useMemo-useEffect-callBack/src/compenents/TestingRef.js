import { useRef, useEffect } from "react";

{/*
using it in many cases
like get a ref from html element
*/} 
const TestingRef = () => {
    const inputRef = useRef(null);

    render(
        <div>
             <h1>Hoo</h1>
             <input type="text" ref={inputRef} />
        </div>
    )
}

export default TestingRef;