import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import { Container } from "@mui/system";

function User({ user, deleteUser }) {
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [alert, setAlert] = useState(false)

    function handleDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            if(res.ok){
                deleteUser(params.id)
                navigate('/')
            } else {
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
        })
    }

    let userInfo;
    if (user) {
        const { name, username, email } = user
        userInfo = 
            <Container sx={{ backgroundColor: "#3a5a40" }}>
            <br />
            <Typography sx={{ color: "white" }}>
                <h2>Hello, {user.name}!</h2>
            </Typography>
            <Typography sx={{ color: "white" }}>Your profile info:</Typography>
            <br />
            <Typography sx={{ color: "white" }}>
                Name: {name}
                <br />
                Username: {username}
                <br />
                Email: {email}
            </Typography>
            <br />
            <Button sx={{ m:.5, width: .4, p:1, backgroundColor: "#a3b18a", color: "#3a5a40" }}><Link to={'/user/edit'}>Edit Profile</Link></Button>
            <Button sx={{ m:.5, width: .4, p:1, backgroundColor: "#a3b18a", color: "#3a5a40" }} onClick={handleDelete}>Delete Profile</Button>
            <br /> <br />
            </Container>
        } else {
            userInfo = <h1>No user is logged in.</h1>
    }

    return(
        <div>
            {userInfo}
        </div>
    )
}

export default User;