import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import UserCom from './UserCommentCard.js'
import Grid from '@mui/material/Grid';

function UserCommentsPage({user}) {
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
      <>
        <h2>Your comments</h2>
          <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
            <Grid  justifyContent="space-evenly" alignItems="center" item xs={3}>
              {comments.length > 0 ? (
                <div>
                    {comments.map((comment) => (
                        <UserCom key={comment.id} discs={discs} comment={comment} user={userA} />
                    ))}
                  <br /> <br />
                </div>
                
            ) : (
                <h3>You have no comments! Check out our discs and comment on them!</h3>
            )}
            </Grid>
          </Grid>
          <br />
        </>
    )
}

export default UserCommentsPage;