import React, { useState } from "react";
// import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

function SignupPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { name, email, username, password } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    console.log(user)
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setFormData({
            name: '',
            email: '',
            username: '',
            password: ''
        })
    }

    return(
        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}>
        <h1 style={{color:"rgb(46, 69, 84)"}}>
            Sign up
        </h1>
        <form onSubmit={handleSubmit}>
            <TextField 
                required
                id="outlined-required"
                label="Name"
                defaultValue="Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
            />
            <br />
            <br />
            <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
            />
            <br />
            <br />
            <TextField
                required
                id="outlined-required"
                label="Username"
                placeholder="Username"
                type='text'
                name='username' 
                value={username} 
                onChange={handleChange}
            />
            <br />
            <br />
            <TextField
                required
                id="outlined-required"
                label="Password"
                placeholder="Password" 
                type='password' 
                name='password' 
                value={password} 
                onChange={handleChange}
            />
            <br />
            <br />
            <Button
                style={{color:"#eff0f2", backgroundColor: "#2d433c"}}
                type="submit"
            >
                SIGN UP! 
            </Button>
        </form>
        {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) : null }
        </Box>
    )
}

export default SignupPage;