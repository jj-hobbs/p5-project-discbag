import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Input, FormControl } from "@mui/material";

function CreateDisc({ user }) {
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

    function readyNewDisc(e){
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

    return(
        <div>
            <h2>Create a Disc</h2>
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
                    placeholder="Mold"
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
                    placeholder="Image"
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
                    type="text"
                    name="speed"
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
                    type="text"
                    name="glide"
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
                    type="text"
                    name="turn"
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
                    type="text"
                    name="fade"
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
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}}>Create Disc</Button>
                <Button variant="outlined" type="submit" style={{color:"#000000", backgroundColor: "	#FFFFFF"}} onClick={e=>goBack(e)}>Back</Button>
            </FormControl>
            </form>
        </div>
    )
}

export default CreateDisc;