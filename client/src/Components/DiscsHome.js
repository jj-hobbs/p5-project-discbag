import { useEffect, useState } from "react";
import Disc from "./Disc.js";
import Grid from '@mui/material/Grid';

function DiscsHome({user}) {
    const [disc, setDisc] = useState([])

    useEffect(() => {
        fetch("/discs")
          .then((r) => r.json())
          .then((r) => {
            setDisc(setFeatured(r));
          });

      }, []);

    function setFeatured(data) {
        let featuredDisc = data[Math.floor(Math.random()*data.length)]
        return featuredDisc
    }
    
    return(
        <Grid container spacing={3} justifyContent="space-evenly" alignItems="center">
            <Grid  justifyContent="space-evenly" alignItems="center" item xs={3}>
                <h2>Featured Disc</h2>
                <Disc key={disc.id} user={user} disc={disc}/>
            </Grid>
        </Grid>
    )
}

export default DiscsHome;