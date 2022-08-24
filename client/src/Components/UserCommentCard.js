import { useEffect, useState } from "react";
import {useNavigate, useLocation, Link} from 'react-router-dom';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";

function UserCommentCard({comment, discs, user}) {
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
        <Card sx={{ width: 1, backgroundColor: "#7d977d" }} elevation={10} component={Paper}>
            {errors?errors.map(e => <div key={e[0]}>{e[1]}</div>):null}
            <Typography>{comment.content}</Typography>
            <Button 
                variant="outlined" 
                sx={{ 
                    m:.5, 
                    width: .45, 
                    p:1,  
                    backgroundColor: "#eff0f2",
                    "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" }
                }}
            >
                <Link 
                    color="#2d433c"
                    underline="none"
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
                    width: .5, 
                    p:1, 
                    color: "#2d433c", 
                    backgroundColor: "#eff0f2", 
                    "&:hover": { backgroundColor: "bfc0bd", color: "#2d433c" }
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

export default UserCommentCard;