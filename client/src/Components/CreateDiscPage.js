import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { Button, Input, FormControl, FormLabel, TextField } from "@mui/material";

function CreateDiscPage({ user }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let starterFormData = {
            brand: "",
            mold: "",
            image: "",
            speed: "",
            glide: "",
            turn: "",
            fade: "",
            description: "",
            user_id: null
        }
        setFormData(starterFormData);
    }, [])

    function goBack(e) {
        e.preventDefault()
        navigate(`/user/discs`)
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/discs', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(readyNewDisc())
        }).then((p) => {
            if (p.ok) {
                p.json().then((disc) => {
                    console.log(disc);
                    navigate('/user/discs')
                });
            } else {
                p.json().then((json) => setErrors(Object.entries(json.errors)));
            }
        })
    }

    function readyNewDisc(e) {
        let toSend = formData
        toSend.user_id = user.id
        // toSend.brand = disc.brand
        // toSend.mold = disc.mold
        // toSend.image = image
        // toSend.speed = speed
        // toSend.glide = glide
        // toSend.turn = turn
        // toSend.fade = fade
        // toSend.description = description
        console.log(toSend)
        return toSend
    }

    return (
        <div>
            <h2>Create a Disc</h2>

            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>
                        Brand:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="brand"
                            placeholder="Disc Brand"
                            value={formData.brand}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    <FormLabel>
                        Mold:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="mold"
                            placeholder="Mold"
                            value={formData.mold}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    <FormLabel>
                        Image URL:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="image"
                            placeholder="Image"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    <FormLabel>
                        Speed:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="speed"
                            placeholder="Speed"
                            value={formData.speed}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    <FormLabel>
                        Glide:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="glide"
                            placeholder="Glide"
                            value={formData.glide}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    <FormLabel>
                        Turn:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="turn"
                            placeholder="Turn"
                            value={formData.turn}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    <FormLabel>
                        Fade:
                        <Input
                            sx={{ mx: 2 }}
                            type="text"
                            name="fade"
                            placeholder="Fade"
                            value={formData.fade}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <FormLabel>
                        Description:
                        <br /> <br />
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={4}
                            type="text"
                            sx={{ mx: 2 }}
                            name="description"
                            placeholder="Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </FormLabel>
                    <br />
                    {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
                    <br />
                </FormControl>
                <br />
                <div>
                    <Button variant="outlined" type="submit" sx={{ m: .5, width: .4, p: 1, color: "#eff0f2", backgroundColor: "#2d433c" }}>Create Disc</Button>
                    <Button variant="outlined" type="submit" sx={{ m: .5, width: .4, p: 1, color: "#eff0f2", backgroundColor: "#2d433c" }} onClick={e => goBack(e)}>Back</Button>
                </div>
            </form>

        </div>
    )
}

export default CreateDiscPage;