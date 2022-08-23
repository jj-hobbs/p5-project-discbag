import { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

function UserCom({comment, discs, user}) {
    const [theseDiscs, setTheseDiscs] = useState(discs)
    const [thisComment, setThisComment] = useState(comment)
    const [commentedDiscs, setCommentedDiscs] = useState(null)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const location = useLocation();

    let commentedDisc

    useEffect(() => {
        setTheseDiscs(discs)
        setThisComment(comment)
        theseDiscs.forEach(disc => {
            if(disc.id ===thisComment.disc_id){
                setCommentedDiscs(disc)
            }
        })
    }, [])

    console.log(commentedDiscs)

    function handleDelete() {
        fetch(`/comments/${comment.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
        .then((c) => {
            if (c.ok) {
                navigate(`/user`)
            } else {
                c.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
    }

    return(
        <>
        <Card sx={{ width: 1 }} elevation={10} component={Paper}>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <Typography>{comment.content}</Typography>
            <Button 
                variant="outlined" 
                sx={{ 
                    m:.5, 
                    width: .35, 
                    p:1, 
                    color: "white", 
                    backgroundColor: "#3a5a40" 
                }}
            >
                <Link 
                    to="/user/comments/:id" 
                    state={{comment: {comment}}}
                >
                    Edit Comment
                </Link>
            </Button>
            <Button 
                variant="outlined" 
                sx={{ 
                    m:.5, 
                    width: .6, 
                    p:1, 
                    color: "white", 
                    backgroundColor: "#3a5a40" 
                }} 
                onClick={handleDelete}
            >
                Delete Comment
            </Button>
        </Card>
        <br />
        </>
    )
}

export default UserCom;