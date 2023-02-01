import React from "react";
import { Link } from 'react-router';

const Login = () =>{
return (
<div id = "webapp">

<h1>Welcome to YourWebApp!</h1> 

<p id="LandingDescription"> 
A custom website for your business that's easy to manage and maintain. 
</p>

<Link to="/CreateLogin"><button className="registerBtn">
 Create an Account 
 </button></Link>
 {/* End of link */}
<Link to="/ViewLogin"><button className="loginBtn"> Login </button></Link>

</div>
);
}
export default Login;