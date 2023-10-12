import Navbar from "./Navbar";
import { useState } from "react";

const SignUp = () => {
const [user, setUser] = useState({
  email:"",
  password:"",
})
let name, value;
function userInput(e) {
name=e.target.name;
value=e.target.value;
setUser({...user, [name]:value});
}

const submit = async (e) => {
e.preventDefault();
const res = await fetch("https://signup-dae50-default-rtdb.firebaseio.com/signup.json",
{method:"post",
headers: {
  "Content-type":"application.json",
},
body:JSON.stringify({
  email:user.email,
  password:user.password
}) 
})
}

  return (
    <div>
   <Navbar/>
      <div class="form-container">
      <h1>Sign Up</h1>
      <form action="/signup" method="post">
      <input type="text" name="email" onChange={userInput} value={user.email} placeholder="Email Address"/>
      <input type="password" name="password" onChange={userInput} value={user.password} placeholder="Password"/>

<input type="submit" value="Sign Up" onClick={submit}/>




      </form>




  </div>

    </div>
  )
}

export default SignUp
