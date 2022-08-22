import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
            <h2>Update your disc here:</h2>
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Brand:
                    <input
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
                    <input
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
                    <input
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
                    <input
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
                    <input
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
                    <input
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
                    <input
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
                    <input
                    name="description"
                    type="text"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <button>Update Disc</button>
                <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default UserDiscEditForm;