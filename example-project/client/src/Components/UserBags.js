import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Bag from "./Bag.js"

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
        <div>

        {bags.length>0? 
        <div>
        <br />
        {
            bags.map(bag => (
                <Bag key={bag.id} bag={bag} edit={true} user={user} setUser={setUser}/>
            ))
        }
        </div> : <h2>You don't have any bags yet. Browse the selection of discs <Link to="/discs">here.</Link></h2>}
        </div>
    )
}

export default UserBags;