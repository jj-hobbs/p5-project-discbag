import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CreateDisc({ user }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        let starterFormData = {
            title: "",
            author: "",
            lines: "",
            linecount: null,
            user_id: null
        }
        setFormData(starterFormData);
    }, [])

    function goBack(e) {
        e.preventDefault()
        navigate(`/user/poems`)
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('/poems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(readyNewPoem())
        }).then((p) => {
            if (p.ok) {
                p.json().then((poem) => {
                    console.log(poem);
                    navigate('/user/poems')
                });
            } else {
                p.json().then((json) => setErrors(Object.entries(json.errors)));
            }
        })
    }

    function readyNewPoem(e){
        let toSend = formData
        toSend.user_id = user.id
        toSend.lines = toSend.lines.split("/")
        toSend.linecount = toSend.lines.length
        console.log(toSend)
        return toSend
    }

    return(
        <div>
            <h2>Submit your poem here:</h2>
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                    type="text"
                    name="title"
                    placeholder="Poem Title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <label>
                    Author:
                    <input
                    type="text"
                    name="author"
                    placeholder="Author of Poem"
                    value={formData.author}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <h3>NOTE: Please indicate line separation with the '/' symbol in your poem.</h3>
                <label>
                    Poem Contents:
                    <textarea
                    name="lines"
                    type="text"
                    placeholder="Write Poem Here"
                    value={formData.lines}
                    onChange={handleChange}
                    />
                </label>
                <br />
                <br />
                <button>Create Poem</button>
                <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default CreateDisc;