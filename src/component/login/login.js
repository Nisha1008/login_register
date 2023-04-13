import React, { useState } from 'react'
import "./login.css"
import axios from "axios"
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login")
            .then(res => alert(res.data.message))

    }

    return (
        <div>
            <div className='login'>
                {
                    console.log(user)
                }
                <h1>Login</h1>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter your Email' />
                <input type="password" name="password" value={user.password} onChange={handleChange} placeholder='"Enter your password' />
                <div className="button" onClick={login}>Login</div>
                <div>or</div>
                <div className="button">Register</div>
            </div>
        </div>
    )
}

export default Login
