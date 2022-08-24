import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

function LoginPage({ handleLogin }) {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { username, password } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => 
              {
                handleLogin(user)
                navigate('/') //change to user
              })
            } else {
              r.json().then(json => setErrors(Object.entries(json.errors)))
            }
        });
        setFormData({
            username: '',
            password: ''
        })
    }

    return(
        <Box>
            <h1 style={{color:"rgb(46, 69, 84)"}}>
                Login
            </h1>
            <form onSubmit={handleSubmit}>
                <TextField 
                    required
                    id="outlined-required"
                    label="Required"
                    placeholder="Username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                >
                </TextField>
                <br />
                <br />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                >
                </TextField>
                <br />
                <br />
                <Button style={{color:"#eff0f2", backgroundColor: "#2d433c"}} type="submit">
                    Login
                </Button>
            </form>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
        </Box>
    )
}

export default LoginPage;