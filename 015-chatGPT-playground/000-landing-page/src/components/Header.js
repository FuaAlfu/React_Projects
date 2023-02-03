import React, { useState } from 'react';

function Header() {

// set default date
const date = new Date();
let minutes = date.getMinutes();

// create a state to store the paragraph text and times of day
const [timeText, setTimeText] = useState('Good Morning');

// if-else logic to change state depending on the current time
if (minutes > 12 && minutes < 18 ) {
setTimeText('Good Afternoon');
} else if (minutes >= 18 && minutes <= 24) {
setTimeText('Good Evening');
}


return (
<div>
  <h1>Hello Sun!</h1>
  <p>{timeText} ,How Are You Today?</p>
</div>
);
}
export default Header;