import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, Input, Button, FormLabel, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

function UserEditForm({ user, updateUser }) {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { name, email, username, password } = user
    const [formData, setFormData] = useState({
        "name": name,
        "email": email,
        "username": username,
        "password": password
    })

    function handleChange(e) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    function goBack(e) {
        e.preventDefault()
        navigate(`/user`)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(updateUser)
                    navigate('/user')
                } else {
                    res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
                }
            })
        navigate(`/user`)
    }

    return (
        <Container sx={{ width: 1, backgroundColor: "#7d977d" }} elevation={10} component={Paper}>
            <br />
            <Typography color="#eff0f2" >
                <h2>Edit your profile here:</h2>
            </Typography>
            <FormControl onSubmit={handleSubmit} align="center">
                <FormLabel sx={{ color: "#2d433c" }}>
                    Name:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        type="text"
                        name="name"
                        placeholder={name}
                        value={formData.name}
                        onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel sx={{ color: "#2d433c" }}>
                    Email:
                    <Input sx={{ ml: 2, color: "#eff0f2" }} type="text" name="email" placeholder={email} value={formData.email} onChange={handleChange} />
                </FormLabel>
                <FormLabel sx={{ color: "#2d433c" }}>
                    Password:
                    <Input sx={{ ml: 2, color: "#eff0f2" }} type="password" name="password" placeholder={"Choose a new password"} value={formData.password} onChange={handleChange} />
                </FormLabel>
                <FormLabel sx={{ color: "#2d433c" }}>
                    Username:
                    <Input sx={{ ml: 2, color: "#eff0f2" }} type="text" name="username" placeholder={username} value={formData.username} onChange={handleChange} />
                </FormLabel>
                <div>
                    <Button sx={{ m: .5, width: .4, p: 1, backgroundColor: "#2d433c", color: "#eff0f2", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" }}}>Save</Button>
                    <Button sx={{ m: .5, width: .4, p: 1, backgroundColor: "#2d433c", color: "#eff0f2", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" }}} onClick={e => goBack(e)}>Back</Button>
                </div>
                <br />
            </FormControl>
        </Container>
    )
}

export default UserEditForm;