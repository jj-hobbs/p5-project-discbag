import { useState, useEffect} from 'react'

function CommentCard({comment}) {
    const [thisUser, setThisUser] = useState({})

    useEffect(()=>{
        fetch(`/users/${comment.commenter_id}`)
        .then(resp => resp.json())
        .then(r => setThisUser(r))
    },[])

    return(
        <div>
            <li>{comment.content}</li>
            <small>- {thisUser.name}</small>
            <br /> <br />
        </div>
    )
}

export default CommentCard;