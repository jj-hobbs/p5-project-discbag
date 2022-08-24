import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DiscCard from "./DiscCard.js"
import Grid from '@mui/material/Grid';

function UserCreatedDiscs({user}) {
    const [userDiscs, setUserDiscs] = useState([])

    useEffect(() => {
        async function goGetEm() {
            await fetch(`/users/${user.id}`)
                .then((p) => p.json())
                .then((p) => {
                    setUserDiscs(p.discs)
                })
        }
        goGetEm()
    }, [user.id])

    return(
        <>
        {userDiscs.length>0? 
            <div>
                <h1>{user.name}'s Created Discs</h1>
                <h2>Make another one <Link to="/disc/new">here</Link>!</h2>
                <Grid container spacing={2} justifyContent="space-evenly" alignItems="center">
                    {userDiscs.map((disc) => (
                        <Grid  justifyContent="space-evenly" alignItems="center" item xs={4}>
                            <DiscCard key={disc.id} disc={disc} edit={true}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        :
            <div>
                <h2>You haven't made any discs. Make one <Link to="/disc/new">here.</Link></h2>
            </div>
        }

        </>
        
    )
}

export default UserCreatedDiscs;