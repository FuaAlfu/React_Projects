import React from 'react';

const SingleProfile = ({name, age, role}) => {
return (
<div>
<h2>{name}</h2>
<p>{role} - {age} years old</p>
</div>
)
}
export default SingleProfile;