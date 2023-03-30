import React from 'react';

function Testing(){
    // h3#testing [enter]
    return(
        <React.Fragment>
            <div>
                <h2 id="testing">hi</h2>
                <Person/>
                -
                <Message/>
                React.createElement('h3',{},'yo');
            </div>
        </React.Fragment>
    )
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
    return <p>this is my message..</p>
}

export default Testing;