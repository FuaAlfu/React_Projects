import React, {useState} from 'react';

const Toggle = () => {

const [toggleStatus, setToggleStatus] = useState(false);

return (
<div>
    <h1> Toggle Component </h1>
    <button onClick={() => setToggleStatus(!toggleStatus)}>
    { toggleStatus ? 'ON' : 'OFF' }
    </button>
</div>
);
}

export default Toggle