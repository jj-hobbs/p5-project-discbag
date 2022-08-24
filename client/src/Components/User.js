import { Link, useParams, useNavigate, NavLink } from "react-router-dom";
import { useState } from "react";
// import { useEffect } from "react";
import { Button, Card, Typography } from "@mui/material";
// import { Card } from "@mui/material";
import { Container } from "@mui/system";

function User({ user, deleteUser }) {
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    const params = useParams()
    const [alert, setAlert] = useState(false)

    function handleDelete() {
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => {
                if (res.ok) {
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
            <Container sx={{ backgroundColor: "#7d977d" }}>
                <br />
                <Typography sx={{ color: "#eff0f2" }}>
                    <h2>Hello, {user.name}!</h2>
                </Typography>
                <Typography sx={{ color: "#eff0f2" }}>Your profile info:</Typography>
                <br />
                <Typography sx={{ color: "#eff0f2" }}>
                    Name: {name}
                    <br />
                    Username: {username}
                    <br />
                    Email: {email}
                </Typography>
                <br />
                <div>
                    <NavLink to={'/user/edit'}>
                        <Button sx={{ m: .5, width: .4, p: 1, backgroundColor: "#2d433c", color: "#eff0f2", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" } }}>
                            Edit Profile
                        </Button>
                    </NavLink>
                    <Button sx={{ m: .5, width: .4, p: 1, backgroundColor: "#2d433c", color: "#eff0f2", "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" } }} onClick={handleDelete}>Delete Profile</Button>
                </div>
                <br />
            </Container>
    } else {
        userInfo = <h1>No user is logged in.</h1>
    }

    return (
        <div>
            {userInfo}
        </div>
    )
}

export default User;