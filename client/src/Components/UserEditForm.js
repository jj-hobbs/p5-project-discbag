import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, Input, Button } from '@mui/material';
import { spacing } from '@mui/system';
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

    function goBack(e){
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
            if(res.ok){
                res.json().then(updateUser)
                navigate('/user')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
        navigate(`/user`)
    }

    return(
        <Container sx={{ maxWidth: 300 }} elevation={10} component={Paper}>
            <h2>Edit your profile here:</h2>
            <form onSubmit={handleSubmit}>
            <FormControl>
                <label>
                Name:
                    <Input sx={{ml:2}} type="text" name="name" placeholder={name} value={formData.name} onChange={handleChange} />
                </label>
            <label>
                Email:
                <Input sx={{ml:2}} type="text" name="email" placeholder={email} value={formData.email} onChange={handleChange} />
            </label>
            <label>
                Password:
                <Input sx={{ml:2}} type="password" name="password" placeholder={"Choose a new password"} value={formData.password} onChange={handleChange} />
            </label>
            <label>
                Username:
                <Input sx={{ml:2}} type="text" name="username" placeholder={username} value={formData.username} onChange={handleChange} />
            </label>
            <Button variant="contained" type="submit" style={{color:"#ffffff", backgroundColor: "rgb(46, 69, 84)"}}>Save</Button>
            <br />
            <Button variant="contained" type="submit" style={{color:"#ffffff", backgroundColor: "rgb(46, 69, 84)"}} onClick={e=>goBack(e)}>Back</Button>
            <br />
            </FormControl>
            </form>
        </Container>
    )
}

export default UserEditForm;