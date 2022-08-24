import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Bag from "./BagCard.js"
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function UserBags({user, setUser}) {
    
    useEffect(() => {
        fetch(`/users/${user.id}`).then((response) => {
          if (response.ok) {
            response.json().then((client) => {
              setUser(client);
            });
          } else {
            console.log("We're not rendering nothing pal");
          }
        });
        
      }, []);

    const { bags } = user

    return(
        <>
        {bags.length>0? 
          <Grid 
            container spacing={2} 
            justifyContent="space-evenly" 
            alignItems="center"
          >
          <br />
            {bags.map((bag) => (
              <Grid 
                justifyContent="space-evenly" 
                alignItems="center" 
                item xs={4}
              >
              <Bag 
                key={bag.id} 
                bag={bag} 
                edit={true} 
                user={user} 
                setUser={setUser}
              />
              </Grid>
            ))}
            <br />
          </Grid> : <h2>You don't have any bags yet. Browse the selection of discs <Link to="/discs">here.</Link></h2>}
        </>
    )
}

export default UserBags;