import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FormControl, Input, Button, Container, Paper } from '@mui/material';

function UserDiscEditForm({user}) {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([])

    useEffect(() => {
        async function start(){
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

    function handleSubmit(e){
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

    return(
        <div>
            <Container sx={{ width: 1 }} elevation={10} component={Paper}>
            <h2>Update your disc here:</h2>
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <form onSubmit={handleSubmit}>
            <FormControl>
                <label>
                    Brand:
                    <Input
                        sx={{ml:2}} 
                        type="text"
                        name="brand"
                        placeholder="Disc Brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Mold:
                    <Input
                        sx={{ml:2}} 
                        type="text"
                        name="mold"
                        placeholder="Disc Mold"
                        value={formData.mold}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Image URL:
                    <Input
                        sx={{ml:2}} 
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Speed:
                    <Input
                        sx={{ml:2}} 
                        name="speed"
                        type="text"
                        placeholder="Speed"
                        value={formData.speed}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Glide:
                    <Input
                        sx={{ml:2}} 
                        name="glide"
                        type="text"
                        placeholder="Glide"
                        value={formData.glide}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Turn:
                    <Input
                        sx={{ml:2}} 
                        name="turn"
                        type="text"
                        placeholder="Turn"
                        value={formData.turn}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Fade:
                    <Input
                        sx={{ml:2}} 
                        name="fade"
                        type="text"
                        placeholder="Fade"
                        value={formData.fade}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Description:
                    <Input
                        sx={{ml:2}} 
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <Button 
                    variant="contained" 
                    type="submit" 
                    sx={{ 
                        m:.5, 
                        width: .6, 
                        p:1, 
                        color: "white", 
                        backgroundColor: "#3a5a40" 
                    }} 
                >
                    Update Disc
                </Button>
                <Button 
                    variant="contained" 
                    type="submit" 
                    sx={{ 
                        m:.5, 
                        width: .6, 
                        p:1, 
                        color: "white", 
                        backgroundColor: "#3a5a40" 
                    }} 
                    onClick={e=>goBack(e)}
                >
                    Back
                </Button>
                </FormControl>
            </form>
            </Container>
        </div>
    )
}

export default UserDiscEditForm;