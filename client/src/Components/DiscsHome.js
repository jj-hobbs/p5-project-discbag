import { useEffect, useState } from "react";
import DiscCard from "./DiscCard.js";
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
        <Grid container spacing={1} justifyContent="space-evenly" alignItems="center">
            <Grid  justifyContent="space-evenly" alignItems="center" item xs={4}>
                <h2>Featured Disc</h2>
                <DiscCard key={disc.id} user={user} disc={disc}/>
            </Grid>
        </Grid>
    )
}

export default DiscsHome;