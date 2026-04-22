import React, {useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username, setUsername] = userState('')
    const [password, setPassword] = userState('')

    const {setUser} = UseContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password})
    }
    return(
        <div>
            <h1>Login</h1>
            <input type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username" />
            <input type="text" 
            value={username}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password" />
            <button onClick={handleSubmit}></button>
        </div>
    )
} 

export default Login;