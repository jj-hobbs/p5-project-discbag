import { useState, useEffect} from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Disc from "./Disc.js"

function NewCommentForm() {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState([]);

    let starterFormData

    useEffect(() => {
        function start() {
            let starterFormData = {
                content: "",
                commenter_id: location.state.user.user.id,
                commented_disc_id: location.state.disc.disc.id
            }
        setFormData(starterFormData)
        }
        start();
    }, [])

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function goBack(e) {
        e.preventDefault();
        navigate(`/discs`);
      }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }).then((c) => {
            if (c.ok) {
              c.json().then((comment) => {
                console.log(comment)
                navigate("/discs")
              });
            } else {
              c.json().then((json) => setErrors(Object.entries(json.errors)));
            }
        });
    }

    return(
        <div>
            <h2>Leave a comment for {location.state.disc.disc.brand} {location.state.disc.disc.mold}</h2>
            {/* <p>{location.state.disc.disc.lines?.map((line) => (
                <ul>{line}</ul>))}</p>
            <small>Linecount: {location.state.disc.disc.linecount}</small> */}
            {errors ? errors.map((e) => <div key={e[0]}>{e[1]}</div>) : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Comment:
                    <textarea
                        type="text"
                        name="content"
                        placeholder="Comment here"
                        value={formData.content}
                        onChange={handleChange}
                    >
                    </textarea>
                </label>
                <button>Leave Comment</button>
                <button onClick={e=>goBack(e)}>Back</button>
            </form>
        </div>
    )
}

export default NewCommentForm;