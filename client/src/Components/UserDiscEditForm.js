import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, Input, Button, Container, Paper, Typography } from '@mui/material';

function UserDiscEditForm({ user }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([])

    useEffect(() => {
        async function start() {
            let starterFormData = {
                "brand": location.state.disc.disc.brand,
                "mold": location.state.disc.disc.mold,
                "image": location.state.disc.disc.image,
                "speed": location.state.disc.disc.speed,
                "glide": location.state.disc.disc.glide,
                "turn": location.state.disc.disc.turn,
                "fade": location.state.disc.disc.fade,
                "description": location.state.disc.disc.description,
                "user_id": location.state.disc.disc.user_id
            }
            setFormData(starterFormData)
        }
        start()
    }, [])

    // const lines = location.state.disc.disc.lines.toString()

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    // function readyUpdateDisc(){
    //     let toSend = formData
    //     toSend.lines = toSend.lines.split("/")
    //     toSend.linecount = toSend.lines.length
    //     console.log(toSend)
    //     return toSend
    // }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/discs/${location.state.disc.disc.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(p => {
                if (p.ok) {
                    navigate(`/user/discs`)
                } else {
                    p.json().then(json => setErrors(Object.entries(json.errors)))
                }
            })
    }

    function goBack(e) {
        e.preventDefault();
        navigate(`/user/discs`);
    }

    return (
        <Container sx={{ width: 1, backgroundColor: "#7d977d" }} elevation={10} component={Paper}>
            <h2>Update your disc here:</h2>
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <FormControl onSubmit={handleSubmit} align="center">
                <form onSubmit={handleSubmit} align="center">
                    <Typography sx={{ color: "#2d433c" }}>
                    Brand:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        type="text"
                        name="brand"
                        placeholder="Disc Brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Mold:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        type="text"
                        name="mold"
                        placeholder="Disc Mold"
                        value={formData.mold}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Image URL:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Speed:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        name="speed"
                        type="text"
                        placeholder="Speed"
                        value={formData.speed}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Glide:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        name="glide"
                        type="text"
                        placeholder="Glide"
                        value={formData.glide}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Turn:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        name="turn"
                        type="text"
                        placeholder="Turn"
                        value={formData.turn}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Fade:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        name="fade"
                        type="text"
                        placeholder="Fade"
                        value={formData.fade}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Typography sx={{ color: "#2d433c" }}>
                    Description:
                    <Input
                        sx={{ ml: 2, color: "#eff0f2" }}
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </Typography>
                <br />
                <br />
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        m: .5,
                        width: .4,
                        p: 1,
                        color: "#eff0f2",
                        backgroundColor: "#2d433c"
                    }}
                >
                    Update Disc
                </Button>
                <Button
                    variant="contained"
                    type="submit"
                    sx={{
                        m: .5,
                        width: .4,
                        p: 1,
                        color: "#eff0f2",
                        backgroundColor: "#2d433c"
                    }}
                    onClick={e => goBack(e)}
                >
                    Back
                </Button>
                <br />
                </form>
            </FormControl>
        </Container>
    )
}

export default UserDiscEditForm;