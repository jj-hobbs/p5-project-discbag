import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import UserCom from './UserCom.js'

function UserComments({user}) {
    const [userA, setUserA] = useState(user);
    const [comments, setComments] = useState([]);
    const [discs, setDiscs] = useState([]);
    const location = useLocation();

    useEffect(() => {
        setUserA(user)
        fetch(`/users/${userA.id}`).then((resp) => {
          if (resp.ok) {
            resp.json().then((c) => {
              setComments(c.comments);
            });
          }
        });
        fetch('/discs').then((disc) => {
            if (disc.ok) {
              disc.json().then((disc) => {
                setDiscs(disc);
              });
            }
        });
    }, [])

    return(
        <div>
            <h2>{user.name}'s comments</h2>
            {comments.length > 0 ? (
                <div>
                    {comments.map((comment) => (
                        <UserCom key={comment.id} discs={discs} comment={comment} user={userA} />
                    ))}
                </div>
            ) : (
                <h3>You have no comments! Check out our discs and comment on them!</h3>
            )}
        </div>
    )
}

export default UserComments;